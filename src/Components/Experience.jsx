import { PresentationControls, Stage, MeshReflectorMaterial } from "@react-three/drei";
import { useCostumize } from "../Context/Costumize";
import { gsap } from 'gsap';
import { Suspense } from "react";
import { useEffect, useRef } from "react";
import { Model } from "./Model";
import { useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import * as THREE from 'three';
import { FinishedModel } from "./FinsishedModel";

function LightWithHelper() {
    const light = useRef();
    const light2 = useRef();

    // useHelper(light, THREE.DirectionalLightHelper, 0.5);
    
    return <directionalLight ref={light} position={[0, 0, 5]} intensity={1} />;
  }
  function LightWithHelper2() {
 
    const light2 = useRef();

    // useHelper(light2, THREE.DirectionalLightHelper, 0.5);
    
    return <directionalLight ref={light2} position={[0, -10, 15]} intensity={5} />;
  }
  
  


const Experience = ({ section }) => {

    const { material, color } = useCostumize();
    const { camera } = useThree();

    // Adjust the camera's y position

    const currentSection = section
    const modelRef = useRef(null);  // Create a reference for the mesh
    const originalPosition = { x: 0, y: -10.5, z: 0 };


    useEffect(() => {
        if (section !== 1) {
            console.log("rätt sektion")
            if (modelRef.current) {  // Ensure the ref is set
                console.log("rätt ref")
                gsap.to(modelRef.current.position, {
                    duration: 1,
                    x: originalPosition.x,
                    y: originalPosition.y,
                    z: originalPosition.z,
                    ease: "power2.out"
                });
            }
        }
    }, [section]);

    return (
        <>

{/* 
            <OrbitControls /> */}
            <ambientLight intensity={2} />
           
            <LightWithHelper />
            <LightWithHelper2/>
            {/* <rectAreaLight position={[0, -3, 1]} intensity={0} /> */}

            <PresentationControls
                speed={1.5} global zoom={1} polar={[0, Math.PI / 30]}
                touch-action={"none"}
                enabled={currentSection === 1}

            >
                <mesh ref={modelRef} receiveShadow position={[0, -11, 0]} scale={3} rotation={[0.05, 0, 0]} >

                  <FinishedModel/>

                </mesh>

                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-11}>

                    <planeGeometry args={[170, 100]} />
                    {/* <meshBasicMaterial receiveShadow side={2} color="#383838" /> */}
                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={800}
                        mixBlur={1}
                        mixStrength={40}
                        roughness={1}
                        depthScale={1.2}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#101010"
                        metalness={0.5}
                        side={2}
                    />

                </mesh>


            </PresentationControls>

           

                    

               
            



        </>
    );
}
export default Experience;