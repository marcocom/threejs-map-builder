import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import {CopyShader} from 'three/examples/jsm/shaders/CopyShader';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {MaskPass} from 'three/examples/jsm/postprocessing/MaskPass';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {VignetteShader} from 'three/examples/jsm/shaders/VignetteShader';
import {ColorCorrectionShader} from 'three/examples/jsm/shaders/ColorCorrectionShader';

import { IEffect } from '@shared/models/effect.model';

import vergilwaterVertexGlsl from '@shaders/vergilwater.vertex.glsl';
import vergilwaterFragmentGlsl from '@shaders/vergilwater.fragment.glsl';

import { configSvc } from '@app/shared/services/config.service';

THREE.VergilWaterShader = {
  uniforms: {
    tDiffuse: { type: 't', value: null },
    time: { type: 'f', value: 0.0 },
    distort_speed: { type: 'f', value: 0.0004 },
    distortion: { type: 'f', value: 0.075 },
    centerX: { type: 'f', value: 0.5 },
    centerY: { type: 'f', value: 0.5 },
  },
  vertexShader: vergilwaterVertexGlsl,
  fragmentShader: vergilwaterFragmentGlsl
};

class PostProcess {
  private readonly scene: THREE.Scene;
  private readonly renderPass: RenderPass;
  private composer: EffectComposer;

  private readonly effects: IEffect[];

  /**
   * PostProcess constructor
   * @param {THREE.Scene} scene
   * @param {THREE.WebGLRenderer} renderer
   * @param {THREE.Camera} camera
   */
  constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer, camera: THREE.Camera) {
    this.scene = scene;

    this.composer = new EffectComposer(renderer);
    this.renderPass = new RenderPass(this.scene, camera);

    this.effects = [];

    const size = renderer.getSize(new THREE.Vector2(0, 0));
    this.resize(size.width, size.height);
  }

  init() {
    // init render passes
    this.composer.addPass(this.renderPass);

    // vignette effect
    const pass1 = new ShaderPass(VignetteShader);
    pass1.uniforms.darkness.value = 2.00;
    this.composer.addPass(pass1);
    this.effects.push({ effect: pass1, update: null });

    // blue color shift
    const pass2 = new ShaderPass(ColorCorrectionShader);
    pass2.uniforms.addRGB.value.y = 0.025;
    pass2.uniforms.addRGB.value.z = 0.10;
    pass2.uniforms.powRGB.value.y = 1.25;
    pass2.uniforms.powRGB.value.z = 0.80;
    this.composer.addPass(pass2);
    this.effects.push({ effect: pass2, update: null });

    if (configSvc.config.ENABLE_WATER_EFFECTS) {
      // distortion
      const pass3 = new ShaderPass(THREE.VergilWaterShader);
      pass3.uniforms['centerX'].value = 0.8;
      pass3.uniforms['centerY'].value = 0.8;
      this.composer.addPass(pass3);
      this.effects.push({ effect: pass3, update: () => { pass3.uniforms['time'].value += Math.random(); } });

      const pass4 = new ShaderPass(THREE.VergilWaterShader);
      pass4.uniforms['centerX'].value = 0.2;
      pass4.uniforms['centerY'].value = 0.2;
      this.composer.addPass(pass4);
      this.effects.push({ effect: pass4, update: () => { pass4.uniforms['time'].value += Math.random(); } });

      const pass5 = new ShaderPass(THREE.VergilWaterShader);
      pass5.uniforms['centerX'].value = 0.2;
      pass5.uniforms['centerY'].value = 0.8;
      this.composer.addPass(pass5);
      this.effects.push({ effect: pass5, update: () => { pass5.uniforms['time'].value += Math.random(); } });

      const pass6 = new ShaderPass(THREE.VergilWaterShader);
      pass6.uniforms['centerX'].value = 0.8;
      pass6.uniforms['centerY'].value = 0.2;
      this.composer.addPass(pass6);
      this.effects.push({ effect: pass6, update: () => { pass6.uniforms['time'].value += Math.random(); } });
    }

    this.effects[this.effects.length - 1].effect.renderToScreen = true;
  }

  update() {
    for (const effect of this.effects) {
      if (effect.update) effect.update();
    }
  }

  /**
   * @param {number} delta
   */
  render(delta: number) {
    this.composer.render(delta);
  }

  /**
   * @param {number} w
   * @param {number} h
   */
  resize(w: number, h: number) {
    this.composer.setSize(w * window.devicePixelRatio, h * window.devicePixelRatio);
  }
}

export default PostProcess;
