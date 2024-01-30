import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import World from '@world/World';
import SoundManager from '@shared/SoundManager';

import { progressionSvc } from '@achievements/services/progression.service';
import { achievementSvc } from '@achievements/services/achievement.service';

import { IObject } from '@shared/models/object.model';
import { ITexture } from '@shared/models/texture.model';

import { OBJECTS } from '@shared/constants/object.constants';
import { TEXTURES } from '@shared/constants/texture.constants';

import Builder_Game_Item_Click_1 from '@sounds/sfx_game_click.mp3';
import Unlock_level_Game_Sound from '@sounds/sfx_unlock_level.mp3';
import Set_Down_Item_1 from '@sounds/sfx_voice_set-down-item.mp3';
import Small_Splash from '@sounds/sfx_splash.mp3';
import Bubbles from '@sounds/sfx_bubbles.mp3';
import Hehe_Boi from '@sounds/sfx_hehe-boy.mp3';
import Fairy_Meeting from '@sounds/intro_music.mp3';
import Underwater from '@sounds/ambiance_underwater.mp3';

import { VERSION_STORAGE } from '@app/Version';
import { STORAGES_KEY } from '@achievements/constants/storageKey.constants';
import { storageSvc } from '@shared/services/storage.service';
import { configSvc } from './config.service';
import { GraphicsQuality } from '../enums/graphicsQuality.enum';

class CoreService {

  async init(): Promise<any> {
    const storageVersion = storageSvc.get(STORAGES_KEY.version);
    if (storageVersion !== VERSION_STORAGE) {
      progressionSvc.reset();
      achievementSvc.reset();

      storageSvc.set(STORAGES_KEY.version, VERSION_STORAGE);
    }

    progressionSvc.init();

    await this.initModels();
    await this.initSounds();
    await this.initTextures();

    const sound = SoundManager.get('background_music');
    sound.play();
    sound.fade(0, sound.volume(), 5000);
  }

  private async initSounds(): Promise<any> {
    await SoundManager.add('click', Builder_Game_Item_Click_1, { volume: 1.0 });
    await SoundManager.add('trophy_unlock', Unlock_level_Game_Sound, { volume: 1.0 });
    await SoundManager.add('set_down', Set_Down_Item_1, { volume: 1.0 });
    await SoundManager.add('splash', Small_Splash, { volume: 1.0 });
    await SoundManager.add('bubbles', Bubbles, { volume: 1.0 });
    await SoundManager.add('hehe', Hehe_Boi, { volume: 1.0 });
    await SoundManager.add('background_music', Fairy_Meeting, { volume: 0.25, loop: true, pool: 1 });
    await SoundManager.add('underwater', Underwater, { volume: 0.5, loop: true, pool: 1 });
  }

  private async initModels(): Promise<any> {
    const stack = OBJECTS.map((element: IObject) => {
      const p:Promise<THREE.Object3D> = this.loadObjModel(element);

      return p.then((obj) => {
        console.log('\n\n>>>>>>> core.service.js INIT MODELS: object:', obj);
        obj.scale.set(World.OBJ_INITIAL_SCALE, World.OBJ_INITIAL_SCALE, World.OBJ_INITIAL_SCALE); // scale from maya size to a decent world size
      });
    });
    await Promise.all(stack);
  }

  /**
   * Load an obj file
   * @return Promise<any>
   * @param element
   */
  private loadObjModel(element: IObject): Promise<THREE.Object3D> {
    return new Promise<THREE.Object3D>((resolve, reject) => {
      const el:THREE.Object3D = World.LOADED_MODELS.get(element.name);
      if (World.LOADED_MODELS.has(element.name)) resolve(el);

      const mtlLoader = new MTLLoader();

      mtlLoader.load(element.mtl, (materials) => {
        const objLoader = new OBJLoader();
        materials.preload();
        objLoader.setMaterials(materials);
        console.log('MTLLoader >>> materials:', materials);
        objLoader.load(element.obj, (object) => {

          object.castShadow = true;
          object.receiveShadow = configSvc.config.OBJECT_RECEIVE_SHADOW;
          object.frustumCulled = true;

          object.traverse((child) => {
            console.log('ObjLoader > child:', child);
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = configSvc.config.OBJECT_RECEIVE_SHADOW;
              child.frustumCulled = true;

              if (!(child.material instanceof THREE.Material)) {
                child.material.forEach(material => {
                  material.flatShading = true;
                  if (element.doubleSide === true) material.side = THREE.DoubleSide;
                });
              } else {
                child.material.flatShading = true;
                if (element.doubleSide === true) child.material.side = THREE.DoubleSide;
              }
            }
          });

          object.userData.stackReference = element.name;
          object.userData.type = element.type;

          World.LOADED_MODELS.set(element.name, object);
          const box = new THREE.Box3().setFromObject(object);
          const size = box.getSize(new THREE.Vector3(0, 0, 0));

          resolve(object);
        }, null, () => reject());
      }, null, () => reject());
    });
  }

  /**
  * Loads all textures
  * @return {Promise<any>}
  */
  private initTextures(): Promise<any> {
    const loader = new THREE.TextureLoader();

    return new Promise(resolve => {
      TEXTURES.forEach((texture: ITexture) => {
        if (!World.LOADED_TEXTURES.has(texture.name)) {
          const img = loader.load(texture.img);
          World.LOADED_TEXTURES.set(texture.name, img);
        }
      });
      resolve();
    });
  }

}

export const coreSvc = new CoreService();
export default CoreService;
