'use client'
import { motion, useMotionValue,useSpring } from "framer-motion"
import { useEffect } from "react"

const Cursor = () => {

    const cursorSize = 24;

    const mouse = {
        x:useMotionValue(0),
        y:useMotionValue(0),
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize/2)
        mouse.y.set(clientY - cursorSize/2)
    }

    const smoothOptions = {damping:20, stiffness:300,mass:0.5}
    const smoothMouse = {
        x:useSpring(mouse.x,smoothOptions),
        y:useSpring(mouse.y, smoothOptions),
    }

    useEffect(()=>{
        window.addEventListener('mousemove',manageMouseMove)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
        }
    })


  return (
    <motion.div 
    className='fixed top-0 left-0 h-6 w-6 rounded-full bg-white z-10'
    style={{left:smoothMouse.x,top:smoothMouse.y}}
    >

    </motion.div>
  )
}

export default Cursor