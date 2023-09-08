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
    const { camera, viewport } = useThree();

    const isMobile = window.innerWidth < 768;
    const responsiveRatio = viewport.width / 12;


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
    const loadingPosition = { x: 0, y: -5, z: 0 };
    const originalPosition = { x: 0, y: -10.5, z: 0 };
    const targetPosition = { x: isMobile? 1 : 2, y: isMobile? -17.3 : -17.9, z: 1 };
    const furtherTargetPosition = { x: 1, y: -24, z: 3 };

    const originalRotation = { x: 0.05, y: 0, z: 0 };
    const targetRotation = {
        x: originalRotation.x + 0,
        y: originalRotation.y + isMobile? -0.9 : -1.1,
        z: originalRotation.z
    };
    const furtherTargetRotation = {
        x: targetRotation.x,
        y: targetRotation.y +0.2,
        z: targetRotation.z
    };

    const originalPlanePosition = { x: 0, y: -10.68, z: 0 };
    const targetPlanePosition = { x: 2, y: isMobile? -17.4 : -18, z: 3 };
    const furtherPlanePosition = { x: 2, y: -26, z: 3 };

    const originalPlaneRotation = { x: -Math.PI / 2, y: 0, z: 0 };
    const targetPlaneRotation = {
        x: originalPlaneRotation.x + 0,
        y: originalPlaneRotation.y + 0,
        z: originalPlaneRotation.z
    };
    const furtherPlaneRotation = {
        x: targetPlaneRotation.x,
        y: targetPlaneRotation.y,
        z: targetPlaneRotation.z
    };

   
// ... [All the initializations and variable declarations]

useEffect(() => {
    // Initial loading animation
    if (modelRef.current && planeRef.current && section === 0) {
        modelRef.current.position.set(loadingPosition.x, loadingPosition.y, loadingPosition.z);
        planeRef.current.position.set(loadingPosition.x, loadingPosition.y, loadingPosition.z);
        
      

        // Position
        gsap.to(modelRef.current.position, {
            duration: 1.8,
            x: originalPosition.x,
            y: originalPosition.y,
            z: originalPosition.z,
            ease: "power2.out",
            
        });

        gsap.to(planeRef.current.position, {
            duration: 2,
            x: originalPlanePosition.x,
            y: originalPlanePosition.y,
            z: originalPlanePosition.z,
            ease: "power2.out"
        });

        // Rotation (assuming no rotation needed initially, but adjust if required)
        gsap.to(modelRef.current.rotation, {
            duration: 1.8,
            x: originalRotation.x,
            y: originalRotation.y,
            z: originalRotation.z,
            ease: "power2.out"
        });
        gsap.to(planeRef.current.rotation, {
            duration: 2,
            x: originalPlaneRotation.x,
            y: originalPlaneRotation.y,
            z: originalPlaneRotation.z,
            ease: "power2.out"
        });
    }
}, []);

useEffect(() => {
    if (modelRef.current && planeRef.current) {
        if (section === 1) {
            // Animate back to original positions and rotations
            // Position
            gsap.to(modelRef.current.position, {
                duration: 1.8,
                x: originalPosition.x,
                y: originalPosition.y,
                z: originalPosition.z,
                ease: "power2.out"
            });
            gsap.to(planeRef.current.position, {
                duration: 2,
                x: originalPlanePosition.x,
                y: originalPlanePosition.y,
                z: originalPlanePosition.z,
                ease: "power2.out"
            });

            // Rotation
            gsap.to(modelRef.current.rotation, {
                duration: 2,
                x: originalRotation.x,
                y: originalRotation.y,
                z: originalRotation.z,
                ease: "power2.out"
            });
            gsap.to(planeRef.current.rotation, {
                duration: 2,
                x: originalPlaneRotation.x,
                y: originalPlaneRotation.y,
                z: originalPlaneRotation.z,
                ease: "power2.out"
            });
            
        } else if (section === 2) {
            // Animate to target positions and rotations
            // Position
            gsap.to(modelRef.current.position, {
                duration: 2,
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                ease: "power2.out"
            });
            gsap.to(planeRef.current.position, {
                duration: 2,
                x: targetPlanePosition.x,
                y: targetPlanePosition.y,
                z: targetPlanePosition.z,
                ease: "power2.out"
            });

            // Rotation
            gsap.to(modelRef.current.rotation, {
                duration: 2,
                x: targetRotation.x,
                y: targetRotation.y,
                z: targetRotation.z,
                ease: "power2.out"
            });
            gsap.to(planeRef.current.rotation, {
                duration: 2,
                x: targetPlaneRotation.x,
                y: targetPlaneRotation.y,
                z: targetPlaneRotation.z,
                ease: "power2.out"
            });
            
        } else if (section === 3) {
            // Animate to further target positions and rotations
            // Position
            gsap.to(modelRef.current.position, {
                duration: 1.5,
                x: furtherTargetPosition.x,
                y: furtherTargetPosition.y,
                z: furtherTargetPosition.z,
                ease: "power2.out"
            });
            gsap.to(planeRef.current.position, {
                duration: 2,
                x: furtherPlanePosition.x,
                y: furtherPlanePosition.y,
                z: furtherPlanePosition.z,
                ease: "power2.out"
            });

            // Rotation
            gsap.to(modelRef.current.rotation, {
                duration: 2,
                x: furtherTargetRotation.x,
                y: furtherTargetRotation.y,
                z: furtherTargetRotation.z,
                ease: "power2.out"
            });
            gsap.to(planeRef.current.rotation, {
                duration: 2,
                x: furtherPlaneRotation.x,
                y: furtherPlaneRotation.y,
                z: furtherPlaneRotation.z,
                ease: "power2.out"
            });
        }
    }
}, [section]);

// ... [Rest of the component]



    return (
        < >



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
                <mesh ref={modelRef}  position={[0, -11.7, 0]} scale={isMobile? 2.7:3} rotation={[0.05, 0, 0]} >

                    <Model  />

                </mesh>

                <mesh ref={planeRef} receiveShadow rotation={[-Math.PI / 2, 0, 0]} position-y={-10.68}>

                    <planeGeometry args={[100, 50]} />
                    <meshBasicMaterial receiveShadow side={2} color="#383838" />
                    {/* <MeshReflectorMaterial
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
                    /> */}

                </mesh>


            </PresentationControls>










        </>
    );
}
export default Experience;