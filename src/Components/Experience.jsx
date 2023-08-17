import { PresentationControls, Stage, MeshReflectorMaterial, OrbitControls, Float, useTexture, Scroll } from "@react-three/drei";

import { MeshBasicMaterial, MeshNormalMaterial } from "three";
import { useCostumize } from "../Context/Costumize";

import { Model4 } from "./Model4";

import { Effects } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Lightformer } from "@react-three/drei";
import { Suspense } from "react";
import { EarthModel } from "./EarthModel";
import { Model } from "./Model";


const Experience = () => {

    const { material, color } = useCostumize();


    return (
        <>
            {/* <OrbitControls/> */}
            <Suspense fallback={null}>
                <ambientLight />
                <directionalLight intensity={5} />
                <Environment path="/Cube" />

              
               

                <PresentationControls
                   speed={1.5} global zoom={1.1} polar={[0, Math.PI / 10]}
                    touch-action={"none"}
                >
                    <mesh position={[0, -10.5, 0]} scale={3} rotation={[0.05,0,0]} >


                        <Model/>



                    </mesh>



                    <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-10.6}>

                        <planeGeometry  args={[170, 100]}  />
                        <meshBasicMaterial side={2} color="#383838"/>
                        
                    </mesh>
                    
                    
                </PresentationControls>
                
            </Suspense>

        </>
    );
}
export default Experience;