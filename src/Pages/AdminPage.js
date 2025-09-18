import Dashboard from "../Components/Dashboard/Dashboard"
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
import NotFound from "../Components/NotFound/NotFound";

export default function AdminPage() {
  const [userType, setUserType] = useState('user')
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
          setUserType(findUser[1].userType)
        }
      })
    }
  })
  const {userID} = useParams()
  return (
    <>
      <Helmet>
        <title>نویدترونیک</title>
      </Helmet>
      {userType == 'admin' ? 
      <Dashboard>
        <li className="dashboard-segments-li"><FaRegUserCircle /><Link to={`/admin/${userID}/profile`}>پروفایل</Link></li>
        <li className="dashboard-segments-li"><LuClipboardList /><Link to={`/admin/${userID}/all-orders`}>همه سفارشات</Link></li>
        <li className="dashboard-segments-li"><TbUsers /><Link to={`/admin/${userID}/users`}>فهرست کاربران</Link></li>
        <li className="dashboard-segments-li"><AiOutlineProduct /><Link to={`/admin/${userID}/manage-products`}>مدیریت محصولات</Link></li>
        <li className="dashboard-segments-li"><IoMdAddCircleOutline /><Link to={`/admin/${userID}/add-product`}>اضافه کردن محصول</Link></li>
      </Dashboard> :
      <NotFound />
      }
    </>
  )
}