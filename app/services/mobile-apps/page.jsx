"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { sidebarLinks } from "../../utils/data";
import Lenis from "@studio-freight/lenis";
import Contact from "../../components/ContactPage/Contact";
import MobileAppSection from "../components/MobileAppSection";
import Platforms from "../components/Platforms";
import TheProcess from "../components/TheProcess";
import Prices from "../components/Prices";
import WhatElse from "../components/WhatElse";

const MobileApps = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <Sidebar links={sidebarLinks} />
      <div
        id="mobile-apps"
        className="min-h-screen flex items-center relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b2d1_100%)]"></div>
        <MobileAppSection />
      </div>
      <div
        id="platforms"
        className="relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <Platforms />
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

export default MobileApps;
