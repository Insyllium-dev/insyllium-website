'use client'

import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

const HamburgerMenu = ({onClick,black}) => {
    const [open, setOpen] = useState(false)
    const topRef = useRef(null)
    const bottomRef = useRef(null)


    const handleOpen = () =>{
        onClick()
        setOpen(!open)
    }


    useEffect(() => {
        const timeline = gsap.timeline({
            paused: true,
        });

        timeline.add(() => {
            gsap.to(topRef.current,{
                duration:0.5,
                ease:'sine.inOut',
                translateY:open?9:0,
            })
            gsap.to(bottomRef.current,{
                duration:0.5,
                ease:'sine.inOut',
                translateY:open?-9:0,
            })
          });

          timeline.add(() => {
            gsap.to(topRef.current, {
                duration: 0.5,
                ease: "sine.inOut",
                rotate: open ? '45deg' : 0,
            });
            gsap.to(bottomRef.current,{
                duration: 0.5,
                ease: "sine.inOut",
                rotate: open ? '-45deg' : 0,
            });
        });
    

            if (open) {
                timeline.play();
            } else {
                timeline.reverse();
            }

        return () => {
            timeline.kill();
        };
    }, [open]);
    

    return (
        <>
           <button className='relative h-5 w-10 outline-none z-40' onClick={handleOpen}>
                <div ref={topRef} className={`w-full absolute top-0 left-0 ${black?'bg-neutral-900':'bg-white/90'} h-[3px] origin-center`}/>
                <div ref={bottomRef} className={`w-full absolute bottom-0 left-0 ${black?'bg-neutral-900':'bg-white/90'} h-[3px] origin-center`}/>
            </button>
        </>
    )
}

export default HamburgerMenu
