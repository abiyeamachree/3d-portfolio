import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

interface HitboxProps {
  position: [number, number, number];
  radius: number;
  onClick: () => void;
  troubleshoot?: boolean;
}

const Hitbox: React.FC<HitboxProps> = ({ position, radius, onClick, troubleshoot = false }) => {
  const { camera } = useThree();
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      if (meshRef.current) {
        const intersects = raycaster.intersectObject(meshRef.current, true);
        if (intersects.length > 0) {
          onClick();
        }
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [camera, onClick, raycaster]);

  return (
    <mesh ref={meshRef} position={position}>
      {(
        <Sphere args={[radius, 32, 32]}>
          <meshBasicMaterial color="red" wireframe visible={troubleshoot} />
        </Sphere>
      )}
    </mesh>
  );
};

export default Hitbox;
