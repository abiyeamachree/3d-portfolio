import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const Screen: React.FC<{ url: string }> = ({ url }) => {
  const texture = useRef(new THREE.Texture());
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '1024px';
    iframe.style.height = '768px';
    iframe.style.border = 'none';
    iframe.style.position = 'absolute';
    iframe.style.top = '-10000px';  // Move off-screen
    document.body.appendChild(iframe);

    const updateTexture = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = 1024;
        canvas.height = 768;

        const drawCanvas = () => {
          context.drawImage(iframe.contentWindow?.document.body as unknown as HTMLImageElement, 0, 0, canvas.width, canvas.height);
          texture.current.image = canvas;
          texture.current.needsUpdate = true;
          requestAnimationFrame(drawCanvas);
        };
        drawCanvas();
      } else {
        console.error('Failed to get canvas context');
      }
    };

    iframe.onload = updateTexture;

    return () => {
      document.body.removeChild(iframe);
    };
  }, [url]);

  return <meshBasicMaterial attach="material" map={texture.current} />;
};

export default Screen;
