import Image from "next/image"

const Platforms = ({mobilePlatforms,title,title2,description}) => {
  return (
    <div className="flex flex-col justify-between items-center">
        <div className="space-y-12 flex flex-col items-center">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center">{title} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300/70 to-orange-300/80">{title2}</span></h1>
        <p className="text-white font-normal text-lg max-w-2xl text-center"> {description}</p>
        <div className="flex items-center justify-center flex-wrap gap-12 py-[100px]">
            {mobilePlatforms?.map((platform,index)=>(
                <Platform key={index} platform={platform} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Platforms

const Platform = ({platform}) => {
    
    return (
        <div className="h-max min-h-[375px] w-80 rounded-3xl relative py-6 px-4 group border-2 my-4">
            <Image src={platform?.icon} className="absolute -top-[13%] left-1/2 -translate-x-1/2 object-fill h-[80px] w-[80px]" width={80} height={80}/>
            <div className="flex flex-col gap-10 pt-14 p-4 items-center">
                <p className="font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-cyan-300/70 to-orange-300/80 text-white text-xl font-poppins text-center">{platform?.name}</p>
                <p className="font-normal text-white/80 text-base md:text-lg font-poppins text-center">{platform?.desc}</p>
            </div>
        </div>
    )
}