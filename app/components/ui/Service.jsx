import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Service = ({ service }) => {
  return (
   <div className="relative">
    <Image src={'/serviceBG.svg'} width={288} height={320} alt='servicebg' className/>
      <p className="text-[#1a1a1a] font-medium font-poppins text-base sm:text-lg absolute bottom-4 left-5">
        {service?.name}
        </p>
    <Link href={service?.url} className="absolute bottom-0 right-0 h-[4.5rem] w-[4.5rem] rounded-tl-[2.8rem] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl bg-[#e5e5e5] flex justify-center items-center hover:bg-orange-500 transition-colors duration-300">
        <GoArrowUpRight color='#1a1a1a' size={30}/>
    </Link>
   </div>
  );
};

export default Service;
