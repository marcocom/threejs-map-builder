import { OBJ_TYPE } from '@shared/enums/objectTypes.enum';

export interface IObject {
  name: string;
  type: OBJ_TYPE | OBJ_TYPE[];
  obj: any;
  mtl: any;
  tex?: any;
  alpha?: any;
  doubleSide?: boolean;
}
