'use client'

import { Text } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader' 


const ServiceModel = () => {
  return (
    <Canvas>
        <OrbitControls enablePan={false} enableZoom={false}/>
        <ambientLight intensity={2}/>
          <directionalLight position={[2,1,1]}/>
        <Model />
    </Canvas>
  )
}

export default ServiceModel

const Model = () =>{
    const texture_1 = useLoader(TextureLoader,'/img4_.jpg')

    return (
        <mesh>
            <boxGeometry args={[2.5,2.5,2.5]} />
            {/* <meshStandardMaterial color={'orange'}/> */}
            <meshStandardMaterial map={texture_1} attach={'material-0'}/>
        </mesh>
        )
}