'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const PreLoader = () => {
  const counterRef = useRef(null);
  const barRefs = useRef([]);
  const bars = Array.from({ length: 5 }, (_, index) => index);
  const [hidden,setHidden] = useState(false)

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 2
    });

    return animation.stop;
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      paused: true,
    });
  
    document.body.style.overflow = "hidden";

    timeline.add(() => {
        gsap.to(barRefs.current, {
          duration: 0.8,
          height:0,
          stagger: 0.1,
          ease: "power3.out",
        });
        gsap.to(counterRef.current,{
            duration:0.5,
            opacity:0,
            ease:"power3.out",
            onComplete: () => {
              setTimeout(() => {
              document.body.style.overflow = "auto";
              setHidden(true);
              }, 1000);
            },
        })
      });

    const onUpdate = () => {
      if (rounded.get() === 100) {
        timeline.play();
        
      }
    };

    const animation = animate(count, 100, {
      duration: 2,
      onUpdate,
    });

    return () => {
      animation.stop();
      timeline.kill();
    };
  }, [count, rounded]);



  return (
    <div className={`fixed flex w-[100vw] h-[100vh] z-50 ${hidden?'hidden':''}`}>
      <div className="fixed w-full h-full flex justify-end items-end z-[1000] text-[15vw] text-white font-kodeMono">
      <motion.h1 ref={counterRef}
      className="mr-20"
      >
        {rounded}
      </motion.h1>
      </div>
      {bars?.map((bar, index) => (
        <div
          ref={(el) => (barRefs.current[index] = el)}
          key={bar}
          className="w-[20vw] h-[105vh] bg-[#1a1a1a]"
        />
      ))}
    </div>
  );
};

export default PreLoader;
