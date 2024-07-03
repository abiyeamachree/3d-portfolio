import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

interface HitboxProps {
  position: THREE.Vector3;
  radius: number;
  onClick: () => void;
  troubleshoot: boolean;
}

const Hitbox: React.FC<HitboxProps> = ({ position, radius, onClick, troubleshoot = true }) => {
  const { camera } = useThree();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);

      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      const distanceToCenter = pos.distanceTo(new THREE.Vector3(position.x, position.y, position.z));
      if (distanceToCenter <= radius) {
        onClick();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [camera, position, radius, onClick]);

  if (!troubleshoot) {
    return null;
  }

  return (
    <mesh position={position}>
      <Sphere args={[radius, 32, 32]}>
        <meshBasicMaterial color="red" wireframe />
      </Sphere>
    </mesh>
  );
};

export default Hitbox;
