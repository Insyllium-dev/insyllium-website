import Image from "next/image"
import BigButton from "./BigButton"
import dynamic from 'next/dynamic';
const Laptop = dynamic(() => import('./Models/Laptop'));

const Project = ({project}) => {
  return (
    <div className="my-[100px] relative md:pt-[100px]">
        <div className="flex flex-col justify-between items-center gap-12 min-h-screen">
            <div className="relative">
            <div className='absolute z-[0] w-[300px] h-[300px] m-auto top-0 right-0 left-0 bottom-0 main__gradient blur-3xl hidden lg:block'/>
              {/* <Image alt="project image" src={project.image} width={400} height={400} className="absolute m-auto top-0 left-0 right-0 bottom-0 rounded-3xl hidden lg:block object-cover"/> */}
              <div className="hidden lg:block -translate-y-[200px] translate-x-[70px]">
              <Laptop />
              </div>

            <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-300 text-5xl md:text-6xl lg:text-[120px] xl:text-[140px] 2xl:text-[170px] whitespace-nowrap trackign-wider text-center max-w-3xl">{project?.name}</h1>
            </div>
            {/* <Image alt="project image" src={project.image} width={400} height={400} className="rounded-3xl block lg:hidden object-cover"/> */}
            <div className="flex justify-center items-start lg:hidden w-full h-full -translate-y-[230px]">
            <Laptop />
            </div>
           <div className="flex flex-col gap-10">
           <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center max-w-3xl font-poppins">
              "{project?.description}"
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {project?.tech?.map((tech,index)=>(
                  <div key={index} className="px-4 rounded-full border border-black flex items-center justify-center gap-2 ">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"/>
                    <p className="font-poppins text-base sm:text-lg font-normal text-black">{tech}</p>
                  </div>
                ))}
            </div>
           </div>
            <BigButton url={project?.url} isBlack={true}>
                View project
            </BigButton>
            <hr className={`h-1 bg-gradient-to-r from-neutral-600/50 via-neutral-700/50 to-neutral-600/50 w-full ${project?.name=='Lans-Gr'&&'hidden'}`}/>
        </div>
    </div>
  )
}

export default Project