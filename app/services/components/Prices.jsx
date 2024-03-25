import Link from "next/link";
import { pricingPlans } from "../../utils/data";

const Prices = () => {
  return (
    <div className="min-h-screen w-full relative py-[100px]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="flex flex-col justify-between items-start px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] gap-16">
        <div className="flex flex-col gap-6 items-start">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black text-start">
            Plans &{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80">
              Pricing
            </span>
          </h1>
          <p className="text-black font-normal text-lg max-w-xl text-start">
            Whether your time-saving automation needs are large or small, we&apos;re
            here to help you scale.
          </p>
        </div>
        <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-cyan-300/60 to-orange-300/60 p-12 space-y-6 relative flex flex-col justify-between">
          <div className="flex md:justify-start justify-center items-center flex-wrap gap-12 md:gap-0">
          {pricingPlans?.map((plan, index) => (
            <div key={index} className={`${index==2&&'hidden'} flex flex-col gap-2 w-full md:w-[33.3%]`}>
              <p className="font-poppins text-black text-3xl font-bold">${plan?.price}</p>
              <p className="font-poppins text-black text-3xl font-medium">{plan?.name}</p>
              <p className="font-poppins text-black text-lg font-normal">{plan?.description}</p>
              <div className="flex flex-col gap-2 mt-2">
                 {plan?.features?.map((feature,index)=>(
                   <div key={index} className="flex items-center gap-4">
                      <div className="rounded-full h-4 w-4 bg-cyan-400"/>
                      <p className="text-neutral-800/90 font-poppins font-normal max-w-[250px]">{feature}</p>
                   </div>
                 ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-4 bg-[#171717] rounded-3xl p-8 2xl:absolute 2xl:right-12 2xl:bottom-12">
              <p className="font-poppins text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80">${pricingPlans[2]?.price}</p>
              <p className="font-poppins text-white text-2xl font-medium">{pricingPlans[2]?.name}</p>
              <p className="font-poppins text-white/90 text-lg font-normal">{pricingPlans[2]?.description}</p>
              <div className="flex flex-col gap-2 mt-2">
                 {pricingPlans[2]?.features?.map((feature,index)=>(
                   <div key={index} className="flex items-center gap-4">
                      <div className="rounded-full h-4 w-4 bg-orange-400"/>
                      <p className="text-neutral-300/90 font-poppins font-normal max-w-[250px]">{feature}</p>
                   </div>
                 ))}
              </div>
              <Link href={'#contact'} className="text-neutral-200/90 font-poppins text-lg font-normal text-right">Book a call now</Link>
            </div>
          </div>
        <p className="text-neutral-800 font-medium font-poppins text-lg">Note: <span className="text-[#474E4B]/60">Anything added after agreement will be added on top of the initial price.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
