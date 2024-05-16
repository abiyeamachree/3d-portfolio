import React from 'react';
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EventEmitter } from "events";
import {
    FrameInstance,
    StartFrame,
    LoadingFrame,
    IdleFrame,
    DeskFrame,
    LaptopFrame,
} from "./Frames";


export enum CameraEnum {
    START = 'orbitControlsStart',
    LOADING = 'loading',
    IDLE = 'idle',
    DESK = 'desk',
    LAPTOP = 'laptop',
}

const Camera: React.FC = () => {
    const { camera, gl } = useThree();
    
    const position = new Vector3(0, 0, 0);
    const centrePoint = new Vector3(0, 0, 100);
    const orbitControls = new OrbitControls(camera, gl.domElement);

    const [currentFrame, setCurrentFrame] = React.useState<CameraEnum | undefined>();
    const [targetFrame, setTargetFrame] = React.useState<CameraEnum | undefined>();
    const [frames, setFrames] = React.useState({
        [CameraEnum.START]: new StartFrame(),
        [CameraEnum.LOADING]: new LoadingFrame(),
        [CameraEnum.IDLE]: new IdleFrame(),
        [CameraEnum.DESK]: new DeskFrame(),
        [CameraEnum.LAPTOP]: new LaptopFrame(),
    });

    React.useEffect(() => {
        orbitControls.target = centrePoint;
        camera.position.copy(position);
    }, [camera, centrePoint, orbitControls, position]);

    return null;
};

export default Camera;