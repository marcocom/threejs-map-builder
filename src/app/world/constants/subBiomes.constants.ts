import * as THREE from 'three';

import Chunk from '@world/Chunk';

import { IBiomes } from '@world/models/biomes.model';

export const SUB_BIOMES: IBiomes = {
  // DESERT BIOME
  DESERT: {
    name: 'DESERT',
    color: new THREE.Color(0xF7DFA1),
    organisms: [
      {
        weight: 0.55,
        name: ['cactus_1', 'cactus_2', 'cactus_3', 'cactus_4'],
        scarcity: 0.815,
        e: { low: Chunk.SEA_ELEVATION + 0.15, high: null },
        m: { low: 0.0, high: 0.4 },
        scale: { min: 1.0, max: 1.50 },
        float: false,
      },
      {
        weight: 0.20,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.955,
        e: null,
        m: null,
        scale: { min: 0.5, max: 1.5 },
        float: false,
      },
      // {
      //   weight: 0.05,
      //   name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
      //   scarcity: 0.985,
      //   e: null,
      //   m: null,
      //   scale: { min: 2.0, max: 3.5 },
      //   float: false,
      // },
      // {
      //   weight: 0.1,
      //   name: ['desert_tree'],
      //   scarcity: 0.925,
      //   e: { low: 0.20, high: null },
      //   m: { low: 0.35, high: null },
      //   scale: { min: 1.25, max: 2.0 },
      //   float: false,
      // },
      {
        weight: 0.15,
        name: ['dead_bush_1', 'dead_bush_2', 'dead_bush_3'],
        scarcity: 0.95,
        e: { low: 0.125, high: null },
        m: { low: 0.275, high: null },
        scale: { min: 1.20, max: 1.50 },
        float: false,
      },
    ]
  },
  OASIS: {
    name: 'OASIS',
    color: new THREE.Color(0xE0D59D),
    organisms: [
      {
        weight: 0.1,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.965,
        e: null,
        m: null,
        scale: { min: 0.75, max: 1.5 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['palm_tree_1', 'palm_tree_2', 'palm_tree_3', 'palm_tree_4'],
        scarcity: 0.5,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.14 },
        m: null,
        scale: { min: 1.1, max: 1.5 },
        float: false,
      },
      {
        weight: 0.35,
        name: ['fern_1', 'fern_2', 'fern_3', 'fern_4'],
        scarcity: 0,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.14 },
        m: null,
        scale: { min: 0.9, max: 1.2 },
        float: false,
      },
      {
        weight: 0.8,
        name: ['reed_1', 'reed_2', 'reed_3', 'reed_4'],
        scarcity: 0,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.1 },
        m: null,
        scale: { min: 1.8, max: 2.25 },
        float: false,
      }
    ]
  },
  OASIS_WATER: {
    name: 'OASIS_WATER',
    color: new THREE.Color(0xF4D09A),
    organisms: [
      {
        weight: 0.5,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.85,
        e: null,
        m: null,
        scale: { min: 0.75, max: 1.0 },
        float: false,
      },
      {
        weight: 0.35,
        name: ['fern_1', 'fern_2', 'fern_3', 'fern_4'],
        scarcity: 0,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.14 },
        m: null,
        scale: { min: 0.9, max: 1.2 },
        float: false,
      },
      {
        weight: 0.8,
        name: ['reed_1', 'reed_2', 'reed_3', 'reed_4'],
        scarcity: 0,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.1 },
        m: null,
        scale: { min: 1.8, max: 2.25 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['palm_tree_1', 'palm_tree_2', 'palm_tree_3', 'palm_tree_4'],
        scarcity: 0.5,
        e: { low: Chunk.SEA_ELEVATION + 0.005, high: Chunk.SEA_ELEVATION + 0.14 },
        m: null,
        scale: { min: 1.1, max: 1.5 },
        float: false,
      },
    ]
  },  
  //DESERT END

  //MOUNTAIN BIOME
  MOUNTAIN_ICE: {
    name: 'MOUNTAIN_ICE',
    color: new THREE.Color(0xebebfc),
    organisms: []
  },  
  MOUNTAIN_SNOW: {
    name: 'MOUNTAIN_SNOW',
    color: new THREE.Color(0xcbccc6),
    organisms: []
  },  
  MOUNTAIN_STONE: {
    name: 'MOUNTAIN_STONE',
    color: new THREE.Color(0x737568),
    organisms: []
  },
  MOUNTAIN_GRASS: {
    name: 'MOUNTAIN_GRASS',
    color: new THREE.Color(0x72755d),
    organisms: [
      {
        weight: 10,
        name: ['spruce_1', 'spruce_2','spruce_3','spruce_4'],
        scarcity: 0.2,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.55 },
        m: null,
        scale: { min: 0.35, max: 0.5 },
        float: false,
      }
    ]
  },  
  MOUNTAIN_FOREST: {
    name: 'MOUNTAIN_FOREST',
    color: new THREE.Color(0x565c3e),
    organisms: [
      {
        weight: 10,
        name: ['spruce_1', 'spruce_2','spruce_3','spruce_4'],
        scarcity: 0,
        e: { low: Chunk.SEA_ELEVATION, high: Chunk.SEA_ELEVATION + 0.55 },
        m: null,
        scale: { min: 0.5, max: 0.65 },
        float: false,
      }
    ]
  },
  MOUNTAIN_WATER: {
    name: 'MOUNTAIN_WATER',
    color: new THREE.Color(0xF1CFAE),
    organisms: [
      {
        weight: 0.9,
        name: ['lilypad', 'lilypad2'],
        scarcity: 0.85,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.05 },
        m: null,
        scale: { min: 1.25, max: 1.75 },
        float: true,
      },
      {
        weight: 0.1,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9925,
        e: null,
        m: null,
        scale: { min: 1.0, max: 4.5 },
        float: false,
      },
    ]
  },

  TAIGA_FOREST: {
    name: 'TAIGA_FOREST',
    color: new THREE.Color(0x69ad7b),
    organisms: [
      {
        weight: 0.9,
        name: ['spruce_1', 'spruce_2','spruce_3','spruce_4'],
        scarcity: 0,
        e: null,
        m: { low: 0.2, high: 0.8 },
        scale: { min: 1.25, max: 1.5 },
        float: false,
      },
      {
        weight: 0.1,
        name: ['red_mushroom', 'mushroom_classic'], // MUSHROOM
        scarcity: 0.85,
        e: { low: Chunk.SEA_ELEVATION + 0.025, high: null },
        m: null,
        scale: { min: 0.9, max: 1.1 },
        float: false,
      },
    ]
  },
  TAIGA_PLAINS: {
    name: 'TAIGA_PLAINS',
    color: new THREE.Color(0x96c47b),
    organisms: [
      {
        weight: 0.5,
        name: ['plains_rock1', 'plains_rock2', 'plains_rock3', 'plains_rock4', 'plains_rock5', 'plains_rock6'],
        scarcity: 0.8,
        e: null,
        m: null,
        scale: { min: 0.75, max: 3 },
        float: false,
      },
      {
        weight: 0.25,
        name: ['blue_flower1', 'pink_flower1', 'pink_flower4', 'red_flower1', 'white_flower1', 'white_flower2'],
        scarcity: 0.8,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
    ]
  },
  FROZEN_GRASSLAND: {
    name: 'FROZEN_GRASSLAND',
    color: new THREE.Color(0x96c47b),
    organisms: [
      {
        weight: 0.25,
        name: ['dead_tree', 'dead_tree2'],
        scarcity: 0.85,
        e: null,
        m: null,
        scale: { min: 0.9, max: 1.25 },
        float: false,
      },
      {
        weight: 0.25,
        name: ['spruce_1', 'spruce_2','spruce_3','spruce_4'],
        scarcity: 0.8,
        e: null,
        m: null,
        scale: { min: 0.9, max: 1.25 },
        float: false,
      },
      {
        weight: 0.25,
        name: ['bush'],
        scarcity: 0.85,
        e: null,
        m: null,
        scale: { min: 1.00, max: 1.75 },
        float: false,
      },
      {
        weight: 0.3,
        name: ['plains_rock1', 'plains_rock2', 'plains_rock3', 'plains_rock4', 'plains_rock5', 'plains_rock6'],
        scarcity: 0.825,
        e: null,
        m: null,
        scale: { min: 0.75, max: 1.5 },
        float: false,
      },
    ]
  },
  FJORD: {
    name: 'FJORD',
    color: new THREE.Color(0x648277),
    organisms: [
      {
        weight: 0.6,
        name: ['spruce_1', 'spruce_2','spruce_3','spruce_4'],
        scarcity: 0.50,
        e: { low: Chunk.SEA_ELEVATION + 0.25, high: null },
        m: { low: null, high: 0.35 },
        scale: { min: 1.0, max: 1.75 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['dead_tree', 'dead_tree2'],
        scarcity: 0.25,
        e: { low: Chunk.SEA_ELEVATION + 0.035, high: Chunk.SEA_ELEVATION + 0.5 },
        m: null,
        scale: { min: 1.75, max: 2.25 },
        float: false,
      },
      {
        weight: 0.15,
        name: ['tree_blossom'],
        scarcity: 0.9,
        e: { low: Chunk.SEA_ELEVATION + 0.01, high: Chunk.SEA_ELEVATION + 0.325 },
        m: null,
        scale: { min: 0.9, max: 1.75 },
        float: false,
      },
      {
        weight: 0.05,
        name: ['tree_blossom2t'],
        scarcity: 0.985,
        e: { low: Chunk.SEA_ELEVATION + 0.01, high: Chunk.SEA_ELEVATION + 0.325 },
        m: null,
        scale: { min: 0.9, max: 1.75 },
        float: false,
      }
    ]
  },
  FJORD_BEACH: {
    name: 'FJORD_BEACH',
    color: new THREE.Color(0x87a194),
    organisms: [
      {
        weight: 0.25,
        name: ['thin_mushroomg1', 'thin_mushroomg2', 'red_mushroom', 'mushroom_classic'], // MUSHROOM
        scarcity: 0.5,
        e: { low: Chunk.SEA_ELEVATION + 0.025, high: null },
        m: null,
        scale: { min: 0.85, max: 1.35 },
        float: false,
      },
      {
        weight: 0.3,
        name: ['reed', 'reed2'],
        scarcity: 0.4,
        e: { low: Chunk.SEA_ELEVATION - 0.01, high: Chunk.SEA_ELEVATION + 0.125 },
        m: null,
        scale: { min: 1.25, max: 1.75 },
        float: false,
      },
      {
        weight: 0.1,
        name: ['white_flower2'],
        scarcity: 0.8,
        e: { low: Chunk.SEA_ELEVATION - 0.01, high: Chunk.SEA_ELEVATION + 0.125 },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['plains_rock1', 'plains_rock2', 'plains_rock3', 'plains_rock4', 'plains_rock5', 'plains_rock6'],
        scarcity: 0.45,
        e: null,
        m: null,
        scale: { min: 0.75, max: 3.5 },
        float: false,
      },
      {
        weight: 0.1,
        name: ['lilypad', 'lilypad2'],
        scarcity: 0.9,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.05 },
        m: { low: 0.5, high: null },
        scale: { min: 0.75, max: 1.65 },
        float: true,
      },
    ]
  },
  GRASSLAND: {
    name: 'GRASSLAND',
    color: new THREE.Color(0x93c54b),
    organisms: [
      {
        weight: 0.2,
        name: ['blue_flower1', 'pink_flower1', 'pink_flower4', 'red_flower1', 'white_flower1', 'white_flower2'],
        scarcity: 0.0,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.35,
        name: ['bush'],
        scarcity: 0.65,
        e: null,
        m: null,
        scale: { min: 1.0, max: 1.75 },
        float: false,
      },
      {
        weight: 0.15,
        name: ['bush2', 'bush3'],
        scarcity: 0.65,
        e: null,
        m: null,
        scale: { min: 1.0, max: 1.75 },
        float: false,
      },
      {
        weight: 0.3,
        name: ['simple_tree'],
        scarcity: 0.975,
        e: null,
        m: null,
        scale: { min: 1.25, max: 2.0 },
        float: false,
      },
    ]
  },

  TROPICAL_FOREST: {
    name: 'TROPICAL_FOREST',
    color: new THREE.Color(0x93c54b),
    organisms: [
      {
        weight: 1,
        name: ['palm_tree_1', 'palm_tree_2', 'palm_tree_3', 'palm_tree_4'],
        scarcity: 0.5,
        e: { low: Chunk.SEA_ELEVATION + 0.15, high: null },
        m: null,
        scale: { min: 1.1, max: 1.5 },
        float: false,
      },
    ]
  },
  TROPICAL_BEACH: {
    name: 'TROPICAL_BEACH',
    color: new THREE.Color(0xe6cf87),
    organisms: [
      {
        weight: 1,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.975,
        e: null,
        m: null,
        scale: { min: 0.5, max: 2 },
        float: false,
      },
    ]
  },
  TUNDRA: {
    name: 'TUNDRA',
    color: new THREE.Color(0xfbe794),
    organisms: [
      {
        weight: 0.6,
        name: ['plains_rock1', 'plains_rock2', 'plains_rock3', 'plains_rock4', 'plains_rock5', 'plains_rock6'],
        scarcity: 0.9,
        e: null,
        m: null,
        scale: { min: 0.5, max: 3 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['highlands_tree', 'highlands_tree2'],
        scarcity: 0.95,
        e: null,
        m: null,
        scale: { min: 1.0, max: 1.5 },
        float: false,
      },
      {
        weight: 0.1,
        name: ['bush', 'bush2'],
        scarcity: 0.95,
        e: null,
        m: null,
        scale: { min: 1.0, max: 1.5 },
        float: false,
      },
      {
        weight: 0.1,
        name: ['fat_mushroom', 'fat_mushroom2', 'red_mushroom', 'mushroom_classic'],  // MUSHROOM
        scarcity: 0.9,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: 1 },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
    ]
  },
  MOUNTAIN: {
    name: 'MOUNTAIN',
    color: new THREE.Color(0x8eada0),
    organisms: []
  },
  RAINFOREST: {
    name: 'RAINFOREST',
    color: new THREE.Color(0x3ead68),
    organisms: [
      {
        weight: 0.10,
        name: ['plains_rock1', 'plains_rock2', 'plains_rock3', 'plains_rock4', 'plains_rock5', 'plains_rock6'],
        scarcity: 0.85,
        e: null,
        m: null,
        scale: { min: 0.75, max: 2.5 },
        float: false,
      },
      {
        weight: 0.5,
        name: ['jungle_tree', 'jungle_tree2'],
        scarcity: 0.6,
        e: null,
        m: null,
        scale: { min: 1.25, max: 1.75 },
        float: false,
      },
      {
        weight: 0.40,
        name: ['banana_tree', 'banana_tree2'],
        scarcity: 0.5,
        e: null,
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
    ]
  },
  RAINFOREST_HILLS: {
    name: 'RAINFOREST_HILLS',
    color: new THREE.Color(0x3ead52),
    organisms: [
      {
        weight: 0.10,
        name: ['plains_rock1', 'plains_rock2', 'plains_rock3', 'plains_rock4', 'plains_rock5', 'plains_rock6'],
        scarcity: 0.85,
        e: null,
        m: null,
        scale: { min: 0.75, max: 2.5 },
        float: false,
      },
      {
        weight: 0.3,
        name: ['jungle_tree', 'jungle_tree2'],
        scarcity: 0.6,
        e: null,
        m: null,
        scale: { min: 1.25, max: 1.75 },
        float: false,
      },
      {
        weight: 0.20,
        name: ['banana_tree', 'banana_tree2'],
        scarcity: 0.5,
        e: null,
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['pink_flower1', 'blue_flower1', 'pink_flower4', 'red_flower1', 'white_flower1'],
        scarcity: 0.9,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['thin_mushroomg1', 'thin_mushroomg2'], // MUSHROOM
        scarcity: 0.9,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 0.75, max: 1.25 },
        float: false,
      },
    ]
  },
  RAINFOREST_SWAMPS: {
    name: 'RAINFOREST_SWAMPS',
    color: new THREE.Color(0xbed69e),
    organisms: [
      {
        weight: 0.45,
        name: ['mangrove', 'mangrove2'],
        scarcity: 0.95,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.45,
        name: ['blue', 'pink'],
        scarcity: 0.945,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 1.00, max: 1.25 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['mushroom_arrow', 'small_mushroom1', 'small_mushroom2', 'small_mushroom3'], // MUSHROOM
        scarcity: 0.9,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: null },
        m: null,
        scale: { min: 1.0, max: 2.0 },
        float: false,
      },
    ]
  },
  BEACH: {
    name: 'BEACH',
    color: new THREE.Color(0xf0e68c),
    organisms: [
      {
        weight: 0.25,
        name: ['lilypad', 'lilypad2'],
        scarcity: 0.9,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.05 },
        m: { low: 0.5, high: null },
        scale: { min: 0.75, max: 1.65 },
        float: true,
      },
      {
        weight: 0.25,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9,
        e: { low: null, high: 0.5 },
        m: null,
        scale: { min: 0.5, max: 1.25 },
        float: false,
      },
      {
        weight: 0.5,
        name: ['reed', 'reed2'],
        scarcity: 0.75,
        e: { low: Chunk.SEA_ELEVATION - 0.01, high: Chunk.SEA_ELEVATION + 0.1 },
        m: null,
        scale: { min: 1.0, max: 1.45 },
        float: false,
      },
    ]
  },
  FROZEN_BEACH: {
    name: 'FROZEN_BEACH',
    color: new THREE.Color(0xe0dcb8),
    organisms: [
      {
        weight: 0.5,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.965,
        e: { low: null, high: 0.5 },
        m: null,
        scale: { min: 0.5, max: 1.0 },
        float: false,
      },
      {
        weight: 0.5,
        name: ['reed', 'reed2'],
        scarcity: 0.925,
        e: { low: Chunk.SEA_ELEVATION - 0.01, high: Chunk.SEA_ELEVATION + 0.075 },
        m: null,
        scale: { min: 0.5, max: 1.25 },
        float: false,
      },
    ]
  },
  CORAL_REEF: {
    name: 'CORAL_REEF',
    color: new THREE.Color(0xeacd73),
    organisms: [
      {
        weight: 0.5,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.975,
        e: null,
        m: null,
        scale: { min: 0.75, max: 2.5 },
        float: false,
      },
      {
        weight: 0.5,
        name: ['algea', 'algea2', 'algea3'],
        scarcity: 0.65,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.95 },
        m: null,
        scale: { min: 0.75, max: 1.5 },
        float: false,
      },
    ]
  },
  OCEAN: {
    name: 'OCEAN',
    color: new THREE.Color(0xf1c176),
    organisms: [
      {
        weight: 0.75,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9,
        e: null,
        m: null,
        scale: { min: 0.5, max: 1.5 },
        float: false,
      },
      {
        weight: 0.05,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9925,
        e: null,
        m: null,
        scale: { min: 2.5, max: 4.5 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['star', 'shell'],
        scarcity: 0.975,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.85 },
        m: null,
        scale: { min: 0.75, max: 1.15 },
        float: false,
      },
    ]
  },
  TROPICAL_OCEAN: {
    name: 'OCEAN',
    color: new THREE.Color(0xf1c176),
    organisms: [
      {
        weight: 0.5,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9,
        e: null,
        m: null,
        scale: { min: 0.5, max: 1.5 },
        float: false,
      },
      {
        weight: 0.05,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9925,
        e: null,
        m: null,
        scale: { min: 2.5, max: 4.5 },
        float: false,
      },
      {
        weight: 0.2,
        name: ['star', 'shell'],
        scarcity: 0.975,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.85 },
        m: null,
        scale: { min: 0.75, max: 1.15 },
        float: false,
      },
      {
        weight: 0.25,
        name: ['algea', 'algea2', 'algea3'],
        scarcity: 0.75,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.95 },
        m: null,
        scale: { min: 0.75, max: 1.5 },
        float: false,
      },
    ]
  },
  FROZEN_OCEAN: {
    name: 'FROZEN_OCEAN',
    color: new THREE.Color(0xcdba97),
    organisms: [
      {
        weight: 0.4,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.925,
        e: null,
        m: null,
        scale: { min: 0.5, max: 1.5 },
        float: false,
      },
      {
        weight: 0.05,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.975,
        e: null,
        m: null,
        scale: { min: 2.0, max: 4.0 },
        float: false,
      },
      {
        weight: 0.5,
        name: ['iceberg1', 'iceberg2'],
        scarcity: 0.85,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.05 },
        m: { low: 0.35, high: null },
        scale: { min: 0.9, max: 1.1 },
        float: true,
      },
    ]
  },
  SNOW: {
    name: 'SNOW',
    color: new THREE.Color(0xf1f1f1),
    organisms: [
      {
        weight: 0.15,
        name: ['dead_tree', 'dead_tree2'],
        scarcity: 0.85,
        e: null,
        m: null,
        scale: { min: 0.9, max: 1.25 },
        float: false,
      },
      {
        weight: 0.1,
        name: ['mushroom_classic'], // MUSHROOM
        scarcity: 0.9,
        e: { low: Chunk.SEA_ELEVATION + 0.025, high: null },
        m: null,
        scale: { min: 0.85, max: 1.35 },
        float: false,
      },
      {
        weight: 0.4,
        name: ['spruce_1', 'spruce_2','spruce_3','spruce_4'],
        scarcity: 0.6,
        e: null,
        m: null,
        scale: { min: 0.9, max: 1.25 },
        float: false,
      },
      {
        weight: 0.35,
        name: ['snow_rock5', 'snow_rock6'],
        scarcity: 0.825,
        e: null,
        m: null,
        scale: { min: 0.75, max: 1.50 },
        float: false,
      },
    ]
  },
  SWAMP_WATER: {
    name: 'SWAMP_WATER',
    color: new THREE.Color(0xF1CFAE),
    organisms: [
      {
        weight: 0.9,
        name: ['lilypad', 'lilypad2'],
        scarcity: 0.85,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.05 },
        m: null,
        scale: { min: 1.25, max: 1.75 },
        float: true,
      },
      {
        weight: 0.1,
        name: ['desert_rock1', 'desert_rock2', 'desert_rock3', 'desert_rock4', 'desert_rock5', 'desert_rock6'],
        scarcity: 0.9925,
        e: null,
        m: null,
        scale: { min: 1.0, max: 4.5 },
        float: false,
      },
    ]
  },
  SWAMP: {
    name: 'SWAMP',
    color: new THREE.Color(0xbed69e),
    organisms: [
      {
        weight: 0.025,
        name: ['mushroom_cluster', 'mushroomg4', 'blue_mushroom'], // MUSHROOM
        scarcity: 0.85,
        e: { low: Chunk.SEA_ELEVATION + 0.05, high: Chunk.SEA_ELEVATION + 0.65 },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.125,
        name: ['pink_mushroom', 'mushroomg3'], // MUSHROOM
        scarcity: 0.25,
        e: { low: Chunk.SEA_ELEVATION + 0.025, high: Chunk.SEA_ELEVATION + 0.65 },
        m: null,
        scale: { min: 1.0, max: 1.25 },
        float: false,
      },
      {
        weight: 0.15,
        name: ['mangrove', 'mangrove2'],
        scarcity: 0.85,
        e: { low: Chunk.SEA_ELEVATION - 0.035, high: Chunk.SEA_ELEVATION + 0.1 },
        m: null,
        scale: { min: 1.00, max: 1.25 },
        float: false,
      },
      {
        weight: 0.325,
        name: ['pink', 'stack', 'blue'],
        scarcity: 0.975,
        e: { low: Chunk.SEA_ELEVATION - 0.035, high: Chunk.SEA_ELEVATION + 0.2 },
        m: null,
        scale: { min: 1.0, max: 1.5 },
        float: false,
      },
      {
        weight: 0.25,
        name: ['lilypad', 'lilypad2'],
        scarcity: 0.85,
        e: { low: null, high: Chunk.SEA_ELEVATION - 0.05 },
        m: null,
        scale: { min: 1.25, max: 1.75 },
        float: true,
      },
      {
        weight: 0.125,
        name: ['reed', 'reed2'],
        scarcity: 0.65,
        e: { low: Chunk.SEA_ELEVATION + 0.025, high: 1 },
        m: null,
        scale: { min: 1.0, max: 1.35 },
        float: false,
      },
    ]
  },
  //WHITEBOX DEMO BIOME
  WHITEBOX: {
    name: 'WHITEBOX',
    color: new THREE.Color(0xffffff),
    organisms: [
      {
        weight: 1.0,
        name: ['container_1', 'container_2'],
        scarcity: 0,
        e: null,
        m: null,
        scale: { min: 2.25, max: 2.25},
        float: false,
      },
      {
        weight: 0.5,
        name: ['barrel_1', 'barrel_2', 'barrel_3'],
        scarcity: 0.5,
        e: null,
        m: null,
        scale: { min: 3.0, max: 3.0},
        float: false,
      }
    ]
  },

  //SLOT JOIN GEOMETRY TEST
  SLOT_JOIN_1: {
    name: 'SLOT_JOIN_1',
    color: new THREE.Color(0x6a329f),
    organisms: [
      {
        weight: 1.0,
        name: ['slot_tree'],
        scarcity: 0,
        e: null,
        m: { low: 0.2, high: 0.8 },
        scale: { min: 1.5, max: 2.0 },
        float: false,
      },
    ]
  },
  SLOT_JOIN_2: {
    name: 'SLOT_JOIN_2',
    color: new THREE.Color(0xf44336),
    organisms: [
      {
        weight: 0.3,
        name: ['slot_rock1', 'slot_rock2', 'slot_rock3'],
        scarcity: 0,
        e: null,
        m: { low: 0.2, high: 0.8 },
        scale: { min: 0.75, max: 2.0 },
        float: false,
      },
      {
        weight: 0.7,
        name: ['slot_fern', 'slot_grass'],
        scarcity: 0,
        e: null,
        m: { low: 0.2, high: 0.8 },
        scale: { min: 0.75, max: 1.10 },
        float: false,
      },
    ]
  },
  SLOT_JOIN_BEACH: {
    name: 'SLOT_JOIN_BEACH',
    color: new THREE.Color(0xe06666),
    organisms: [
      {
        weight: 1.0,
        name: ['slot_rock1', 'slot_rock2'],
        scarcity: 0.5,
        e: null,
        m: { low: 0.2, high: 0.8 },
        scale: { min: 0.5, max: 0.75 },
        float: false,
      },
    ]
  },
  SLOT_JOIN_OCEAN: {
    name: 'SLOT_JOIN_OCEAN',
    color: new THREE.Color(0xea9999),
    organisms: [
      {
        weight: 1.0,
        name: ['slot_rock1'],
        scarcity: 0.5,
        e: null,
        m: { low: 0.2, high: 0.8 },
        scale: { min: 0.5, max: 0.75 },
        float: false,
      },
    ]
  },
};
