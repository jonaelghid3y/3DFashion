import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";



export function Model4(props) {
  const { nodes, materials } = useGLTF("/output.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.001, 1.781, 0.01]} scale={0.977}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A17_Piercings_1.geometry}
          material={materials.PaletteMaterial006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.A17_Piercings_2.geometry}
          material={materials.PaletteMaterial002}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_AV02.geometry}
        material={materials.AV02_Skin}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.A07_Headscarf002.geometry}
        material={materials["M09-B_Silk Print (01).002"]}
        skeleton={nodes.A07_Headscarf002.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.A15_Necklace_Detail_Mesh.geometry}
        material={materials.PaletteMaterial001}
        skeleton={nodes.A15_Necklace_Detail_Mesh.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.B06_Cargos.geometry}
        material={materials["M01-B_Cotton (Khaki)"]}
        skeleton={nodes.B06_Cargos.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <group position={[-0.003, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.B13_Thong003_1.geometry}
          material={materials["M01-A_Cotton (Light Grey).004"]}
          skeleton={nodes.B13_Thong003_1.skeleton}
          visible={false}
        />
        <skinnedMesh
          geometry={nodes.B13_Thong003_2.geometry}
          material={materials["M10-A_Logo (verybasics).004"]}
          skeleton={nodes.B13_Thong003_2.skeleton}
          visible={false}
        />
      </group>
      <group position={[-0.003, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Body_AV03_1.geometry}
          material={materials.AV03_Eyebrows}
          skeleton={nodes.Body_AV03_1.skeleton}
          
        />
        <skinnedMesh
          geometry={nodes.Body_AV03_2.geometry}
          material={materials.AV03_Skin}
          skeleton={nodes.Body_AV03_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Body_AV03_3.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Body_AV03_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Body_AV03_4.geometry}
          material={materials.PaletteMaterial004}
          skeleton={nodes.Body_AV03_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Body_AV03_5.geometry}
          material={materials.EyeBrown}
          skeleton={nodes.Body_AV03_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Body_AV03_6.geometry}
          material={materials["Eyelashes_Style 02"]}
          skeleton={nodes.Body_AV03_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Body_AV03_7.geometry}
          material={materials.PaletteMaterial005}
          skeleton={nodes.Body_AV03_7.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.F01_Dunks.geometry}
        material={materials.F01_Dunks}
        skeleton={nodes.F01_Dunks.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.F01_Dunks001.geometry}
        material={materials.F01_Dunks}
        skeleton={nodes.F01_Dunks001.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.F04_Air_Max.geometry}
        material={materials["F04_Air Max"]}
        skeleton={nodes.F04_Air_Max.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.F04_Air_Max001.geometry}
        material={materials["F04_Air Max"]}
        skeleton={nodes.F04_Air_Max001.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes.Hair_AV03.geometry}
        material={materials.AV03_Hair}
        skeleton={nodes.Hair_AV03.skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        visible={false}
      />
      <skinnedMesh
        geometry={nodes["T10_Hoody_(Box_Fit)"].geometry}
        material={materials["M01-A_Cotton (Dark Grey).003"]}
        skeleton={nodes["T10_Hoody_(Box_Fit)"].skeleton}
        position={[-0.003, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}

        visible={false}
      />
      <group position={[-0.003, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.T22_Leotard_1.geometry}
          material={materials["M02-A_Nylon (Black)"]}
          skeleton={nodes.T22_Leotard_1.skeleton}
          visible={false}
        />
        <skinnedMesh
          geometry={nodes.T22_Leotard_2.geometry}
          material={materials["M02-E_Nylon (See-Through)"]}
          skeleton={nodes.T22_Leotard_2.skeleton}
          visible={false}
        />
      </group>
      <primitive object={nodes.mixamorigHips} />
      <primitive object={nodes.neutral_bone} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A03_Beanie.geometry}
        material={materials["M03-B_Wool (Ribbed)"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.A27_Sunglasses.geometry}
        material={materials.PaletteMaterial007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B04_Flared.geometry}
        material={materials["M06-C_Leather (Rough)"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B06_Cargos001.geometry}
        material={materials["M01-B_Cotton (Khaki).001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.F06_Hiking_Boots.geometry}
        material={materials["F06_Hiking Boots"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.F10_Docs.geometry}
        material={materials.F10_Docs}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["T10_Hoody_(Box_Fit)001"].geometry}
        material={materials["M01-A_Cotton (Dark Grey).001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T20_Sweater.geometry}
        material={materials["M03-D_Wool (Knitted)"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B11_Overalls_Detail_Mesh001_1.geometry}
        material={materials["M04-B_Denim.001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B11_Overalls_Detail_Mesh001_2.geometry}
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B11_Overalls_Detail_Mesh001_3.geometry}
        material={materials["TRIM_Buttonhole 01.001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B11_Overalls_Detail_Mesh001_4.geometry}
        material={materials["TRIM_Stitching 01.003"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_1.geometry}
        material={materials["M02-A_Nylon (Dark Grey.001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_2.geometry}
        material={materials["M02-D_Nylon (Strap).002"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_3.geometry}
        material={materials["M02-B_Nylon (RipStop - Black).001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_4.geometry}
        material={materials["TRIM_Zipper 01 (Black).002"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_5.geometry}
        material={materials["TRIM_Stitching 01.003"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_6.geometry}
        material={materials["TRIM_Buckle 01.001"]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_7.geometry}
        material={materials.PaletteMaterial008}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_8.geometry}
        material={materials["TRIM_Buckle 02.001"]}
      />
    </group>
  );
}

useGLTF.preload("/output.glb");