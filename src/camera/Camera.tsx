import React from 'react';
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EventEmitter } from "events";
import {
    FrameInstance,
    StartFrame,

} from "./Frames";

// Opted for TypeScript for enum functionality

export enum CameraEnum {
    START = 'orbitControlsStart',
    LOADING = 'loading',
    IDLE = 'idle',
    DESK = 'desk',
    LAPTOP = 'laptop',
}

export default class Camera extends EventEmitter {
    
    position: Vector3;
    centrePoint: Vector3;

    orbitControls: OrbitControls;

    currentFrame: CameraEnum | undefined;
    targetFrame: CameraEnum | undefined;
    frames: { [key in CameraEnum]:  } = {};

    constructor() {
        super();
        this.position = new Vector3(0, 0, 0);
        this.centrePoint = new Vector3(0, 0, 0);

        this.free = false;
    }
};