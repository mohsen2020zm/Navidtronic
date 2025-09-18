import './NavBar.css'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiShoppingBasketFill } from "react-icons/ri";

export default function NavBar() {
  const [Menu, setMenu] = useState([])

  const [search, setSearch] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [path, setPath] = useState(null)

  useEffect(() => {
    let cookieArray = document.cookie.split(';');
    let passCookie = null;
    let usernameCookie = null;
    cookieArray.forEach((cookie) => {
      if(cookie.includes('username')){
        usernameCookie = cookie.substring(cookie.indexOf('=') + 1);
      }else if(cookie.includes('password')){
        passCookie = cookie.substring(cookie.indexOf('=') + 1);
      }
    })
    if(passCookie != null && usernameCookie != null){
      fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users.json')
      .then(res => res.json())
      .then(res => {
        let usersInfo = Object.entries(res)
        let findUser = usersInfo.find(user => user[1].username == usernameCookie && user[1].password == passCookie)
        if(findUser != undefined){
          setIsLogin(true)
          findUser[1].userType == 'admin' ? setPath(`/admin/${findUser[0]}/profile`) : setPath(`/dashboard/${findUser[0]}/profile`)
        }
      })
    }
  }, [])

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
            <img className='nav-logo' src="/images/logo.png" alt="navidtronic-logo" />
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
              {isLogin ? <div className='user-prof' onClick={() => navigate(path)}><FaUserCircle /></div> : <button className='log-button' onClick={() => navigate('/signin')}>عضویت/ثبت نام</button>}
            </div>
        </nav>
    </>
  )
}