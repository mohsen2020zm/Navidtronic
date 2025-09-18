import './Dashboard.css'
import { useParams, Outlet, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import Modal from '../Modal/Modal';
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Dashboard({children}) {
  const [Menu, setMenu] = useState([])

  const [showLogOutModal, setShowLogOutModal] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  const {userID} = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
      fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users/${userID}.json`)
      .then(res => res.json())
      .then(res => setUserInfo(res))
  },[])

  const logOutHandler = () => {
    let date = new Date()
    let expiresDate = date.setTime(date.getTime() - 20 * 24 * 60 * 60 * 1000)
    document.cookie = `username='';path=/;expires=${expiresDate}`
    document.cookie = `password='';path=/;expires=${expiresDate}`
    navigate('/')
  }

  const menuHandler = (style1, style2) => setMenu([style1,style2])

  return (
    <>
      {showLogOutModal && <Modal massage='آیا مطمئن هستید که می‌خواهید خارج شوید؟' onNo={() => setShowLogOutModal(false)} onYes={logOutHandler} />}
      <nav className='dashboard-navbar'>
        <div className="dashboard-menu-btn" onClick={() => menuHandler({right: '0'}, {right: '13rem'})}><TiThMenu /></div>
        <Link to='/'>
          <img className='logo-dash' src='/images/logo.png' alt="navidtronic-logo" />
        </Link>
        <div style={{width: '2.7rem'}}></div>
      </nav>
      <aside className='dashboard-aside' style={Menu[0]}>
        <div className="dashboard-close-menu-btn" style={Menu[1]} onClick={() => menuHandler({right: '-15rem'}, {right: '-13rem'})}>
          <IoMdCloseCircleOutline />
        </div>
        <div className="user-name-pro-div">
            <div className='user-pro-dash'><FaUserCircle /></div>
            <p className="user-name">{userInfo.name}</p>
        </div>
        <ul className="dashboard-segments">
          {children}
        </ul>
        <button className='log-out-btn' onClick={() => setShowLogOutModal(true)}>خروج از حساب کاربری</button>
      </aside>
      <div className="outlet-div">
        <Outlet />
      </div>
    </>
  )
}
