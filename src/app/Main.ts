import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import statsJs from 'stats.js';
import 'seedrandom';

import PointerLock from '@app/PointerLock';
import World from '@world/World';
import PostProcess from '@app/PostProcess';

import { configSvc } from '@app/shared/services/config.service';
import { playerSvc } from '@shared/services/player.service';
import { multiplayerSvc } from '@online/services/multiplayer.service';
import { uiSvc } from '@ui/services/ui.service';

import { INTERACTION_TYPE } from '@app/shared/enums/interaction.enum';
import { UIStates } from '@ui/enums/UIStates.enum';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

class Main {
  private renderer: THREE.WebGLRenderer;
  private postProcess: PostProcess;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private controls: PointerLockControls;

  private world: World;

  private containerElement: HTMLElement;

  private lastTime: number;
  private focused: boolean;
  private stats: statsJs;

  constructor() {
    this.containerElement = document.body;
    this.lastTime = window.performance.now();

    const statsDomStyle = {
      left: 'unset',
      top: 'unset',
      right: 0,
      bottom: 0,
    };
    if (configSvc.debug) {
      this.stats = new statsJs();
      this.stats.showPanel(0);
      Object.assign(statsDomStyle, this.stats.dom.style);
      document.body.appendChild(this.stats.dom);
    }

    this.scene = new THREE.Scene();

    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 32 * 8 * 2048;

    this.camera = new THREE.PerspectiveCamera(50, aspect, near, far);
  }

  async init() {
    this.initControls();

    window.isFocused = true;

    window.addEventListener('blur', () => {
      window.isFocused = false;
    });

    window.addEventListener('focus', () => {
      window.isFocused = true;
      this.lastTime = window.performance.now();
    });

    this.world = new World(this.scene, this.camera, this.controls);
    playerSvc.init();

    this.initPointerLock();
    this.initRenderer();

    this.postProcess = new PostProcess(this.scene, this.renderer, this.camera);
    this.postProcess.init();
  }

  async load(seed: string, online: boolean): Promise<string> {
    if (online === true) {
      multiplayerSvc.init(this.scene, seed);
    }
    return await this.world.init(seed);
  }

  private initControls() {
    this.controls = new PointerLockControls(this.camera, this.containerElement);
  }

  private initRenderer() {
    // renderer setup
    // @ts-ignore
    this.renderer = new THREE.WebGLRenderer({ powerPreference: 'high-performance',
      antialias: configSvc.config.ENABLE_AA,
      logarithmicDepthBuffer: true,
      alpha: true,
    });
    const rendererStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '-1',
    };

    Object.assign(this.renderer.domElement.style, rendererStyle);

    this.renderer.shadowMap.enabled = configSvc.config.ENABLE_SHADOWS;
    this.renderer.shadowMap.type = configSvc.config.SHADOW_MAP_TYPE;

    // this.renderer.shadowMap.autoUpdate = false;
    // this.renderer.shadowMap.needsUpdate = true;

    this.renderer.setClearColor(new THREE.Color(0x000000));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(w, h);
      this.renderer.setPixelRatio(window.devicePixelRatio);

      this.postProcess.resize(w, h);
    });

    this.containerElement.append(this.renderer.domElement);
  }

  private initPointerLock() {
    // handle pointer lock authorization
    if (PointerLock.available) {

      const pointerlockchange = (e) => {
        this.controls.isLocked = PointerLock.enabled;

        if (this.controls.isLocked && multiplayerSvc.isUsed() && multiplayerSvc.chatInputIsFocused()) {
          multiplayerSvc.toggleChatInutFocus(false);
        }
      };

      const pointerlockerror = (e) => { };

      PointerLock.addEventListener('pointerlockchange', pointerlockchange, false);
      PointerLock.addEventListener('pointerlockerror', pointerlockerror, false);

      document.body.addEventListener('mouseup', e => {
        const button = e.which;
        if (!uiSvc.isState(UIStates.GAME)) return;
        if (!this.controls.isLocked || !this.world.isInitialized() || !(button === 1 || button === 3)) { return; }

        // mouse position always in the center of the screen
        this.world.handlePlayerInteraction(button === 1 ? INTERACTION_TYPE.MOUSE_LEFT_CLICK : INTERACTION_TYPE.MOUSE_RIGHT_CLICK);
      });

      document.body.addEventListener('keydown', e => {
        if (this.world.isInitialized()) {
          this.world.handleKeyboard(e.key, this.controls.isLocked);
        }
      });

      document.body.addEventListener('keyup', e => {
        if (e.key === 'Escape') return;
        if (this.world.isInitialized()) {
          this.world.handleKeyboard(e.key, false);
        }
      });

      document.body.addEventListener('wheel', e => {
        if (!this.controls.isLocked || !this.world.isInitialized()) { return; }
        this.world.handlePlayerInteraction(e.wheelDelta > 0 ? INTERACTION_TYPE.MOUSE_WHEEL_UP : INTERACTION_TYPE.MOUSE_WHEEL_DOWN);
      });
    }
  }

  private render() {
    if (configSvc.debug) this.stats.begin();

    const time = window.performance.now();
    const elapsed = time - this.lastTime;
    const delta = elapsed / 1000;
    this.lastTime = time;

    // update
    if (this.world.isInitialized()) {
      this.world.update(delta);

      if (playerSvc.isUnderwater()) {
        this.postProcess.update();
      }

      TWEEN.update();

      const color: THREE.Color = this.world.getWeather().getFogColor();
      this.scene.background = color;
      if (this.scene.fog) this.scene.fog.color = color;

      // switch render func if underwater
      if (playerSvc.isUnderwater()) {
        this.postProcess.render(delta);
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    }

    if (configSvc.debug) this.stats.end();
  }

  public run() {
    this.renderer.setAnimationLoop(this.render.bind(this));
  }
}

export default Main;
