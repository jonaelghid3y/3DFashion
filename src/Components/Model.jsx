import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCostumize } from "../Context/Costumize";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/klar1 (1).glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions[animations[0].name].play();
    actions[animations[1].name].play();
})
const {
  model,
  setModel,
  hatMale,
  setHatMale,
  jacketMale,
  setJackMale,
  pantsMale,
  setPantsMale,
  shoeMale,
  setShoeMale,
  hatFemale,
  setHatFemale,
  jacketFemale,
  setJacketFemale,
  pantsFemale,
  setPantsFemale,
  shoeFemale,
  setShoeFemale,
} = useCostumize()
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={1.005}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name="Armature_AV02" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <skinnedMesh
          name="T-Air_Max2"
          geometry={nodes["T-Air_Max2"].geometry}
          material={materials["F04_Air Max"]}
          skeleton={nodes["T-Air_Max2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model=== 1 && shoeFemale === 1}
          
        />
        <skinnedMesh
          name="T-Dunks1"
          geometry={nodes["T-Dunks1"].geometry}
          material={materials.F01_Dunks}
          skeleton={nodes["T-Dunks1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && shoeFemale === 2}
        />
        <group name="T-Glasögon" rotation={[Math.PI / 2, 0, 0]} scale={1.005} visible={false}>
          <skinnedMesh
            name="A26_Sunglasses"
            geometry={nodes.A26_Sunglasses.geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes.A26_Sunglasses.skeleton}
            
          />
          <skinnedMesh
            name="A26_Sunglasses_1"
            geometry={nodes.A26_Sunglasses_1.geometry}
            material={materials.PaletteMaterial002}
            skeleton={nodes.A26_Sunglasses_1.skeleton}
          />
          <skinnedMesh
            name="A26_Sunglasses_2"
            geometry={nodes.A26_Sunglasses_2.geometry}
            material={materials.PaletteMaterial003}
            skeleton={nodes.A26_Sunglasses_2.skeleton}
          />
        </group>
        <skinnedMesh
          name="T-Hair1"
          geometry={nodes["T-Hair1"].geometry}
          material={materials.AV03_Hair}
          skeleton={nodes["T-Hair1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && hatFemale === 1}
        />
        <skinnedMesh
          name="T-Headscarf2"
          geometry={nodes["T-Headscarf2"].geometry}
          material={materials["M09-B_Silk Print (01).002"]}
          skeleton={nodes["T-Headscarf2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && hatFemale === 2}
        />
        <skinnedMesh
          name="T-Necklace1"
          geometry={nodes["T-Necklace1"].geometry}
          material={materials.PaletteMaterial002}
          skeleton={nodes["T-Necklace1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1}
        />
        <skinnedMesh
          name="T-Overalls2"
          geometry={nodes["T-Overalls2"].geometry}
          material={materials["M04-B_Denim.001"]}
          skeleton={nodes["T-Overalls2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && pantsFemale === 2}
        />
        <skinnedMesh
          name="T-Piercing"
          geometry={nodes["T-Piercing"].geometry}
          material={materials.PaletteMaterial004}
          skeleton={nodes["T-Piercing"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1}
        />
        <skinnedMesh
          name="T-PufferJacket2"
          geometry={nodes["T-PufferJacket2"].geometry}
          material={materials["M02-H_Polyester (Red)"]}
          skeleton={nodes["T-PufferJacket2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && jacketFemale === 2}
        />
        <group name="TjejKropp" rotation={[Math.PI / 2, 0, 0]} scale={1.005}visible={model === 1} >
          <skinnedMesh
            name="Body_AV03001"
            geometry={nodes.Body_AV03001.geometry}
            material={materials.AV03_Skin}
            skeleton={nodes.Body_AV03001.skeleton}
          />
          <skinnedMesh
            name="Body_AV03001_1"
            geometry={nodes.Body_AV03001_1.geometry}
            material={materials.AV03_Eyebrows}
            skeleton={nodes.Body_AV03001_1.skeleton}
          />
          <skinnedMesh
            name="Body_AV03001_2"
            geometry={nodes.Body_AV03001_2.geometry}
            material={materials.PaletteMaterial005}
            skeleton={nodes.Body_AV03001_2.skeleton}
          />
          <skinnedMesh
            name="Body_AV03001_3"
            geometry={nodes.Body_AV03001_3.geometry}
            material={nodes.Body_AV03001_3.material}
            skeleton={nodes.Body_AV03001_3.skeleton}
          />
          <skinnedMesh
            name="Body_AV03001_4"
            geometry={nodes.Body_AV03001_4.geometry}
            material={materials.EyeBrown}
            skeleton={nodes.Body_AV03001_4.skeleton}
          />
          <skinnedMesh
            name="Body_AV03001_5"
            geometry={nodes.Body_AV03001_5.geometry}
            material={materials["Eyelashes_Style 02"]}
            skeleton={nodes.Body_AV03001_5.skeleton}
          />
          <skinnedMesh
            name="Body_AV03001_6"
            geometry={nodes.Body_AV03001_6.geometry}
            material={materials.PaletteMaterial006}
            skeleton={nodes.Body_AV03001_6.skeleton}
          />
        </group>
        <skinnedMesh
          name="T-Cargos1"
          geometry={nodes["T-Cargos1"].geometry}
          material={materials["M01-B_Cotton (Khaki)"]}
          skeleton={nodes["T-Cargos1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && pantsFemale === 1}
        />
        <skinnedMesh
          name="Tröja1"
          geometry={nodes.Tröja1.geometry}
          material={materials["M02-A_Nylon (Black)"]}
          skeleton={nodes.Tröja1.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.005}
          visible={model === 1 && jacketFemale === 1}
        />
        <skinnedMesh
          name="K-Beanie2"
          geometry={nodes["K-Beanie2"].geometry}
          material={materials["M03-B_Wool (Ribbed)"]}
          skeleton={nodes["K-Beanie2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && hatMale === 2 && jacketMale === 2}
        />
        <skinnedMesh
          name="K-Byxor1"
          geometry={nodes["K-Byxor1"].geometry}
          material={materials.PaletteMaterial007}
          skeleton={nodes["K-Byxor1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && pantsMale === 1}
        />
        <skinnedMesh
          name="K-Cargos2"
          geometry={nodes["K-Cargos2"].geometry}
          material={materials["M01-B_Cotton (Khaki).001"]}
          skeleton={nodes["K-Cargos2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && pantsMale === 2}
        />
        <skinnedMesh
          name="K-HikingBoots2"
          geometry={nodes["K-HikingBoots2"].geometry}
          material={materials["F06_Hiking Boots"]}
          skeleton={nodes["K-HikingBoots2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && shoeMale === 2}
        />
        <skinnedMesh
          name="K-Hoody1"
          geometry={nodes["K-Hoody1"].geometry}
          material={materials["M01-A_Cotton (Dark Grey).001"]}
          skeleton={nodes["K-Hoody1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && jacketMale === 1}
        />
        <skinnedMesh
          name="K-Skor1"
          geometry={nodes["K-Skor1"].geometry}
          material={materials.F10_Docs}
          skeleton={nodes["K-Skor1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && shoeMale === 1}
        />
        <skinnedMesh
          name="K-Sunglasses1"
          geometry={nodes["K-Sunglasses1"].geometry}
          material={materials.PaletteMaterial008}
          skeleton={nodes["K-Sunglasses1"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={false}
        />
        <skinnedMesh
          name="K-Sweater2"
          geometry={nodes["K-Sweater2"].geometry}
          material={materials["M03-D_Wool (Knitted)"]}
          skeleton={nodes["K-Sweater2"].skeleton}
          rotation={[Math.PI / 2, 0, 0]}
          visible={model === 2 && jacketMale === 2}
        />
        <group name="K-TacticalVest2" rotation={[Math.PI / 2, 0, 0]} visible={model === 2 && jacketMale === 2}>
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001.geometry}
            material={materials["M02-A_Nylon (Dark Grey.001"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_1"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_1.geometry}
            material={materials["M02-D_Nylon (Strap).002"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_1.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_2"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_2.geometry}
            material={materials["M02-B_Nylon (RipStop - Black).001"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_2.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_3"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_3.geometry}
            material={materials["TRIM_Zipper 01 (Black).002"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_3.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_4"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_4.geometry}
            material={materials["TRIM_Stitching 01.001"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_4.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_5"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_5.geometry}
            material={materials.PaletteMaterial004}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_5.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_6"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_6.geometry}
            material={materials["TRIM_Buckle 01.001"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_6.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_7"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_7.geometry}
            material={materials.PaletteMaterial009}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_7.skeleton}
          />
          <skinnedMesh
            name="T17_Tactical_Vest_Detail_Mesh001_8"
            geometry={nodes.T17_Tactical_Vest_Detail_Mesh001_8.geometry}
            material={materials["TRIM_Buckle 02.001"]}
            skeleton={nodes.T17_Tactical_Vest_Detail_Mesh001_8.skeleton}
          />
        </group>
        <skinnedMesh
        visible={model === 2}
          name="KilleKropp"
          geometry={nodes.KilleKropp.geometry}
          material={materials.AV02_Skin}
          skeleton={nodes.KilleKropp.skeleton}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/klar1 (1).glb");