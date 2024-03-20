'use client'
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion'
import { discount, hand } from '../../../public';
import Image from 'next/image';
import MainCube from '../Cube/MainCube'
import WorkModel from '../Models/WorkModel'

const Variants = {
  initial: {
    y: 50,
    opacity: 0,
    scale:0.9,
  },
  whileInView: {
    y: 0,
    scale:1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
      delay: 0.25,
    },
  },
  viewport: {
    once: true,
  },
};


const Hero = () =>{


  return (
  <section id='home' className={`flex md:flex-row flex-col sm:mb-8 md:mb-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] h-screen items-start`}>
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b2d1_100%)]"></div>
    <div className={`flex-1 flex justify-center items-start flex-col space-y-6 h-full`}>
  <motion.div className="grid gap-8 items-start justify-center mb-8"
   variants={Variants}
   initial="initial"
   whileInView={"whileInView"}
   viewport={{once:true}}>
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
      <button className="relative px-7 py-4 bg-neutral-800 rounded-lg leading-none flex items-center divide-x divide-gray-600" >
        <span className="flex items-center space-x-3">
        <Image src={discount} alt="discount" className='h-6 w-6' height={24} width={24}/>
          <span className="pr-6 text-gray-100">Innovate. Transform. Excel.</span>
        </span>
        <span className="pl-6 text-gradient group-hover:text-gray-100 transition duration-200">See what's new &rarr;</span>
      </button>
    </div>
  </motion.div>
      <motion.div className={'flex flex-row justify-between items-center w-full opacity-100 transition-opacity duration-500'}
      variants={Variants}
      initial="initial"
      whileInView={'whileInView'}
      viewport={{
        once:true,
      }}>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Coding your{" "}<br className='md:block hidden'
        />
        <span className='text-white'><Typewriter
          options={{      
            strings: ['Vision', 'Ideas', 'Future','Success','Experience','Dreams'],
            autoStart: true,
            loop: true,
            wrapperClassName:'text-gradient'
          }}
        />
        </span> 
        </h1>
        {/* <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div> */}
      </motion.div>

      <motion.p
  variants={Variants}
  className={`font-poppins font-normal text-gray-100 text-[18px] leading-[30.8px] max-w-[470px] mt-5 opacity-100 transition-opacity duration-500`}
  initial="initial"
  animate="whileInView"
>
  Empowering businesses to thrive in today's digital realm through our ingenious solutions is our driving force.
</motion.p>

    </div>

    {/* <motion.div className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}
    variants={Variants}
    initial="initial"
    whileInView={"whileInView"}
    viewport={{once:true}}
    >
      <Image src={hand} alt="robot" className='w-[85%] z-[5] object-contain mx-auto'
      />
      <div className='absolute z-[0] w-[50%] h-[40%] right-20 top-40 blue__gradient animate-pulse'/>
    </motion.div> */}

<div className="flex-1 flex justify-start items-start h-full max-w-[100vw]">
  {/* <MainCube /> */}
  <WorkModel />
</div>

  </section>
  )
}


export default Hero