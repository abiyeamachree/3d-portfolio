import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EventEmitter } from "events";
import TWEEN from '@tweenjs/tween.js';
import {
    createStartFrame,
    createLoadingFrame,
    createDeskIdleFrame,
    createDeskRotateFrame,
    createLaptopFrame,
} from "./Frames";


export enum CameraEnum {
    START = 'orbitControlsStart',
    LOADING = 'loading', // The initial loading screen
    DESKIDLE = 'deskidle', // The camera slowly pans around the desk
    DESKROTATE = 'deskrotate', // The camera may be controlled by the user
    LAPTOP = 'laptop', // The camera is fixated on the laptop
}

interface CameraProps {
    cameraState: CameraEnum;
}

const Camera: React.FC<CameraProps> = ({ cameraState }) => {
    const { camera, gl } = useThree();
    const controlsRef = React.useRef<OrbitControls | null>(null);
    const [lastIdlePosition, setLastIdlePosition] = React.useState({ x: 0, y: 0, z: 0 });
    const [currentFrame, setCurrentFrame] = React.useState<CameraEnum | undefined>(cameraState);

    const frames = {
        [CameraEnum.START]: createStartFrame(),
        [CameraEnum.LOADING]: createLoadingFrame(),
        [CameraEnum.DESKIDLE]: createDeskIdleFrame(),
        [CameraEnum.DESKROTATE]: createDeskRotateFrame(),
        [CameraEnum.LAPTOP]: createLaptopFrame(),
    };

    // Run when camera and gl are initialised.
    React.useEffect(() => {
        controlsRef.current = new OrbitControls(camera, gl.domElement);
        const controls = controlsRef.current;

        controls.target.set(0, 0, 0);
        controls.minDistance = 5; 
        controls.maxDistance = 10; 
        controls.enablePan = false;
        controls.maxPolarAngle = (Math.PI / 2.1); // Disable rotation below ground
        camera.position.set(0, 5, 0);

        return () => {
            controls.dispose();
            controlsRef.current = null;
        };

    }, [camera, gl]);

    // Run when there is a change to cameraState (e.g DESKROTATE -> DESKIDLE & vice versa).
    React.useEffect(() => {
        if (!controlsRef.current) return;
        const controls = controlsRef.current;
        
        if (cameraState === CameraEnum.DESKROTATE){
            if (controls) {
                controls.target.set(0, 0, 0);
                controls.enabled = true;
                controls.update();             
            }
        } else if (cameraState === CameraEnum.DESKIDLE) {
            controls.enabled = false;
            camera.lookAt(0, 0, 0)
        }

    }, [cameraState]);

    React.useEffect(() => {
        if (currentFrame !== CameraEnum.DESKIDLE) {
            // Store the last position when leaving DESKIDLE state
            setLastIdlePosition({ x: camera.position.x, y: camera.position.y, z: camera.position.z });
        }
    }, [currentFrame, camera]);

    // Run every frame.
    useFrame(() => {
        if (cameraState === CameraEnum.DESKIDLE) {
            const { x, y, z } = lastIdlePosition;
            const time = Date.now() * 0.00005;
            camera.position.x = x + 10 * Math.sin(time);
            camera.position.z = z + 10 * Math.cos(time);
            camera.lookAt(0, 0, 0);
        }
    });

    return null;
};

export default Camera;