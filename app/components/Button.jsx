import Link from 'next/link'
import { GoArrowDownRight } from "react-icons/go";

const Button = ({url,children,color}) => {
  return ( 
        <Link href={url} className={`${color?`text-[${color}]`:'text-white'} flex items-center gap-3 border ${color?'border-black':''} rounded-full px-3 w-fit uppercase text-lg font-light pointer-events-none cursor-default`}>
          <GoArrowDownRight color={`${color?`${color}`:'white'}`} size={20}/>
          {children}
        </Link>
  )
}

export default Button