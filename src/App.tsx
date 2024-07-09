import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';
import Office from './components/models/Office.jsx';
import Camera, { CameraEnum } from './components/camera/Camera';
import "./styles/index.css";

const App: React.FC = () => {

    const [cameraState, setCameraState] = useState(CameraEnum.IDLE);
    const [showText, setShowText] = useState(true);
    const toggleCameraState = () => {
        setCameraState(prevState => 
            prevState === CameraEnum.ROTATE ? CameraEnum.IDLE : CameraEnum.ROTATE
        );
    };

    const handleDeskClick = () => {
        if(cameraState == CameraEnum.IDLE){
            setCameraState(CameraEnum.DESK);
        }
    };

    const handleLaptopClick = () => {
        if(cameraState == CameraEnum.DESK){
            setCameraState(CameraEnum.LAPTOP)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(false);
        }, 100000); // Change the duration as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-full h-screen relative">
            { (cameraState == CameraEnum.IDLE || cameraState == CameraEnum.ROTATE) && <div className="absolute top-10 left-10 z-10">
                <div className="text-center bg-white text-black mb-2 px-8 rounded">Abiye Amachree</div>
                <button className="btn-custom hover:btn-hover" onClick={toggleCameraState}>&#x1f4f7; Cam</button>
                <button className="btn-custom hover:btn-hover">&#1f5ce;</button>
                <button className="btn-custom hover:btn-hover">&#128260;</button>
            </div>}
            <Canvas
                className="w-full h-screen bg-transparent"
                shadows
                camera={{ near: 0.1, far: 1000}}
            >
                <Camera cameraState={cameraState} onDeskClick={handleDeskClick} onLaptopClick={handleLaptopClick} />
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.25}/>
                    <spotLight position={[0, 10, 0]} intensity={250} angle={Math.PI / 6} penumbra={0.6} castShadow/>
                    <Office onDeskClick={handleDeskClick} onLaptopClick={handleLaptopClick}/>    
                </Suspense>
            </Canvas>
            {showText && (cameraState == CameraEnum.IDLE || cameraState == CameraEnum.ROTATE) && (
                <div className="fade-in-out-text absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 text-black py-2 px-4 rounded">
                    Welcome to my portfolio. Click to interact with the environment
                </div>
            )}
        </section>
        );
    };

export default App;