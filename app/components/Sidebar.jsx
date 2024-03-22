import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Sidebar = ({ links }) => {
  const [activeLink, setActiveLink] = useState('Mobile Apps');

  useEffect(() => {
    const handleScroll = () => {

      links.forEach((link, index) => {
        const section = document.querySelector(link.url);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top-100 <= 0) {
            setActiveLink(link.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]); 

  return (
    <div className="2xl:flex flex-col gap-4 fixed top-1/2 -translate-y-1/2 right-8 z-[2] hidden w-[200px] mix-blend-difference">
      {links?.map((link, index) => (
        <Link href={link.url} key={index} className="flex items-center gap-2">
          <p className={`${activeLink === link.name ? 'font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80' : 'text-white'} text-lg md:text-xl font-poppins`}>{link.name}</p>
          <div className={`h-1 ${activeLink === link.name ? 'w-6 bg-gradient-to-br from-cyan-300/70 to-orange-300/80' : 'bg-white w-3'}`} />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
