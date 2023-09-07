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





const Experience = ({ section }) => {

    const { material, color } = useCostumize();
    const { camera } = useThree();

    // Adjust the camera's y position

    const currentSection = section
    const modelRef = useRef(null);
    const planeRef = useRef(null); // Create a reference for the mesh


    function LightWithHelper() {
        const light = useRef();
        const light2 = useRef();

        // useHelper(light, THREE.DirectionalLightHelper, 0.5);

        return <directionalLight ref={light} position={[-7, 0, 5]} intensity={3} color={'rgb(217, 7, 137)'} />;
    }
    function LightWithHelper2() {

        const light2 = useRef();

        // useHelper(light2, THREE.DirectionalLightHelper, 0.5);

        return <directionalLight ref={light2} position={[1, -10, 15]} intensity={6} />;
    }

    const originalPosition = { x: 0, y: -10.5, z: 0 };
    const targetPosition = { x: 2, y: -17.9, z: 1 }; // Adjust these values based on where you want the model to move

    // Store the original rotation values
    const originalRotation = { x: 0.05, y: 0, z: 0 };
    const targetRotation = {
        x: originalRotation.x + 0,
        y: originalRotation.y + -1,
        z: originalRotation.z
    };

    const originalPlanePosition = { x: 0, y: -10.68, z: 0 };
    const targetPlanePosition = { x: 2, y: -18, z: 3 }; // Adjust as necessary

    const originalPlaneRotation = { x: -Math.PI / 2, y: 0, z: 0 };
    const targetPlaneRotation = {
        x: originalPlaneRotation.x + 0, // Adjust as necessary
        y: originalPlaneRotation.y + 0, // Adjust as necessary
        z: originalPlaneRotation.z
    };

    useEffect(() => {
        // If on section 2, animate to target positions and rotations
        if (section === 2) {
            if (modelRef.current) {
                gsap.killTweensOf(modelRef.current.position);  // Kill any ongoing animations
                gsap.killTweensOf(modelRef.current.rotation);
                
                gsap.to(modelRef.current.position, {
                    duration: 2,
                    x: targetPosition.x,
                    y: targetPosition.y,
                    z: targetPosition.z,
                    ease: "power2.out"
                });
    
                gsap.to(modelRef.current.rotation, {
                    duration: 1.5,
                    x: targetRotation.x,
                    y: targetRotation.y,
                    z: targetRotation.z,
                    ease: "power2.out"
                });
            }
    
            if (planeRef.current) {
                gsap.killTweensOf(planeRef.current.position);
                gsap.killTweensOf(planeRef.current.rotation);
    
                gsap.to(planeRef.current.position, {
                    duration: 1.5,
                    x: targetPlanePosition.x,
                    y: targetPlanePosition.y,
                    z: targetPlanePosition.z,
                    ease: "power2.out"
                });
    
                gsap.to(planeRef.current.rotation, {
                    duration: 1.5,
                    x: targetPlaneRotation.x,
                    y: targetPlaneRotation.y,
                    z: targetPlaneRotation.z,
                    ease: "power2.out"
                });
            }
        } else if (section === 1) {
            // Revert back to original position and rotation for section 1
            if (modelRef.current) {
                gsap.killTweensOf(modelRef.current.position);  // Kill any ongoing animations
                gsap.killTweensOf(modelRef.current.rotation);
    
                gsap.to(modelRef.current.position, {
                    duration: 1,
                    x: originalPosition.x,
                    y: originalPosition.y,
                    z: originalPosition.z,
                    ease: "power2.out"
                });
    
                gsap.to(modelRef.current.rotation, {
                    duration: 1,
                    x: originalRotation.x,
                    y: originalRotation.y,
                    z: originalRotation.z,
                    ease: "power2.out"
                });
            }
    
            if (planeRef.current) {
                gsap.killTweensOf(planeRef.current.position);
                gsap.killTweensOf(planeRef.current.rotation);
    
                gsap.to(planeRef.current.position, {
                    duration: 1,
                    x: originalPlanePosition.x,
                    y: originalPlanePosition.y,
                    z: originalPlanePosition.z,
                    ease: "power2.out"
                });
    
                gsap.to(planeRef.current.rotation, {
                    duration: 1,
                    x: originalPlaneRotation.x,
                    y: originalPlaneRotation.y,
                    z: originalPlaneRotation.z,
                    ease: "power2.out"
                });
            }
        }
    }, [section]);
    



    return (
        <>



            <ambientLight intensity={3} />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
            <LightWithHelper />
            <LightWithHelper2 />
            <PresentationControls
                speed={1}
                global
                zoom={0.9}
                polar={[0, Math.PI / 20]}
                touch-action='none'
                enabled={currentSection === 1}
                snap={true}


            >
                <mesh ref={modelRef} receiveShadow position={[0, -11.7, 0]} scale={3} rotation={[0.05, 0, 0]} >

                    <Model />

                </mesh>

                <mesh ref={planeRef} receiveShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-10.68}>

                    <planeGeometry args={[100, 50]} />
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