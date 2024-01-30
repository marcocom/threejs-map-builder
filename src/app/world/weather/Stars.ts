import * as THREE from 'three';

import World from '@world/World';
import Chunk from '@world/Chunk';
import MathUtils from '@utils/Math.utils';
import CommonUtils from '@utils/Common.utils';

import { playerSvc } from '@shared/services/player.service';

class Star {
  private points: THREE.Points;
  private readonly SKY_HEIGHT:number = 2.5;
  /**
   * Starfield init
   * Calculate stars position on a sphere around the world
   * @param {THREE.Scene} scene
   */
  init(scene: THREE.Scene) {
    const starsCount: number = 1024;
    const stars = new THREE.BufferGeometry();

    const material = new THREE.PointsMaterial({
      size: 4096,
      map: CommonUtils.createStarTexture('#fefdef'),
      transparent: true,
      depthTest: true,
      opacity: 0.75,
      alphaTest: 0.15,
      fog: false,
    });
    /*
    if (World.GENERATE_STARS) {
      for (let i = 0; i < starsCount; i++) {

        const radius = Chunk.HEIGHT * this.SKY_HEIGHT;
        const theta = 2 * Math.PI * MathUtils.rng();
        const phi = Math.acos(2 * MathUtils.rng() - 1);

        const x = (radius * Math.sin(phi) * Math.cos(theta));
        const y = (radius * Math.sin(phi) * Math.sin(theta));
        const z = (radius * Math.cos(phi));

        const skyCoords = new THREE.Vector3(x, y, z);
        stars.vertices.push(skyCoords);
      }
    }
    */

    if (World.GENERATE_STARS) {
      for (let i = 0; i < starsCount; i++) {
        const vertices = [];
        const radius = Chunk.HEIGHT * this.SKY_HEIGHT;
        const theta = 2 * Math.PI * MathUtils.rng();
        const phi = Math.acos(2 * MathUtils.rng() - 1);

        const x = (radius * Math.sin(phi) * Math.cos(theta));
        const y = (radius * Math.sin(phi) * Math.sin(theta));
        const z = (radius * Math.cos(phi));

        const skyCoords = new THREE.Vector3(x, y, z);

        vertices.push(skyCoords);
        const float = new Float32Array(vertices);
        stars.setAttribute('position', new THREE.BufferAttribute(float, 3));
      }
    }

    this.points = new THREE.Points(stars, material);
    this.points.position.copy(playerSvc.getPosition());
    this.points.frustumCulled = false;

    scene.add(this.points);
  }

  /**
   * Update starfield with player movements
   */
  update() {
    const position = playerSvc.getPosition();
    this.points.position.copy(position);
  }
}

export default Star;
