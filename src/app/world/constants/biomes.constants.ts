import RainForestBiome from '@world/biomes/RainForestBiome';
// import HighlandBiome from '@app/world/biomes/legacybiomes/LegacyHighlandBiome';
import OceanBiome from '@world/biomes/OceanBiome';
import SwampBiome from '@world/biomes/SwampBiome';
import DesertBiome from '@world/biomes/DesertBiome';
import SnowBiome from '@world/biomes/SnowBiome';
import FjordBiome from '@world/biomes/FjordBiome';
import DesertIslandBiome from '@world/biomes/DesertIslandBiome';
import TaigaBiome from '@world/biomes/TaigaBiome';
import MountainBiome from '../biomes/MountainBiome';
import WhiteboxDemoBiome from '../biomes/WhiteboxDemoBiome';

interface IWeightedBiomePic {
  class: any;
  weight: number;
}

export const Biomes: IWeightedBiomePic[] = [
  { class: RainForestBiome, weight: 12 }, //12
  // { class: HighlandBiome, weight: 0 },
  { class: MountainBiome, weight: 10 }, //10 //replaced highland 
  { class: OceanBiome, weight: 14 }, //14
  { class: SwampBiome, weight: 12 }, //12
  { class: DesertBiome, weight: 14 }, //14
  { class: SnowBiome, weight: 6 }, //6
  { class: FjordBiome, weight: 8 }, //8
  { class: DesertIslandBiome, weight: 14 }, //14
  { class: TaigaBiome, weight: 8 }, //8
  { class: WhiteboxDemoBiome, weight: 0}
];
