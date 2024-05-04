"use client";
import Image from "next/image";
import { whitelogo } from "../../public";
import Link from "next/link";
import { footerLinks, socialMedia } from "../utils/data";

const Footer = () => {

  return (
    <section
      className={`px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] bg-neutral-900 flex justify-center items-center sm:py-12 py-6 flex-col relative`}
    >
      <div
        className={`flex justify-center items-start} md:flex-row flex-col mb-8 w-full pt-12`}
      >
        <div className="flex-1 w-full flex-col sm:flex sm:flex-row sm:items-center md:items-start justify-between md:justify-start md:flex-col mr-10">
          <Link href="/">
            <Image
              src={whitelogo}
              alt="Logo"
              width={150}
              height={40}
              className="w-[150px] h-[40px] md:w-[200px] md:h-[55px] cursor-pointer object-contain"
            />
          </Link>
          <p
            className={`font-poppins font-normal text-gray-100 text-[18px] leading-[30.8px] mt-4 max-w-[310px]`}
          >
            Partner with us to unlock the full potential of technology and
            reshape the way you do business.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 z-[2]">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
              Reach Us
              
            </h4>
            <ul className="list-none mt-4">
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-100 hover:text-[#00b2d1] cursor-pointer mb-3`}
              >
                <Link href={`mailto:contact@insyllium.com`}>contact@insyllium.com</Link>
              </li>
              <li
                className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-100 hover:text-[#00b2d1] cursor-pointer`}
              >
                <Link href={`tel:+38971604221`}>+389 71 604 221</Link>
              </li>
            </ul>
          </div>
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-100 hover:text-[#00b2d1] cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-3" : "mb-0"
                    }`}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[30%] h-[30%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[100%] h-[40%] bottom-[100px] blue__gradient" /> */}

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-[18px] text-center leading-[27px] text-white">
          &copy; 2024 Insyllium. All Rights Reserved{" "}
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <Link
              key={index}
              href={social?.link}
              target="_blank"
              className={`object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            >
              {social?.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
