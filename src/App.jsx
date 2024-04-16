import { React, Suspense } from 'react';
import Loader from './components/Loader';
import { Canvas } from '@react-three/fiber';
import Office from './models/Office';

const App = () => {
    const adjustOfficeForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let officeRotation = [0, -2.4, 0]

        if (window.innerWidth < 768) {
            screenScale = [5, 5, 5]
            screenPosition = [0, -6.5, -43];
        } else {
            screenScale = [6, 6, 6]
            screenPosition = [0, -6.5, -43];
        }

        return [screenScale, screenPosition, officeRotation]
    }

    const[officeScale, officePosition, officeRotation] = adjustOfficeForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <Canvas
            className="w-full h-screen bg-transparent"
            camera={{ near: 0.1, far: 1000}}
        >

            <Suspense fallback={<Loader />}>
                <directionalLight position={[1,1,1]} intensity={10} />
                <ambientLight intensity={0.5}/>
                {/* <pointLight /> */}
                {/* <spotLight /> */}
                {/* <hemisphereLight skyColor="#ble1ff" groundColor="#000000" intensity={1}/> */}

                <Office 
                position={officePosition}
                scale={officeScale}
                rotation={officeRotation}/>
            </Suspense>
        </Canvas>
    </section>
    )
};

export default App;