import React, { useRef } from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';
import Office from './components/models/Office';
import { Vector3 } from 'three';
import Camera, { CameraEnum } from './components/camera/Camera';

const App = () => {
    const officeRef = useRef();

    return (
        <section className="w-full h-screen relative">
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000}}
            >
                <Camera />
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={1}/>
                    <Office ref={officeRef}/>    
                </Suspense>
            </Canvas>
        </section>
    )
    };

export default App;