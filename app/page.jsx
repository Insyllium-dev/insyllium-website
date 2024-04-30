'use client'
import { useEffect } from "react";
import HeroPage from "./components/HeroPage/HeroPage";
import Lenis from "@studio-freight/lenis";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('../app/components/AboutPage/About'));
const WorkSection = dynamic(() => import("./components/Work/WorkSection"));
const Services = dynamic(() => import('./components/ServicesPage/Services'));
const Contact = dynamic(() => import('./components/ContactPage/Contact'));



export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <section >
      <HeroPage />
      <About />
      <WorkSection />
      <Services />
      <Contact />
    </section>
  );
}
