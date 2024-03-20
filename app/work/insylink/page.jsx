"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import WorkTemplate from '../../../app/components/Work/WorkTemplate'
import { projectTemplates } from "../../utils/data";

const InsylinkPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <WorkTemplate project={projectTemplates[1]}/>
    </div>
  );
};

export default InsylinkPage;