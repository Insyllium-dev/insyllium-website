import { extraFeatures } from "../../utils/data";

const WhatElse = () => {
  return (
    <div className="min-h-screen py-[100px]">
      <div className="flex flex-col justify-between items-center gap-20">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center">
            What{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80">
              Else
            </span>
          </h1>
          <p className="text-white font-normal text-lg max-w-2xl text-center">
          Below are some listed micro-services we can offer while discussing a project, or if you need consulting with your existing project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-12">
            {extraFeatures?.map((feature,index)=>(
              <div key={index} className="flex items-baseline gap-4 justify">
                  <div className={`rounded-full h-4 w-4 min-w-4 min-h-4 ${index%2==0?'bg-cyan-400':'bg-orange-400'}`}/>
                  <div className="flex flex-col gap-1">
                      <p className="font-poppins font-medium text-lg md:text-xl text-white">{feature?.title}</p>
                      <p className="font-poppins font-normal text-base md:text-lg text-white/70">{feature?.description}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhatElse;
