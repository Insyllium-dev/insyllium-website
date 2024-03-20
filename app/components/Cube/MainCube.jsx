'use client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader' 
import React, { useEffect, useRef } from 'react'
import { useMotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'

const MainCube = () => {
  return (
    <div className="w-full h-full">
        <Canvas>
          <OrbitControls enablePan={false} enableZoom={false}/>
          <ambientLight intensity={2}/>
          <directionalLight position={[2,1,1]}/>
            <Cube />
        </Canvas>
    </div>
  )
}

export default MainCube

const Cube = () =>{
  const mesh = useRef(null)

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const manageMouseMove =(e)=>{
    const { innerHeight,innerWidth } = window;
    const { clientX,clientY } = e;
    const x = -0.5 + (clientX/innerWidth)
    const y = -0.5 + (clientY/innerHeight)
    mouse.x.set(x)
    mouse.y.set(y)
  }

  useEffect(()=>{
    window.addEventListener('mousemove',manageMouseMove)

    return window.removeEventListener('mouse',manageMouseMove)
  },[])
  
  // useFrame((state,delta)=>{
  //   mesh.current.rotation.x += delta* 0.25;
  //   mesh.current.rotation.y += delta* 0.25;
  //   mesh.current.rotation.z += delta* 0.25;
  // })

  const texture_1 = useLoader(TextureLoader,'/img1_.jpg')
  const texture_2 = useLoader(TextureLoader,'/img2_.jpg')
  const texture_3 = useLoader(TextureLoader,'/img4_.jpg')
  
  
  return (
    <motion.mesh ref={mesh} rotation-y={mouse.x} rotation-x={mouse.y}>
        <boxGeometry args={[2.5,2.5,2.5]}/>
        <meshStandardMaterial color={"orange"}/>
        {/* <meshStandardMaterial map={texture_1} attach={'material-0'}/>
        <meshStandardMaterial map={texture_2} attach={'material-1'}/>
        <meshStandardMaterial map={texture_3} attach={'material-2'}/>
        <meshStandardMaterial map={texture_3} attach={'material-3'}/>
        <meshStandardMaterial map={texture_2} attach={'material-4'}/>
        <meshStandardMaterial map={texture_1} attach={'material-5'}/> */}
    </motion.mesh>
  )
}