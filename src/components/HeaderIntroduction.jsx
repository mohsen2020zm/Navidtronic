import { useNavigate } from 'react-router-dom'
import electricBoard from '../assets/images/electric-board1.png'

export default function HeaderIntroduction() {

    const navigate = useNavigate()

  return (
    <div className="flex items-center justify-around flex-row-reverse max-md:justify-between max-sm:flex-col max-sm:pb-6.5">
        <img src={electricBoard} alt="electronic-board" className='max-w-80 max-lg:max-w-68 max-md:max-w-52 max-sm:max-w-58' />
        <div className="max-w-84 max-lg:max-w-72 max-md:max-w-52 max-sm:max-w-64 max-sm:flex max-sm:flex-col max-sm:items-center">
            <h1 className='text-[#f7f7f7] text-[2rem] font-semibold my-4 max-lg:text-[1.7rem] max-lg:mb-[0.8rem] max-md:text-[1.25rem] max-sm:text-[1.5rem] max-sm:text-center max-sm:mt-0'>نویدترونیک<br/> محصولات الکترونیکی <br/>برای هر ایده ای</h1>
            <button className='w-34 h-10 border-none bg-[#6d9886] rounded-[5px] text-[1rem] text-[#f7f7f7] cursor-pointer max-lg:w-30 max-lg:h-9 max-lg:text-[0.9rem] max-md:w-26 max-md:h-8 max-md:text-[0.75rem] max-sm:w-28 max-sm:h-8.8 max-sm:text-[0.8rem]' onClick={() => navigate('/products')}>مشاهده محصولات</button>
        </div>
    </div>
  )
}
