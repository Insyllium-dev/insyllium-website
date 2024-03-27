import Image from "next/image";

const processes = ['Requirement Gathering','Planning and Design','Development','Testing','Deployment','Support (optional)','Optimization (optional)']

const processes2 = ['Discovery and understanding','Ideation and brainstorming','Design development','Execution and Production','Evaluation and Iteration']

const TheProcess = ({section,processFeatures}) => {
  return (
    <div className="min-h-screen  w-full relative py-[50px] md:py-[100px]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="flex flex-col justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] gap-20">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black text-center">
            The{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80">
              Process
            </span>
          </h1>
          <p className="text-black font-normal text-lg max-w-2xl text-center">
            This is the process we follow to conceptualize, design, develop,
            test, and deploy high-quality mobile applications tailored to
            clients needs.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-8 justify-center items-center xxl:hidden">
          {section=='graphic-design'||section=='branding'?processes2?.map((process,index)=>(
            <div key={index} className="relative w-[250px] h-[250px]">
              <Image src={'/processBG.svg'} width={250} height={250} className="object-contain absolute" alt="bg"/>
              <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{process}</p>
            </div>
          )):
          processes?.map((process,index)=>(
            <div key={index} className="relative w-[250px] h-[250px]">
              <Image src={'/processBG.svg'} width={250} height={250} className="object-contain absolute" alt="bg"/>
              <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">{process}</p>
            </div>
          ))}
        </div>
      {section=='graphic-design'||section=='branding'?
        (
          <div className="w-full relative py-40 h-max hidden xxl:block">
          <div className="absolute flex items-center justify-center top-[120px] left-0 w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">{processes2[0]}</p>
          </div>
           <div className="absolute flex items-center justify-center top-[200px] left-[230px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">{processes2[1]}</p>
          </div>
          <div className="absolute flex items-center justify-center top-[40px] left-[415px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">{processes2[2]}</p>
          </div>
          <div className="absolute flex items-center justify-center top-[125px] right-[377px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">{processes2[3]}</p>
          </div>
          <div className="absolute flex items-center justify-center top-[215px] right-[150px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBGactive.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">{processes2[4]}</p>
          </div>
      </div>
        ) :
        (
          <div className="w-full relative py-40 h-max hidden xxl:block">
          <div className="absolute flex items-center justify-center top-0 left-0 w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Requirement Gathering</p>
          </div>
          <div className="absolute flex items-center justify-center top-[235px] left-[60px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Planning and Design</p>
          </div>
          <div className="absolute flex items-center justify-center top-[320px] left-[290px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Development</p>
          </div>
          <div className="absolute flex items-center justify-center top-[160px] left-[475px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Testing</p>
          </div>
          <div className="absolute flex items-center justify-center top-0 right-[360px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBGactive.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Deployment</p>
          </div>
          <div className="absolute flex items-center justify-center top-[80px] right-[125px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Support <br/> <span className="font-normal text-lg md:text-xl">{`(optional)`}</span></p>
          </div>
          <div className="absolute flex items-center justify-center top-[320px] right-[70px] w-[250px] h-[250px]">
          <Image width={250} height={250} src={'/processBG.svg'} className="absolute object-contain" alt="bg"/>
          <p className="font-semibold text-xl md:text-2xl text-center text-white font-poppins z-10">Optimization <br/> <span className="font-normal text-lg md:text-xl">{`(optional)`}</span></p>
          </div>
      </div>
        )
       }
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-12 pt-80">
            {processFeatures?.map((feature,index)=>(
              <div key={index} className="flex items-baseline gap-4 justify">
                  <div className={`rounded-full h-4 w-4 min-w-4 min-h-4 ${index%2==0?'bg-cyan-400':'bg-orange-400'}`}/>
                  <div className="flex flex-col gap-1">
                      <p className="font-poppins font-medium text-lg md:text-xl text-black">{feature?.title}</p>
                      <p className="font-poppins font-normal text-base md:text-lg text-neutral-800/70">{feature?.description}</p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TheProcess;
