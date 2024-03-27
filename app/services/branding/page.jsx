"use client";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { brandingServices, gdProcessFeatures, webSidebarLinks } from "../../utils/data";
import Lenis from "@studio-freight/lenis";
import Contact from "../../components/ContactPage/Contact";
import MobileAppSection from "../components/MobileAppSection";
import Platforms from "../components/Platforms";
import TheProcess from "../components/TheProcess";
import Prices from "../components/Prices";
import WhatElse from "../components/WhatElse";

const Branding = () => {
  useEffect(() => {
    const lenis = new Lenis();
    window.scrollTo(0, 0);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <Sidebar links={webSidebarLinks} />
      <div
        id="web-apps"
        className="min-h-screen flex items-center relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b2d1_100%)]"></div>
        <MobileAppSection
          title={"Branding"}
          title2={"Services"}
          description={`Elevate your brand's online presence with our branding services. Our team is poised to be your trusted partner every step of the way, providing expert guidance and staying abreast of the latest industry trends.`}
          subtitle={`Let's craft a compelling brand narrative and visual identity that captivates and sets you apart.`}
          image={"/brandingBG.png"}
        />
      </div>
      <div
        id="platforms"
        className="relative py-[50px] md:py-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem]"
      >
        <Platforms
          mobilePlatforms={brandingServices}
          title={""}
          title2={"Services"}
          description={
            "These are the platforms we can develop apps for. Depending on your needs  we can move forward to turning your dream app into reality."
          }
        />
      </div>
      <div className="clipTop w-full bg-white relative">
        <div
          id="the-process"
          className="min-h-screen relative py-[50px] md:py-[100px]"
        >
          <TheProcess section={'branding'} processFeatures={gdProcessFeatures}/>
        </div>
        <div id="prices" className="min-h-screen relative">
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

export default Branding;
