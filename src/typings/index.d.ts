interface Document {
  pointerLockElement?: any;
  mozPointerLockElement?: any;
  webkitPointerLockElement?: any;
  requestPointerLock?: any;
  mozRequestPointerLock?: any;
  webkitRequestPointerLock?: any;
  exitPointerLock?: any;
  mozExitPointerLock?: any;
  webkitExitPointerLock?: any;
}

interface HTMLElement {
  pointerLockElement?: any;
  mozPointerLockElement?: any;
  webkitPointerLockElement?: any;
  requestPointerLock?: any;
  mozRequestPointerLock?: any;
  webkitRequestPointerLock?: any;
  exitPointerLock?: any;
  mozExitPointerLock?: any;
  webkitExitPointerLock?: any;
}

interface WheelEvent {
  wheelDelta: number;
}

interface Window {
  player: THREE.Object3D;
  isFocused: boolean;
  isFreezed: boolean;
}

interface Math {
  seedrandom(seed?: string): void;
}

interface Math {
  seedrandom(): void;
}
