
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model4(props) {
  const { nodes, materials } = useGLTF("/KILLEN2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_AV02.geometry}
        material={materials.AV02_Skin}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A03_Beanie.geometry}
        material={materials["M03-B_Wool (Ribbed)"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B06_Cargos001.geometry}
        material={materials["M01-B_Cotton (Khaki).001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.F06_Hiking_Boots.geometry}
        material={materials["F06_Hiking Boots"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T20_Sweater.geometry}
        material={materials["M03-D_Wool (Knitted)"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_1.geometry}
        material={materials["M02-A_Nylon (Dark Grey.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_2.geometry}
        material={materials["M02-D_Nylon (Strap).002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_3.geometry}
        material={materials["M02-B_Nylon (RipStop - Black).001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_4.geometry}
        material={materials["TRIM_Zipper 01 (Black).002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_5.geometry}
        material={materials["TRIM_Stitching 01.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_6.geometry}
        material={materials["M07-C_Metal-Chrome.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_7.geometry}
        material={materials["TRIM_Buckle 01.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_8.geometry}
        material={materials["TRIM_Buckle (Side).001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_9.geometry}
        material={materials["TRIM_Buckle 02.001"]}
      />
    </group>
  );
}

useGLTF.preload("/KILLEN2.glb");


