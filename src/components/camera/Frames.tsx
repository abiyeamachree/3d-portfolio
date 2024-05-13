import { CameraEnum } from './Camera';
import { Vector3 } from 'three';

export class FrameInstance {
    position: Vector3;
    focalPoint: Vector3;

    constructor(){
        this.position = new Vector3(0, 0, 0);
        this.focalPoint = new Vector3(0, 0, 0);
    }

    update() {}
}

export class StartFrame extends FrameInstance {
    constructor() {
        super();
        this.position.set(0, 0, 0);
        this.focalPoint.set(0, 0, 0);
    }
}

export class LoadingFrame extends FrameInstance{}
export class IdleFrame extends FrameInstance{}
export class DeskFrame extends FrameInstance{}  
export class LaptopFrame extends FrameInstance{}    