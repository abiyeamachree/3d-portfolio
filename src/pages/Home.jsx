import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

import Office from '../models/Office';

const Home = () => {
    const adjustOfficeForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let islandRotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [5, 5, 5]
            screenPosition = [0, -6.5, -43];
        } else {
            screenScale = [6, 6, 6]
            screenPosition = [0, -6.5, -43];
        }

        return [screenScale, screenPosition, islandRotation]
    }

    const[officeScale, officePosition, islandRotation] = adjustOfficeForScreenSize();

  return (
    <section className="w-full h-screen relative">
        <Canvas
            className="w-full h-screen bg-transparent"
            camera={{ near: 0.1, far: 1000}}
        >

            <Suspense fallback={<Loader />}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />

                <Office 
                position={officePosition}
                scale={officeScale}
                rotation={islandRotation}/>
            </Suspense>
        </Canvas>
    </section>
    )
}

export default Home;