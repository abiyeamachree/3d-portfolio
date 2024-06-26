import React, { useState } from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';
import Office from './components/models/Office';
import Camera, { CameraEnum } from './components/camera/Camera';

const App: React.FC = () => {

    const [cameraState, setCameraState] = useState(CameraEnum.DESKIDLE);
    const toggleCameraState = () => {
        setCameraState(prevState => 
            prevState === CameraEnum.DESKROTATE ? CameraEnum.DESKIDLE : CameraEnum.DESKROTATE
        );
    };

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-10 left-10 z-10">
                <div className="text-center bg-white text-black mb-2 px-8 rounded">Abiye Amachree</div>
                <button className="btn-custom hover:btn-hover" onClick={toggleCameraState}>Cam</button>
                <button className="btn-custom hover:btn-hover">&#128172;</button>
                <button className="btn-custom hover:btn-hover">&#128260;</button>
            </div>
            <Canvas
                className="w-full h-screen bg-transparent"
                shadows
                camera={{ near: 0.1, far: 1000}}
            >
                <Camera cameraState={cameraState}/>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.25}/>
                    <spotLight position={[0, 10, 0]} intensity={250} angle={Math.PI / 6} penumbra={0.6} castShadow/>
                    <Office/>    
                </Suspense>
            </Canvas>
        </section>
        );
    };

export default App;