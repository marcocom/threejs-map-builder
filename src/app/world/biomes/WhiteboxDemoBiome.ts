import Biome from '@world/Biome';
import Terrain from '@world/Terrain';
import Chunk from '@world/Chunk';


import { IBiome } from '@world/models/biome.model';

import { SUB_BIOMES } from '@world/constants/subBiomes.constants';

import ForestSFXMp3 from '@sounds/ForestSFX.mp3';

class WhiteboxDemoBiome extends Biome {
  constructor(terrain: Terrain) {
    super('WHTIEBOX', terrain);

    this.water = false;
    this.waterDistortion = true;
    this.waterDistortionFreq = 1.25;
    this.waterDistortionAmp = 512.0;
    this.sound = ForestSFXMp3;
  }

  handleClick(raycaster: THREE.Raycaster) { }

  /**
   * Compute elevation
   * @param {number} x coord component
   * @param {number} z coord component
   * @return {number} elevation value
   */
  computeElevationAt(x: number, z: number): number {
    const nx = (x - Terrain.SIZE_X / 2) / (1024 * 128);
    const nz = (z - Terrain.SIZE_Z / 2) / (1024 * 128);

    let e = 0;
    // let e = 0.235 * this.generator.noise2(0.75 * nx, 0.75 * nz);
    // e += 0.2 * this.generator.noise3(1 * nx, 1 * nz);
    // e += 0.085 * this.generator.ridgeNoise(1 * nx, 1 * nz);
    // e += 0.0125 * this.generator.noise(32 * nx, 32 * nz);
    // e += 0.006 * this.generator.noise2(64 * nx, 64 * nz);
    // e += 0.075 * this.generator.noise(4 * nx, 4 * nz);

    return e;
  }

  getParametersAt(e: number, m: number): IBiome {
    return SUB_BIOMES.WHITEBOX;
  }
}

export default WhiteboxDemoBiome;
