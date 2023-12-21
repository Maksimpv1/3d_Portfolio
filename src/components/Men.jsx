import React, { Suspense, useEffect, useState,useRef } from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const MenModal = () => {
    const men = useGLTF('./desktop_pc/men/scene.gltf')

    const meshRef = useRef(null);

    useFrame(() => {if (meshRef.current) {
        meshRef.current.rotation.z += 0.005;
        if(meshRef.current.rotation.y > 3 && meshRef.current.rotation.y < 0 ){  
            meshRef.current.rotation.y -= 0.005;
        }else if (meshRef.current.rotation.y < 3 && meshRef.current.rotation.y > 0) {            
            meshRef.current.rotation.y += 0.005;
        }
      }});
    return(
        <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh ref={meshRef}>
            <hemisphereLight intensity={ 1.15 }
            groundColor='black' />
            <pointLight intensity={ 1 } />
            <spotLight
                position={ [-40, 50, 10] }
                angle={.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSiza = {1024}
            />
            <motion.group
            initial={{ rotationY: 0 }}
            animate={{ rotationY: 360 }}
            transition={{ duration: 2, loop: Infinity, ease: "linear" }}
            >
                <primitive 
                object={men.scene}
                scale={ 0.05 * 1/2 }
                position={ [ 0, -1.25, -1.5 ] } 
                rotation = { [-0.01, -0.2, -0.1 ] }
                />
            </motion.group>
        
        </mesh>
        </group>
        </group>
    )
}

const Men = () => {
    return(
        <section className='relative w-full h-80 mx-auto place-content-center'>
            <Canvas
            frameloop="demand"
            shadows
            camera={{ positiont:[20,63, 50], fov: 30, }}
            gl={{ preserveDrawingBuffer:true }}
            >
                <Suspense fallback={ <CanvasLoader />}>
                    <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate={true}
                    />
                    <MenModal />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Men