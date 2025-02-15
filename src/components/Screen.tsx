import React, { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

const Screen: React.FC = () => {
  useEffect(() => {
    const myElement = document.createElement("div");
    myElement.innerHTML = "Hello, World!";
    myElement.style.width = "200px";
    myElement.style.height = "100px";
    myElement.style.background = "white";
    myElement.style.color = "black";
    myElement.style.textAlign = "center";
    myElement.style.lineHeight = "100px";
    const object = new CSS3DObject(myElement);

    return () => {
      object
    };
  }, []);

  return <></>;
};

export default Screen;
