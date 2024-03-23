'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Image from "next/image"

const MobileAppSection = () => {

  const tl = useRef()

  useGSAP(()=>{
    tl.current = gsap.timeline({}).addLabel('start')
    
      gsap.set('.title', {
        translateY: 75,
        scale:0.9,
        opacity: 0,
      })
      gsap.set('.subtitle', {
        translateY: 75,
        scale:0.9,
        opacity: 0,
      })
      gsap.set('.button', {
        translateY: 75,
        scale:0.9,
        opacity: 0,
      })

    tl.current.to('.title', {
      opacity: 1,
      scale:1,
      translateY: 0,
      duration: 1,
      ease: 'expo.inOut',
    }).to('.subtitle',{
      opacity: 1,
      scale:1,
      translateY: 0,
      duration: 1,
      ease: 'expo.inOut',
    },0).to('.button',{
      opacity: 1,
      scale:1,
      translateY: 0,
      duration: 1,
      ease: 'expo.inOut',
    },0)

  },[])

  return (
    <div className="flex flex-col md:flex-row gap-12 jc md:justify-between items-center py-20">
        <div className="flex flex-col gap-12 w-full md:w-1/2">
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white max-w-xl title">Mobile <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80 max-w-xl">Apps</span></h1>
           <div className="space-y-6">
           <p className="text-white font-normal text-lg max-w-xl subtitle">Get ahead in the mobile world with our app development services. We&apos;ll help you from start to finish. Count on us to meet your needs and advise you on what&apos;s trendy. </p>
            <p className="bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80 font-normal text-lg text-transparent max-w-xl button">Let&apos;s turn your ideas into a sleek app that goes wherever you go.</p>
           </div>
        </div>
        <div className="w-full md:w-1/2">
            <Image alt="Mobile app image" src={'/hakbusphone.png'} width={1920} height={1080} className="object-contain"/>
        </div>
    </div>
  )
}

export default MobileAppSection