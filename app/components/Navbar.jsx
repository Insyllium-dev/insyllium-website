"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { whitelogo, darklogo } from "../../public";
import { motion } from "framer-motion";
import { socialMediaNavbar } from "../utils/data";
import { usePathname } from "next/navigation";


const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Work",
    url: "/#work",
  },
  {
    title: "Services",
    url: "/#process",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [scrolledWhite, setScrolledWhite] = useState(false);

  const pathName = usePathname()

  
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);
    // setScrolledWhite(scrollY > 2.5 * window.innerHeight);
    if(scrollY > 2.5 * window.innerHeight && scrollY < 6.4 * window.innerHeight && pathName==='/'){
      setScrolledWhite(true)
    }else {
      setScrolledWhite(false)
    }
  };

  
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrolledWhite)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen((prev)=>!prev);
    console.log(isOpen)
  };

  const tl = useRef()

  useGSAP(()=>{
    gsap.set(".link-item-holder",{y:75})

    tl.current = gsap.timeline({paused:true})
    .to(backgroundRef.current,{
      duration:1.25,
      clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
      ease:"power4.inOut"
    })
    .to('.link-item-holder',{
      y:0,
      duration:1,
      stagger:0.15,
      ease:'power4.inOut',
      delay:-0.75,
    })


  },{scope:backgroundRef})
  

  useEffect(() => {

    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "auto";
    }

  }, [isOpen]);


  return (
    <motion.div className={`h-20 flex items-center w-full z-[999] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] top-0  left-0 fixed ${scrolled?'backdrop-blur-md border-b border-b-white/10':''}`}
  >
      <div
        ref={backgroundRef}
        className="menu-overlay h-[100vh] w-full bg-neutral-800 top-0 left-0 fixed flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] py-6 z-40"
      >
        <div className={`flex justify-between items-start flex-col w-full gap-4 h-full`}>
        <Link href={`/`} className="z-40">
       <Image
          alt="logo"
          src={whitelogo}
          height={30}
          width={"auto"}
        />
        </Link>
          <div className="flex flex-col items-start">
            {links?.map((link, index) => (
            <div className="menu-link-item" key={index}>
            <div className="link-item-holder">
              <Link
              href={link?.url}
              className={`text-white text-5xl md:text-[80px] font-poppins uppercase font-medium`}
              >
                {link?.title}
              </Link>
            </div>
            </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-end mb-40 sm:mb-0">
              <div className="flex flex-col gap-1">
                  {socialMediaNavbar?.map((social,index)=>(
                    <Link key={index} className="flex items-center" href={social?.url} target="_blank">
                        <p className="text-white text-base md:text-lg lg:text-xl font-poppins uppercase font-normal">{social.title}</p>
                        {social?.icon}
                    </Link>
                  ))}
              </div>
              <div className="flex flex-col gap-1 items-end">
                <Link href={"tel:+38971604221"} className="text-white text-base md:text-lg lg:text-xl font-poppins uppercase font-normal">+389 71 604 221</Link>
                <Link href="mailto:info@insyllium.com" className="text-white text-base md:text-lg lg:text-xl font-poppins uppercase font-normal">info@insyllium.com</Link>
              </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
       <Link href={`/`} className="z-40">
       <Image
          alt="logo"
          src={scrolledWhite&&!isOpen?darklogo:whitelogo}
          height={30}
          width={"auto"}
        />
        </Link>
        <div className="items-center gap-4 hidden md:flex ">
            {links?.map((link, index) => (
              <Link
                key={index}
                href={link?.url}
                className={`text-lg ${scrolledWhite?'text-neutral-900':'text-white/90'} font-poppins flex items-center gap-4 hover:text-[#00b2d1] transition-colors ${link?.title==='Contact'&&'hidden'}`}
              >
                {link?.title}
                <div className={`${links?.length==index+2&&'hidden'} ${scrolledWhite?'bg-neutral-900':'bg-white'} h-1 w-1 rounded-full`}/>
              </Link>
            ))}
          </div>
          <HamburgerMenu onClick={handleOpen} black={scrolledWhite}/>
            {/* <button onClick={handleOpen} className='font-poppins font-medium text-lg text-white z-40'>MENU</button> */}
      </div>
    </motion.div>
  );
};

export default Navbar;
