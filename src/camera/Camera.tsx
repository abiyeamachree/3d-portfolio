import React from 'react';
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EventEmitter } from "events";

export enum CameraType {
    IDLE = 'idle',
    DESK = 'desk',
    LAPTOP = 'laptop',
}

export default class Camera extends EventEmitter {
    
    position: Vector3;
    centrePoint: Vector3;

    constructor() {
        super();
        this.position = new Vector3(0, 0, 0);
        this.centrePoint = new Vector3(0, 0, 0);
    }
};