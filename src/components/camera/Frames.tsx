import { CameraEnum } from './Camera';
import { Vector3 } from 'three';

interface Frame {
    position: Vector3;
    focalPoint: Vector3;
}

interface FrameInstance {
    position: Vector3;
    focalPoint: Vector3;
    update: () => void;
}

const keys: { [key in CameraEnum]: Frame } = {
    deskidle: {
        position: new Vector3(0, 0, 0),
        focalPoint: new Vector3(0, 0, -40),
    },
    laptop: {
        position: new Vector3(0, 0, 0),
        focalPoint: new Vector3(0, 0, -40),
    },
    deskrotate: {
        position: new Vector3(0, 0, 0),
        focalPoint: new Vector3(0, 0, -40),
    },
    orbitControlsStart: {
        position: new Vector3(0, 0, 0),
        focalPoint: new Vector3(0, 0, -40),
    },
};

function createFrameInstance(frame: Frame): FrameInstance {
    
    const position = frame.position.clone();
    const focalPoint = frame.focalPoint.clone();

    return {
        position: frame.position,
        focalPoint: frame.focalPoint,
        update: () => {
            // Do something
        },
    };
}

export function createStartFrame(): FrameInstance {
    const frame = keys.orbitControlsStart;
    return createFrameInstance(frame);
}

export function createLoadingFrame(): FrameInstance {
    const frame = keys.deskidle;
    return createFrameInstance(frame);
}

export function createDeskIdleFrame(): FrameInstance {
    const frame = keys.deskidle;
    return createFrameInstance(frame);
}

export function createDeskRotateFrame(): FrameInstance {
    const frame = keys.deskrotate;
    return createFrameInstance(frame);
}

export function createLaptopFrame(): FrameInstance {
    const frame = keys.laptop;
    return createFrameInstance(frame);
}