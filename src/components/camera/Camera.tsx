import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EventEmitter } from "events";
import TWEEN from '@tweenjs/tween.js';

export enum CameraEnum {
    START = 'orbitControlsStart',
    LOADING = 'loading', // The initial loading screen
    IDLE = 'idle', // The camera slowly pans around the desk
    ROTATE = 'rotate', // The camera may be controlled by the user
    DESK = 'desk', // The camera is fixated on the desk
    LAPTOP = 'laptop' // The camera is fixated on the laptop screen
}

interface CameraProps {
    cameraState: CameraEnum;
    onDeskClick: () => void;
    onLaptopClick: () => void;
}

const Camera: React.FC<CameraProps> = ({ cameraState, onDeskClick, onLaptopClick }) => {
    const { camera, gl } = useThree();
    const controlsRef = React.useRef<OrbitControls | null>(null);
    const [lastIdlePosition, setLastIdlePosition] = React.useState({ x: 0, y: 4, z: 0 });
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const targetPosition = React.useState({ x: 0, y: 0, z: 0 });
    const targetLookAt = React.useState({ x: 0, y: 0, z: 0 });

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

    // Run when there is a change to cameraState (e.g ROTATE -> IDLE & vice versa).
    React.useEffect(() => {
        if (!controlsRef.current) return;
        const controls = controlsRef.current;
        
        if (cameraState === CameraEnum.ROTATE){
            if (controls) {
                camera.position.set(10, 5, 0)
                controls.target.set(0, 0, 0);
                controls.enabled = true;
                controls.update();             
            }
        } else if (cameraState === CameraEnum.IDLE) {
            camera.position.set(lastIdlePosition.x, lastIdlePosition.y, lastIdlePosition.z)
            controls.enabled = false;
            camera.lookAt(0, 0, 0)
        } else if (cameraState === CameraEnum.DESK) {
            controls.enabled = false;
            camera.position.set(2.002, 3, -0.703);  
            camera.lookAt(-2, 2.138, 0); 
        }

    }, [cameraState]);

    // Mouse move event listener
    React.useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    React.useEffect(() => {
        if (cameraState == CameraEnum.ROTATE) {
            // Store the last position when leaving ROTATE state
            setLastIdlePosition({ x: camera.position.x, y: camera.position.y, z: camera.position.z });
        }
    }, [cameraState, camera]);

    // Run every frame.
    useFrame(() => {
        if (cameraState === CameraEnum.IDLE) {
            const { x, y, z } = lastIdlePosition;
            const time = Date.now() * 0.00003;
            camera.position.x = (x + 10 * Math.sin(time));
            camera.position.z = (z + 10 * Math.cos(time));
            camera.lookAt(0, 0, 0);
        } else if (cameraState === CameraEnum.DESK) {
            const moveZ = (mousePos.x * 0.5);
            const moveY = (mousePos.y * 0.5);

            camera.lookAt(-2, 2.138 + moveY, -moveZ);
        }
    });
    
    return null;
};

export default Camera;