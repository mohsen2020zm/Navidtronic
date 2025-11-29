import './NavBar.css'
import { useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiShoppingBasketFill } from "react-icons/ri";

export default function NavBar() {
  const [Menu, setMenu] = useState([])

  const [search, setSearch] = useState('')

  const navigate = useNavigate()
  const locationInfo = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()

  const onSearch = () => {
    setSearchParams({q: search})
    if(locationInfo.pathname != '/products'){
      navigate(`/products/?q=${search}`)
    }
    setSearch('')
  }
  
  const searchInputChange = event => setSearch(event.target.value)

  const menuHandler = (style1, style2) => setMenu([style1,style2])

  return (
    <>
        <aside className='menu-aside' style={Menu[0]}>
          <div className="close-menu-btn"onClick={() => menuHandler({right: '-13rem'}, {right: '-11.8rem'})}><IoMdCloseCircleOutline /></div>
        </aside>
        <nav className='nav-div'>
            <div className="menu-btn" onClick={() => menuHandler({right: '0'}, {right: '1.8rem'})}><TiThMenu /></div>
            <ul className='menu-ul' style={Menu[1]}>
                <Link to='/'>صفحه اصلی</Link>
                <Link to='/products'>محصولات</Link>
                <Link to='/about'>درباره ما</Link>
            </ul>
            <img className='nav-logo' src={process.env.PUBLIC_URL + "/images/logo.png"} alt="navidtronic-logo" />
            <div className="nav-left-div">
              <div className="nav-search-input-div">
                <div className="nav-search-input-icon-div" onClick={() => onSearch()}>
                  <IoSearchSharp />
                </div>
                <input
                 type="text" 
                 placeholder='جست و جوی محصولات' 
                 className='nav-search-input' 
                 onChange={event => searchInputChange(event)} 
                 onKeyUp={event => event.key == 'Enter' && onSearch()}
                 value={search}/>
              </div>
              <div className="nav-basket-btn" onClick={() => navigate('/cart')}>
                <RiShoppingBasketFill />
              </div>
              <button className='log-button' onClick={() => navigate('/signin')}>عضویت/ثبت نام</button>
            </div>
        </nav>
    </>
  )
}