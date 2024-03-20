'use client'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import { useEffect } from 'react'

const HakbusPage = () => {
  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <div className="min-h-screen">
        <div className="h-[40vh] md:h-[45vh] flex flex-col justify-between relative top-20 py-[50px] md:py-[100px] mb-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-20% to-cyan-300/40 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins uppercase">Hakbus</h1>
          <div className="flex flex-col gap-4 md:flex-row items-start justify-between md;items-center">
              <div>
              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-base md:text-lg font-poppins">Client</p>
              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins">Hak Bus</p>
              </div>
              <div>
              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-base md:text-lg font-poppins">Expertise</p>
              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins">UI/UX Design, Development</p>
              </div>
              <div>
              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-base md:text-lg font-poppins">Year</p>
              <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins">2022</p>
              </div>
          </div>
        </div>
        <div className="bg-neutral-500/80 min-h-screen w-full left-1/2 relative -translate-x-1/2">
          <div className="w-full h-screen flex justify-center items-center overflow-hidden">
          <Image src={'/img1_.jpg'} alt='Proejct image' className="w-full h-full object-cover lg:px-20 xl:px-40 2xl:px-[20rem] translate-y-20" width={1000} height={1000}/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-40 xl:gap-60 py-[150px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]">
          <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-xl md:text-2xl font-poppins">About project</p>
          <div className="space-y-8">
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-2xl md:text-3xl font-poppins">Hakbus is an innovative project aimed at revolutionizing transportation.</p>
            <p className="font-normal text-neutral-300 text-xl font-poppins">Through meticulous UI/UX design, we&apos;ve created an intuitive platform for Hakbus users. By focusing on user needs and behaviors, we&apos;ve optimized every aspect of the journey, ensuring seamless booking and efficient route suggestions. Our user-centric approach sets a new standard for transportation services.</p>
        </div>

        </div>
        <div className="bg-neutral-500/80 min-h-screen w-full left-1/2 relative -translate-x-1/2">
          <div className="w-full h-screen flex justify-center items-center">
          </div>
        </div>
    </div>
  )
}

export default HakbusPage