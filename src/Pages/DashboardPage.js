import Dashboard from "../Components/Dashboard/Dashboard"
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { FaRegUserCircle } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

export default function DashboardPage() {
  const {userID} = useParams()
  return (
    <>
      <Helmet>
        <title>نویدترونیک | پنل کاربری</title>
      </Helmet>
      <Dashboard>
        <li className="dashboard-segments-li"><FaRegUserCircle /><Link to={`/dashboard/${userID}/profile`}>پروفایل</Link></li>
        <li className="dashboard-segments-li"><FiTruck /><Link to={`/dashboard/${userID}/orders`}>لیست سفارشات</Link></li>
      </Dashboard>
    </>
  )
}