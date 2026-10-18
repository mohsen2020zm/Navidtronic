import { useNavigate } from 'react-router-dom'
import { GoAlertFill } from "react-icons/go";


export default function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="container">
        <div className="max-w-170 mx-auto h-86 flex items-center justify-around my-8 bg-[#393e46] rounded-[15px] max-lg:max-w-150 max-lg:h-80 max-md:flex-col-reverse max-md:justify-between max-md:my-4 max-md:h-112 max-md:max-w-84 max-sm:h-100 max-sm:max-w-78">
          <div className="max-w-50 max-md:mb-8 max-md:flex max-md:flex-col max-md:items-center">
              <p className='text-[1.8rem] font-black text-[#f7f7f7] py-4 max-md:text-center max-lg:text-[1.7rem] max-md:text-[1.5rem] max-sm:text-[1.3rem]'>404<br/>صفحه مورد نظر شما پیدا نشد</p>
              <button className="w-42 h-10 rounded-[5px] bg-[#6d9886] text-[1rem] text-[#f7f7f7] cursor-pointer max-lg:w-38 max-lg:h-9 max-lg:text-[0.9rem] max-md:w-37 max-md:h-8.5 max-md:text-[0.85rem] max-sm:w-34 max-sm:h-8 max-sm:text-[0.8rem]" onClick={() => navigate('/')}>بازگشت به صفحه اصلی</button>
          </div>
          <GoAlertFill className='text-[16rem] text-[#6d9886] max-lg:text-[15rem] max-md:mt-8 max-md:text-[13rem] max-sm:text-[12rem]' />
        </div>
    </div>
  )
}
