import React from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';
import Office from './components/models/Office';
import { Vector3 } from 'three';
import Camera, { CameraEnum } from './components/camera/Camera';

const App = () => {
    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-10 left-10 z-10">
                <div className="mb-2 py-3 text-center bg-white text-black">Abiye Amachree</div>
                <button className="btn-custom">&#128193;</button>
                <button className="btn-custom">&#128172;</button>
                <button className="btn-custom">&#128260;</button>
            </div>
            <Canvas
                className="w-full h-screen bg-transparent"
                shadows
                camera={{ near: 0.1, far: 1000}}
            >
                <Camera />
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.4}/>
                    <spotLight position={[0, 10, 0]} intensity={300} angle={Math.PI / 6} penumbra={0.2} castShadow/>
                    <Office/>    
                </Suspense>
            </Canvas>
        </section>
    )
    };

export default App;