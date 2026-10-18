import { BiSolidMessageAltError } from "react-icons/bi";

export default function ErrorBox({message, left}) {
  return (
    <div className={`w-60 h-28 bg-[#393e46] cus-shadow rounded-[5px] m-2 fixed top-2 ${left} flex flex-col items-center justify-around transition-all duration-100 max-md:w-52 max-md:h-24 max-md:m-1 max-sm:w-46 max-sm:h-22 max-sm:m-0`}>
        <BiSolidMessageAltError className="text-[3.5rem] text-[#6d9886] max-md:text-[3rem] max-sm:text-[2.5rem]" />
        <p className='text-[0.9rem] text-center mx-4 text-[#f7f7f7] max-md:text-[0.8rem] max-sm:text-[0.75rem]'>{message}</p>
    </div>
  )
}
