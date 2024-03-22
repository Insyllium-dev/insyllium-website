import Image from "next/image"

const MobileAppSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
        <div className="flex flex-col gap-12 w-full md:w-1/2">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white max-w-xl">Mobile <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80 max-w-xl">Apps</span></h1>
           <div className="space-y-6">
           <p className="text-white font-normal text-base sm:text-lg max-w-xl">Get ahead in the mobile world with our app development services. We'll help you from start to finish. Count on us to meet your needs and advise you on what's trendy. </p>
            <p className="bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80 font-normal text-base sm:text-lg text-transparent max-w-xl">Let's turn your ideas into a sleek app that goes wherever you do.</p>
           </div>
        </div>
        <div className="w-full md:w-1/2">
            <Image alt="Mobile app image" src={'/hakbusphone.png'} width={1920} height={1080} className="object-contain"/>
        </div>
    </div>
  )
}

export default MobileAppSection