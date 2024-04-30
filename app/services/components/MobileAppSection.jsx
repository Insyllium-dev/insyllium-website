"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const MobileAppSection = ({ title, title2, description, subtitle, image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 jc md:justify-between items-center py-20">
      <div className="flex flex-col gap-12 w-full md:w-1/2">
        <motion.h1
          className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white max-w-xl title "
          variants={fadeUp}
          initial="closed"
          whileInView={"opened"}
          viewport={{ once: true }}
        >
          {title}{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80 max-w-xl">
            {title2}
          </span>
        </motion.h1>
        <div className="space-y-6">
          <motion.p
            className="text-white font-normal text-lg max-w-xl subtitle"
            variants={fadeUp}
            initial="closed"
            whileInView={"opened"}
            viewport={{ once: true }}
            custom={0.5}
          >
            {description}{" "}
          </motion.p>
          <motion.p
            className="bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80 font-normal text-lg text-transparent max-w-xl button"
            variants={fadeUp}
            initial="closed"
            viewport={{ once: true }}
            whileInView={"opened"}
            custom={1}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
      <motion.div
        className="w-full md:w-1/2"
        variants={fadeUp}
        initial="closed"
        whileInView={"opened"}
        viewport={{ once: true }}
      >
        <Image
          alt="Mobile app image"
          src={image}
          width={1920}
          height={1080}
          className="object-contain md:scale-[1.2] lg:scale-[1.35]"
        />
      </motion.div>
    </div>
  );
};

export default MobileAppSection;
