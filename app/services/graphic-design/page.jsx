"use client";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { graphicDesignLinks, graphicDesignServices } from "../../utils/data";
import Lenis from "@studio-freight/lenis";
import Contact from "../../components/ContactPage/Contact";
import MobileAppSection from "../components/MobileAppSection";
import Platforms from "../components/Platforms";
import TheProcess from "../components/TheProcess";
import Prices from "../components/Prices";
import WhatElse from "../components/WhatElse";

const GraphicDesign = () => {

  useEffect(() => {
    const lenis = new Lenis();
    window.scrollTo(0,0)

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <Sidebar links={graphicDesignLinks} />
      <div
        id="graphic-design"
        className="min-h-screen flex items-center relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b2d1_100%)]"></div>
        <MobileAppSection title={'Graphic'} title2={'Design'} description={`Elevate your brand with stunning graphic design solutions. Our team specializes in creating visually captivating designs that leave a lasting impression. Whether it's logos, branding materials, or digital illustrations, we'll bring your vision to life with creativity and precision.`} subtitle={'Let\'s work together to craft designs that resonate with your audience and set your brand apart in a crowded digital landscape.'} image={'/webappsbg.png'} />
      </div>
      <div
        id="platforms"
        className="relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <Platforms mobilePlatforms={graphicDesignServices} title={""} title2={"Services"} description={'These are the platforms we can develop apps for. Depending on your needs  we can move forward to turning your dream app into reality.'}/>
      </div>
      <div className="clipTop w-full bg-white relative">

        <div
          id="the-process"
          className="min-h-screen relative py-[50px] md:py-[100px]"
        >
          <TheProcess />
        </div>
        <div
          id="prices"
          className="min-h-screen relative"
        >
          <Prices />
        </div>
      </div>
      <div
        id="what-else"
        className="min-h-screen relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <WhatElse />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default GraphicDesign;
