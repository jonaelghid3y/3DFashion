import { PresentationControls, Stage, MeshReflectorMaterial, OrbitControls, Float, useTexture, Scroll } from "@react-three/drei";

import { MeshBasicMaterial, MeshNormalMaterial } from "three";
import { useCostumize } from "../Context/Costumize";

import { Model4 } from "./Model4";
import { Effects } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Lightformer } from "@react-three/drei";
import { Suspense } from "react";
import { EarthModel } from "./EarthModel";


const Experience = () => {

    const { material, color } = useCostumize();


    return (
        <>
            {/* <OrbitControls/> */}
            <Suspense fallback={null}>
                <ambientLight />
                <directionalLight intensity={10} />
                <Environment path="/Cube" />

                <mesh position={[0, -15, 0]}>
                    <EarthModel/>
                </mesh>
               

                <PresentationControls
                   speed={1.5} global zoom={1} polar={[0, Math.PI / 10]}
                    touch-action={"none"}
                >
                    <mesh position={[0, -10, 0]} scale={2.5} >


                        <Model4 />



                    </mesh>



                    <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-10}>

                        <planeGeometry  args={[170, 170]} />
                        <MeshReflectorMaterial
                            blur={[0, 0]}
                            resolution={1200}
                            mixBlur={4}
                            mixStrength={20}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#101010"
                            metalness={0.2}
                            side={2}
                        />
                    </mesh>
                </PresentationControls>
            </Suspense>

        </>
    );
}
export default Experience;