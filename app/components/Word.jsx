'use client'
import React,{ useRef } from "react"
import { useScroll,motion, useTransform } from "framer-motion"

const Word = ({value}) => {
    const element= useRef(null)
    const { scrollYProgress } = useScroll({
        target:element,
        offset:['center end', 'center 0.15']
    })

    const words = value.split(" ");

  return (
    <p ref={element} className={`text-white mix-blend-difference flex flex-wrap leading-[1.1] text-3xl w-full md:max-w-[70%] items-center justify-start font-kameron font-semibold sm:text-5xl lg:text-6xl xl:text-7xl`}>
        {words?.map((word,i)=>{
            const start = i/ words.length;
            const end = start + 1/words.length
            return <WordItem range={[start,end]} progress={scrollYProgress} key={i}>{word}</WordItem>
                
        })}
    </p>
  )
}

const WordItem = ({children,range,progress}) => {
    const characters = children.split("")
    const amount = range[1] - range[0]
    const step = amount/children.length

    return (
        <span className="mr-2 relative">
            {characters.map((character,i)=>{
                const start = range[0] + (step*i)
                const end = range[0] + (step*(i+1))
                return <Character key={i} range={[start,end]} progress={progress} >{character}</Character>
            })}
        </span>
    )
}

export default Word

const Character = ({children,range,progress}) => {
    const opacity = useTransform(progress,range,[0,1])
    return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
        <motion.span style={{opacity}}>
            {children}
        </motion.span>
        </span>
    )
}