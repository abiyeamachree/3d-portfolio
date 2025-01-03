import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Correct path

export enum CameraEnum {
    START = 'orbitControlsStart', // Initial State
    LOADING = 'loading', // Loading Screen State
    IDLE = 'idle', // The camera slowly moves around the desk
    ROTATE = 'rotate', // The camera can be rotated by the user around the desk
    DESK = 'desk', // The camera is fixated on the monitors, positioned in the chair
}

interface CameraProps {
    cameraState: CameraEnum;
    onDeskClick: () => void;
}

const Camera: React.FC<CameraProps> = ({ cameraState, onDeskClick }) => {
    const { camera, gl } = useThree();
    const controlsRef = React.useRef<OrbitControls | null>(null);
    const [lastIdlePosition, setLastIdlePosition] = React.useState({ x: 0, y: 5, z: 10 });
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        controlsRef.current = new OrbitControls(camera, gl.domElement);
        const controls = controlsRef.current;

        controls.target.set(0, 0, 0);
        controls.minDistance = 1;
        controls.maxDistance = 2;
        controls.enablePan = false;
        controls.maxPolarAngle = Math.PI / 2.1;
        camera.position.set(0, 5, 10);

        return () => {
            controls.dispose();
            controlsRef.current = null;
        };
    }, [camera, gl]);

    React.useEffect(() => {
        if (!controlsRef.current) return;
        const controls = controlsRef.current;

        if (cameraState === CameraEnum.ROTATE) {
            camera.position.set(10, 5, 0);
            controls.target.set(0, 0, 0);
            controls.enabled = true;
            controls.update();
        } else if (cameraState === CameraEnum.IDLE) {
            camera.position.set(lastIdlePosition.x, lastIdlePosition.y, lastIdlePosition.z);
            controls.enabled = false;
            camera.lookAt(0, 0, 0);
        } else if (cameraState === CameraEnum.DESK) {
            controls.enabled = false;
            controls.minDistance = 0;
            camera.position.set(0.5, 0.5, 0);
            camera.lookAt(0, 0, 0);
            controls.update();
        }
    }, [cameraState]);

    React.useEffect(() => {
        setLastIdlePosition({ x: camera.position.x, y: camera.position.y, z: camera.position.z });
    }, [cameraState, camera]);

    // Capture mouse movements and update mousePos
    React.useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse coordinates (-1 to 1 for both axes)
            const { innerWidth, innerHeight } = window;
            const x = (event.clientX / innerWidth) * 2 - 1;
            const y = -(event.clientY / innerHeight) * 2 + 1; // Invert Y-axis

            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame(() => {
        if (cameraState === CameraEnum.IDLE) {
            const time = Date.now() * 0.0001;
            const radius = 2;
    

            const startOffset = 0.25; 
            
            const progress = (Math.sin(time + startOffset * Math.PI * 2) + 1) / 2;
            const angle = (0.5 * progress + 0.5 / 2) * Math.PI;
    
            camera.position.x = radius * Math.sin(angle);
            camera.position.z = (radius * Math.cos(angle) / 2);
            camera.position.y = 1;
            camera.lookAt(0, 0, 0);
        } else if (cameraState === CameraEnum.DESK) {
            const moveZ = mousePos.x / 20; 
            const moveY = 0.5 + mousePos.y / 20;
        
            camera.position.set(camera.position.x, moveY, -moveZ);
            
            camera.lookAt(0, moveY, -moveZ); 
        }
    });

    return null;
};

export default Camera;
