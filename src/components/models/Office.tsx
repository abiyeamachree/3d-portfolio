import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import MiniSite from '../mini-site/MiniSite';
import Hitbox from '../Hitbox';

import officeDraco from '../../assets/3d/office_draco2.glb';

// Path to Draco decoder files
const dracoDecoderPath = '/path_to_draco_decoder/';

export const Office: React.FC<{ onDeskClick: () => void; onLaptopClick: () => void }> = ({ onDeskClick, onLaptopClick }) => {
  const { nodes, materials } = useGLTF(officeDraco, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(dracoDecoderPath);
    (loader as GLTFLoader).setDRACOLoader(dracoLoader);
  });

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg2.geometry}
        material={materials.Material}
        position={[-0.089, 0.177, -0.386]}
        scale={[0.019, 0.044, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg1.geometry}
        material={materials.Material}
        position={[-0.089, 0.177, 0.372]}
        scale={[0.019, 0.044, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand.geometry}
        material={materials.Material}
        position={[-0.198, 0.293, 0.049]}
        scale={[0.362, 0.031, 2.783]}
      />
      <group position={[-0.195, 0.355, -0.036]} scale={[0.091, 0.012, 0.406]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.020']}
        />
      </group>
      <group
        position={[-0.188, 0.389, 0.269]}
        rotation={[0, 0.08, 0]}
        scale={[0.091, 0.012, 0.406]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials['Material.020']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Background.geometry}
        material={materials['Material.012']}
        position={[-0.936, 43.282, -0.183]}
        rotation={[-3.12, 0.004, -0.018]}
        scale={[1.001, 2.307, 1.001]}
      />
      <group position={[-0.02, 0.354, -0.333]} scale={[2.316, 1, 1.225]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.024']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube059.geometry}
        material={materials['Material.027']}
        position={[0.01, 0.401, -0.342]}
        scale={[0.05, 0.507, 0.531]}
      />
      <group
        position={[0.01, 0.401, -0.342]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.021, 0, 0.021]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Material.022']}
        />
      </group>
      <group
        position={[0.01, 0.353, -0.342]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.021, 0, 0.021]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials['Material.022']}
        />
      </group>
      <group
        position={[0.01, 0.304, -0.342]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.021, 0, 0.021]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials['Material.022']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube060.geometry}
        material={materials['Material.027']}
        position={[-0.18, 0.401, -0.342]}
        scale={[0.05, 0.507, 0.531]}
      />
      <group
        position={[-0.18, 0.401, -0.342]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.021, 0, 0.021]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials['Material.022']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube061.geometry}
        material={materials['Material.024']}
        position={[0.028, 0.341, 0.312]}
        scale={[2.214, 1.122, 0.674]}
      />
      <group
        position={[0.092, 0.373, 0.188]}
        rotation={[0, -0.547, 0]}
        scale={[1.269, 1.379, 1.019]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials['Material.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_2.geometry}
          material={materials['Material.030']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials['default']}
        position={[0.098, 0.377, 0.181]}
        rotation={[0, 0, -0.222]}
        scale={[2.074, 2.074, 1.246]}
      />
      <group
        position={[0.101, 0.391, 0.181]}
        rotation={[0, 0, -0.222]}
        scale={[3.253, 3.562, 1.953]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_2.geometry}
          material={materials['Material.032']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['default']}
        position={[0.097, 0.377, 0.181]}
        rotation={[0, 0, -0.222]}
        scale={[3.439, 2.161, 2.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube064.geometry}
        material={materials['Material.029']}
        position={[-0.161, -0.056, 0.485]}
        rotation={[-Math.PI, 0.484, -Math.PI]}
        scale={[0.009, 0.02, 0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.029']}
        position={[-0.162, 0.141, 0.484]}
        rotation={[0, 0.639, 0]}
        scale={[0.005, 0.283, 0.005]}
      />
      <group
        position={[-0.159, 0.517, 0.478]}
        rotation={[0, 0.517, -Math.PI / 2]}
        scale={[1, 0.669, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_1.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001_2.geometry}
          material={materials['Material.036']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube062.geometry}
        material={materials['Material.017']}
        position={[-0.039, 0.292, 0.226]}
        rotation={[0, 0.433, -0.592]}
        scale={[1.236, 0.028, 2.121]}
      />
      <group
        position={[-0.052, 0.305, 0.231]}
        rotation={[0, 0.433, -0.606]}
        scale={[1.236, 0.042, 1.236]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials['Material.024']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube066_1.geometry}
          material={materials['Material.020']}
        />
      </group>
      <group position={[0.023, 0.275, -0.154]} rotation={[-Math.PI, 1.351, -Math.PI]} scale={0.926}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack.geometry}
          material={materials['Material.045']}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.025, 0.019, 0.019]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack001.geometry}
          material={materials['default']}
          position={[-0.011, 0.015, 0.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack002.geometry}
          material={materials['Material.049']}
          position={[-0.015, 0.011, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group position={[-0.004, 0.008, -0.008]} rotation={[Math.PI / 2, 0, 0]} scale={0.018}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_1.geometry}
            material={materials['main body']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_2.geometry}
            material={materials['Material.043']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_3.geometry}
            material={materials['Material.047']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack003_4.geometry}
            material={materials['Material.048']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack004.geometry}
          material={materials['Material.045']}
          position={[0, 0.016, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack005.geometry}
          material={materials['Material.046']}
          position={[0.001, 0, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack007.geometry}
          material={materials['Material.045']}
          position={[0, 0.016, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack008.geometry}
          material={materials['main body.001']}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack009.geometry}
          material={materials['main body']}
          position={[0.001, 0.007, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack010.geometry}
          material={materials['Material.044']}
          position={[-0.011, 0.014, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack011.geometry}
          material={materials['main body']}
          position={[0, 0.012, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack012.geometry}
          material={materials['Material.038']}
          position={[0, 0.013, -0.013]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack013.geometry}
          material={materials['Material.038']}
          position={[0.003, 0.009, -0.026]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseThermaltakeBlack014.geometry}
          material={materials['Material.041']}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group position={[-0.002, 0.013, -0.002]} rotation={[Math.PI / 2, 0, 0]} scale={0.018}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_1.geometry}
            material={materials['Material.038']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_2.geometry}
            material={materials['Material.039']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MouseThermaltakeBlack015_3.geometry}
            material={materials['Material.040']}
          />
        </group>
      </group>
      <group position={[0.373, 0.075, -0.159]} rotation={[-Math.PI, 1.088, -Math.PI]} scale={0.529}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Estelle_Desk_Swivel_Chair_1.geometry}
          material={materials['Plastico preto']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Estelle_Desk_Swivel_Chair_2.geometry}
          material={materials['Plasticopreto-02']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Estelle_Desk_Swivel_Chair_3.geometry}
          material={materials['Metal preto-01']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Estelle_Desk_Swivel_Chair_4.geometry}
          material={materials['Material.052']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Estelle_Desk_Swivel_Chair_5.geometry}
          material={materials.crome}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['Material.013']}
        position={[0.035, 0.286, -0.03]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <group
        position={[0.003, 0.286, 0.079]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Material.013']}
        position={[0.003, 0.286, 0.005]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Material.013']}
        position={[0.014, 0.286, 0.002]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.013']}
        position={[0.014, 0.286, 0.136]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.008]}
      />
      <group
        position={[0.014, 0.286, 0.07]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['Material.013']}
        position={[0.025, 0.286, 0.135]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.008]}
      />
      <group
        position={[0.025, 0.286, 0.072]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['Material.013']}
        position={[0.025, 0.286, 0.006]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials['Material.013']}
        position={[0.035, 0.286, 0.133]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials['Material.013']}
        position={[0.035, 0.286, 0.008]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials['Material.013']}
        position={[0.047, 0.285, 0.075]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['Material.013']}
        position={[-0.008, 0.286, 0.139]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <group
        position={[0.015, 0.281, 0.041]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.033, 0.004, 0.099]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials['Material.008']}
        />
      </group>
      <group
        position={[0.035, 0.286, 0.074]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.002, 0.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[0.046, 0.286, -0.03]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['Material.003']}
        position={[0.046, 0.286, -0.016]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials['Material.004']}
        position={[0.046, 0.286, -0.043]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.009']}
        position={[-0.006, 0.286, -0.016]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials['Material.010']}
        position={[-0.006, 0.286, -0.03]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.011']}
        position={[-0.006, 0.286, -0.043]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials['Material.015']}
        position={[0.004, 0.286, -0.043]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials['Material.021']}
        position={[0.004, 0.286, -0.03]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials['Material.023']}
        position={[0.004, 0.286, -0.016]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials['Material.025']}
        position={[0.013, 0.286, -0.016]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials['Material.026']}
        position={[0.013, 0.286, -0.03]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials['Material.034']}
        position={[0.013, 0.286, -0.043]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Material.035']}
        position={[-0.008, 0.286, 0.12]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials['Material.037']}
        position={[-0.008, 0.286, 0.11]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials['Material.050']}
        position={[-0.008, 0.286, 0.1]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials['Material.054']}
        position={[-0.008, 0.286, 0.09]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials['Material.055']}
        position={[-0.008, 0.286, 0.044]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials['Material.056']}
        position={[-0.008, 0.286, 0.054]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials['Material.057']}
        position={[-0.008, 0.286, 0.064]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials['Material.058']}
        position={[-0.008, 0.286, 0.074]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials['Material.059']}
        position={[-0.008, 0.286, 0.029]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials['Material.060']}
        position={[-0.008, 0.286, 0.019]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials['Material.061']}
        position={[-0.008, 0.286, 0.009]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials['Material.062']}
        position={[-0.008, 0.286, -0.001]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.004, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials['Material.065']}
        position={[0.047, 0.286, 0.025]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials['Material.066']}
        position={[0.047, 0.286, 0.038]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube0275.geometry}
        material={materials['Material.067']}
        position={[0.047, 0.286, 0.013]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube0276.geometry}
        material={materials['Material.068']}
        position={[0.047, 0.286, 0]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027001.geometry}
        material={materials['Material.069']}
        position={[0.047, 0.286, 0.112]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials['Material.070']}
        position={[0.047, 0.286, 0.137]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={materials['Material.071']}
        position={[0.047, 0.286, 0.124]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.005, 0.003, 0.006]}
      />
      <group
        position={[-0.047, 0.275, -0.01]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.53, -0.01, -3.238]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_2.geometry}
          material={materials['Material.028']}
        />
      </group>
      <group
        position={[-0.045, 0.267, -0.008]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.199, -0.008, -0.404]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['Material.006']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/office_draco.glb')

export default Office