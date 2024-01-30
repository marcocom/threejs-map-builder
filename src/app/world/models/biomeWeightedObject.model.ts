export interface IMinMax {
  min: number;
  max: number;
}

export interface ILowHigh {
  low: number;
  high: number;
}

export interface IBiomeWeightedObject {
  weight: number; //probability of ocurring
  name: string[]; //name of organism
  scarcity: number; //how scarce the organism is
  scale: IMinMax; //scaling range
  e: number | ILowHigh; //elevation range
  m: number | ILowHigh; //moisture range
  low?: number;
  high?: number;
  float: boolean;
  //material: THREE.Material;
}
