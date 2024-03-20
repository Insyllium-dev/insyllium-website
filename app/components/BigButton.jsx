import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai';

const BigButton = ({url,children,isBlack}) => {
  return (
    <Link href={url} className={`border rounded-full py-3 px-6 ${isBlack?'text-black bg-white/70 border-black/90':'bg-white/10 text-white'} font-medium text-base md:text-lg flex items-center gap-1 mt-4`}>{children}<AiOutlineArrowRight color={`${isBlack?'black':'white'}`} size={20}/></Link>
  )
}

export default BigButton