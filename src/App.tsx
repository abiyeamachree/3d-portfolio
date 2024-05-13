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
        <Canvas
            className="w-full h-screen bg-transparent"
            camera={{ near: 0.1, far: 1000}}
        >
            <Camera />
            <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={10} />
                <ambientLight intensity={0.5}/>
                <Office />
                
            </Suspense>
        </Canvas>
    </section>
    )
};

export default App;