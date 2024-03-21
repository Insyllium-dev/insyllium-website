"use client";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Contact from "../../components/ContactPage/Contact";
import { motion,useScroll, useTransform } from 'framer-motion'
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const fadeInVariants = {
  closed:{
    y:60,
    opacity:0,
  },
  opened:(index)=>({
    y:0,
    opacity:1,
    transition:{
      delay:index,
      duration:0.6,
      ease:'easeInOut',
    }
  })
}

const WorkTemplate = ({project}) => {

  const imageRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target:imageRef,
    offset:['start end','start start']
  })

  const translate = useTransform(scrollYProgress,[0,1],[160,0])


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="h-[45vh] flex flex-col justify-between relative top-20 py-[50px] md:py-[100px] mb-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] gap-4">
       <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
       <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-20% to-cyan-300/40 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins uppercase">
          {project?.name}
        </h1>
        <Link href={project?.website} target="_blank" className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins flex items-center gap-2">Visit Website <GoArrowUpRight className="text-neutral-300" size={25}/></Link>
       </div>
        <div className="flex flex-col gap-4 md:flex-row items-start justify-between md;items-center">
          <div>
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-base md:text-lg font-poppins">
              Client
            </p>
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins">
            {project?.name}
            </p>
          </div>
          <div>
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-base md:text-lg font-poppins">
              Expertise
            </p>
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins">
            {project?.expertise}
            </p>
          </div>
          <div>
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-base md:text-lg font-poppins">
              Year
            </p>
            <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-lg md:text-xl font-poppins">
            {project?.year}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-500/80 min-h-screen w-full left-1/2 relative -translate-x-1/2 overflow-hidden">
        <motion.div ref={imageRef} className="w-full h-screen flex justify-center items-center"
        style={{translateY:translate}}
        >
          <Image
            src={project?.image}
            alt="Proejct image"
            className="w-full h-full object-fill lg:px-20 xl:px-40 2xl:px-[20rem]"
            width={1920}
            height={1080}
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-40 py-[150px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]">
        <motion.p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-xl md:text-2xl font-poppins"
        variants={fadeInVariants}
        initial="closed"
        whileInView="opened"
        viewport={{once:true,}}
        >
          About project
        </motion.p>
        <div className="space-y-8">
          <motion.p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-2xl md:text-3xl font-poppins max-w-3xl"
            variants={fadeInVariants}
            initial="closed"
            whileInView="opened"
            viewport={{once:true,}}
            custom={0.15}
          >
          {project?.aboutTitle}
          </motion.p>
          <motion.p className="font-normal text-neutral-300 text-lg font-poppins max-w-3xl"
               variants={fadeInVariants}
               initial="closed"
               whileInView="opened"
               viewport={{once:true,}}
               custom={0.30}
          >
           {project?.aboutDesc}
          </motion.p>
        </div>
      </div>
      <div className="bg-neutral-500/80 min-h-screen w-full left-1/2 relative -translate-x-1/2">
        <div className="w-full h-screen flex flex-col md:flex-row justify-between items-center lg:px-20 xl:px-40 2xl:px-[20rem]">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <Image
            src={project?.tabletImage}
            alt="Tablet image"
            className="object-contain w-full h-full scale-[1.15]"
            width={1920}
            height={1080}
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <Image
            src={project?.phoneImage}
            alt="Phone image"
            className="object-cover w-full h-2/3"
            width={1920}
            height={1080}
          />
        </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-40 py-[150px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]">
    <motion.p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-xl md:text-2xl font-poppins"
         variants={fadeInVariants}
         initial="closed"
         whileInView="opened"
         viewport={{once:true,}}
    >
        Our Mission
    </motion.p>
    <div className="space-y-8">
        <motion.p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-2xl md:text-3xl font-poppins max-w-3xl"
             variants={fadeInVariants}
             initial="closed"
             whileInView="opened"
             viewport={{once:true,}}
             custom={0.15}>
        {project?.missionTitle}
        </motion.p>
        <motion.p className="font-normal text-neutral-300 text-lg font-poppins max-w-3xl"
             variants={fadeInVariants}
             initial="closed"
             whileInView="opened"
             viewport={{once:true,}}
             custom={0.30}>
        {project?.missionDesc}
        </motion.p>
    </div>
</div>
<div className="bg-neutral-500/80 md:min-h-screen w-full left-1/2 relative -translate-x-1/2 py-[100px] md:py-0">
        <div className="w-full flex md:h-screen justify-center items-center">
        <Image
            src={project?.imageCollection}
            alt="Phone image"
            className="object-contain w-full h-full md:h-2/3"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <Contact />
      {/* <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-40 xl:gap-60 py-[150px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]">
        <p className="font-normal text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 from-30% to-cyan-300/40 text-2xl md:text-3xl font-poppins">
          Experience our top-tier custom web outsourcing services.
        </p>
      </div> */}
    </div>
  );
};

export default WorkTemplate;
