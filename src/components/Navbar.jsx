import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { RiShoppingBasketFill } from "react-icons/ri";

export default function Navbar() {
  const [menuStyles, setMenuStyles] = useState({container: '-right-40', links: 'max-md:right-[-11rem]', background: 'hidden'})
  const [search, setSearch] = useState('')

  const navigate = useNavigate()
  const locationInfo = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setMenuStyles({container: '-right-40', links: 'max-md:right-[-11rem]', background: 'hidden'})
    locationInfo.pathname != '/products' && setSearch('')
  },[locationInfo.pathname])

  const onSearch = () => {
    setSearchParams({q: search})
    if(locationInfo.pathname != '/products'){
      navigate(`/products/?q=${search}`)
    }
    setSearch(search)
  }
  
  return (
    <>
        <aside className={`w-40 h-screen bg-[#393e46] fixed ${menuStyles.container} z-20 transition-all duration-200 max-sm:w-36`}></aside>
        <div className={`w-full h-screen fixed top-0 right-0 z-10 bg-[#00000065] ${menuStyles.background}`} onClick={() => setMenuStyles({container: '-right-40', links: 'max-md:right-[-11rem]', background: 'hidden'})}></div>
        <nav className='h-14 max-w-full flex justify-between items-center py-2 max-md:h-12 max-sm:h-11'>
            <div className="w-7 h-7 cursor-pointer hidden [&>svg]:text-[1.75rem] [&>svg]:text-[#f7f7f7] max-md:block max-sm:w-[1.6rem] max-sm:h-[1.6rem] max-sm:[&>svg]:text-[1.6rem]" onClick={() => setMenuStyles({container: 'right-0', links: 'max-md:right-4', background: 'block'})}>
              <TiThMenu />
            </div>
            <ul className={`w-66 flex justify-between items-center transition-all duration-200 [&>a]:transition-all [&>a]:duration-200 text-[#f7f7f7] [&>a]:text-[1.2rem] [&>a]:hover:text-[#6d9886] max-md:w-32 max-md:items-start max-md:flex-col max-md:fixed ${menuStyles.links} max-md:top-4 max-md:z-30 max-md:[&>a]:mb-4 max-md:[&>a]:text-[1.1rem] max-sm:[&>a]:text-[1rem]`}>
                <Link to='/'>صفحه اصلی</Link>
                <Link to='/products'>محصولات</Link>
                <Link to='/about'>درباره ما</Link>
            </ul>
            <div className="flex items-center justify-between">
              <div className="w-58 h-[1.8rem] flex items-center justify-between flex-row-reverse rounded-[5px] bg-[#f7f7f7] max-lg:w-54 max-md:w-48 max-md:h-[1.65rem] max-sm:w-40 max-sm:h-6">
                <div className="w-8 h-[1.8rem] float-left flex items-center justify-center cursor-pointer [&>svg]:text-[1.5rem] [&>svg]:text-[#393e46] max-md:w-[1.85rem] max-md:h-[1.65rem] max-md:[&>svg]:text-[1.35rem] max-sm:w-[1.8rem] max-sm:h-[1.6rem] max-sm:[&>svg]:text-[1.2rem]" onClick={onSearch}>
                  <IoSearchSharp />
                </div>
                <input
                 type="text" 
                 placeholder='جست و جوی محصولات...' 
                 className='w-50 h-[1.8rem] border-none rounded-[5px] bg-[#f7f7f7] pr-2 text-[0.9rem] max-lg:w-46 max-md:w-40 max-md:h-[1.65rem] max-md:text-[0.75rem] max-sm:w-32 max-sm:h-6 max-sm:text-[0.6rem]' 
                 onChange={event => setSearch(event.target.value)} 
                 onKeyUp={event => event.key == 'Enter' && onSearch()}
                 value={search}/>
              </div>
              <div className="w-[1.8rem] h-[1.8rem] cursor-pointer mx-2 [&>svg]:text-[1.8rem] [&>svg]:text-[#f7f7f7] max-md:w-[1.65rem] max-md:h-[1.65rem] max-md:[&>svg]:text-[1.65rem] max-sm:w-6 max-sm:h-6 max-sm:[&>svg]:text-[1.5rem]" onClick={() => navigate('/cart')}>
                <RiShoppingBasketFill />
              </div>
              <button className='w-26 h-[1.8rem] bg-[#6d9886] rounded-[5px] text-[0.8rem] text-[#f7f7f7] cursor-pointer max-md:h-[1.65rem] max-md:w-22 max-md:text-[0.7rem] max-sm:w-19 max-sm:h-6 max-sm:text-[0.6rem]' onClick={() => navigate('/signin')}>عضویت/ثبت نام</button>
            </div>
        </nav>
    </>
  )
}