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
    const controlsRef = React.useRef<OrbitControls>();

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
        controlsRef.current = new OrbitControls(camera, gl.domElement);
        const controls = controlsRef.current;

        controls.target.set(0, 0, 0);
        controls.minDistance = 5; 
        controls.maxDistance = 15; 
        controls.enablePan = false;
        controls.maxPolarAngle = (Math.PI / 2.1); // Disable rotation below ground
        camera.position.set(0, 0, 50);

        return () => {
            controlsRef.current?.dispose();
        };

    }, [camera, gl]);

    useFrame(() => {
        const controls = controlsRef.current;
        if (controls) {
            const frame = frames[currentFrame];
            if (frame) {
                camera.position.lerp(frame.position, 0.1);
                controls.target.lerp(frame.focalPoint, 0.1);
                controls.update();
            }
        }
    });

    return null;
};

export default Camera;