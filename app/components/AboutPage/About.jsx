import { AiOutlineArrowDown } from "react-icons/ai";
import Button from "../Button";
import Word from "../Word";
import { achievemnts } from "../../utils/data";

const About = () => {

    return (
        <div className="py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]">
            <div className="flex flex-col gap-12 md:gap-20 items-start">
                <Button url="#">About us</Button>
                <div className="flex justify-between">
                    <Word value={'At Insyllium, we are not just software developers, we are visionaries, architects, and partners in your digital journey. With a foundation built on innovation, expertise, and a relentless pursuit of excellence, we transcend the realm of conventional software development.'}/>
                    <div className='relative hidden md:block'>
                        <button className="w-24 h-24 rounded-full border flex justify-center items-center">
                            <AiOutlineArrowDown color="white" size={35}/>
                        </button>
                    </div>
                </div>
                <hr className="w-full"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative ">
                    {/* <div className="absolute left-0 right-20 md:right-80 m-auto top-0 bottom-0 bg-[#00b2d1] h-40 w-40 md:h-80 md:w-80 rounded-full z-[-1] blur-3xl"/>
                    <div className="absolute m-auto left-20 md:left-80 right-0 top-0 bottom-0 bg-orange-500 h-40 w-40 md:h-80 md:w-80 rounded-full z-[-1] blur-3xl"/> */}
                    {achievemnts?.map((achievement,index)=>(
                        <div key={index} className="flex flex-col gap-4 justify-center items-center">
                            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl font-poppins">
                                {achievement?.title}
                            </h1>
                            <p className="text-white/80 font-light text-base md:text-lg font-poppins">
                                {achievement?.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
