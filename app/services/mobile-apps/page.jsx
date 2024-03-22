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

const MobileApps = () => {
  const [activeLink, setActiveLink] = useState("Mobile Apps");

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const mobileAppsDiv = document.getElementById("mobile-apps");
      const platformsDiv = document.getElementById("platforms");
      const theProcessDiv = document.getElementById("the-process");
      const pricesDiv = document.getElementById("prices");
      const whatElseDiv = document.getElementById("what-else");
      const contactDiv = document.getElementById("contact");

      const scrollPosition = window.scrollY+100;
      const mobileAppsOffset = mobileAppsDiv.offsetTop;
      const platformsOffset = platformsDiv.offsetTop;
      const theProcessOffset = theProcessDiv.offsetTop;
      const pricesOffset = pricesDiv.offsetTop;
      const whatElseOffset = whatElseDiv.offsetTop;
      const contactOffset = contactDiv.offsetTop;

      if (scrollPosition < platformsOffset) {
        setActiveLink("Mobile Apps");
      } else if (
        scrollPosition >= platformsOffset &&
        scrollPosition < theProcessOffset
      ) {
        setActiveLink("Platforms");
      } else if (
        scrollPosition >= theProcessOffset &&
        scrollPosition < pricesOffset
      ) {
        setActiveLink("The process");
      } else if (
        scrollPosition >= pricesOffset &&
        scrollPosition < whatElseOffset
      ) {
        setActiveLink("Prices");
      } else if (
        scrollPosition >= whatElseOffset &&
        scrollPosition < contactOffset
      ) {
        setActiveLink("What else?");
      } else if (scrollPosition >= contactOffset) {
        setActiveLink("Contact");
      } else {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      ></div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default MobileApps;
