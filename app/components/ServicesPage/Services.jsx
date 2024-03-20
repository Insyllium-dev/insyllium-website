import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { services } from '../../utils/data'
import Service from '../../components/ui/Service'


const Services = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] py-[100px]">
        <div className="flex flex-col justify-between w-full gap-12">
            <Button url={'#'}>Our services</Button>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <h1 className="text-white font-semibold text-5xl lg:text-6xl xl:text-7xl 2xl:text-[84px] font-poppins">Certified <span className="bg-clip-text text-transparent bg-gradient-to-tl from-orange-300 from-20% to-cyan-500">Excellence</span></h1>
                <div className="flex flex-col gap-6 md:gap-8">
                    <p className="text-white/70 font-light text-base font-poppins max-w-lg">
                    We offer a range of services to help you succeed in your digital endeavors. Learn more about each of our offerings below.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href={'/services'} className="text-orange-500 font-medium font-poppins text-base md:text-lg flex items-center gap-2">View All Services <AiOutlineArrowRight className='text-orange-500' size={18}/></Link>
                        <Link href={'/contact'} className="text-orange-500 font-medium font-poppins text-base md:text-lg flex items-center gap-2">Contact Us <AiOutlineArrowRight className='text-orange-500' size={18}/></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center sm:justify-between">
                {services?.map((service,index)=>(
                    <Service key={index} service={service}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services