"use client";
import { useRef } from "react";
import { projects } from "../../utils/data.js";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button.jsx";
import Project from '../../components/Project.jsx'

const WorkSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      id="work"
      className="clipTop px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] bg-white relative py-[100px] overflow-hidden"
    >
      {/* <div className='absolute z-[0] w-[30%] h-[30%] rounded-full bottom-40 white__gradient'/> */}
      
      {/* <div className='absolute z-[0] w-[35%] h-[20%] left-[-20%] top-[24%] main__gradient blur-3xl'/> */}
      {/* <div className='absolute z-[0] w-[40%] h-[40%] left-[-35%] bottom-[10%] main__gradient'/>
      <div className='absolute z-[0] w-[40%] h-[40%] right-[-35%] top-[20%] main__gradient'/> */}
      {/* <div className='absolute z-[0] w-[40%] h-[40%] left-[-35%] top-[1%] turqouise__gradient'/>
      <div className='absolute z-[0] w-[40%] h-[40%] left-[-35%] bottom-[10%] turqouise__gradient'/>
      <div className='absolute z-[0] w-[40%] h-[40%] right-[-35%] top-[20%] turqouise__gradient'/> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="flex flex-col">
            <Button url={'#'} color="black">
              Our work
            </Button>
          </div>
        </div>
        <div className="w-full">
            {projects?.map((project,index)=>{
              return (
                <div key={index}>
                  <Project project={project}/>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

const Heading = ({ text, left }) => {
  const heading = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heading,
    offset: ["start end", "start center"],
  });

  const translateLeft = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const translateRight = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.h1
      ref={heading}
      className="text-3xl lg:text-7xl font-semibold lg:leading-[5rem] text-black uppercase font-poppins"
      style={{
        opacity: scrollYProgress,
        translateX: left ? translateLeft : translateRight,
      }}
    >
      {text}
    </motion.h1>
  );
};
