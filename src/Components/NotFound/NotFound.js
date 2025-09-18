import './NotFound.css'
import { useNavigate } from 'react-router-dom'
import { GoAlertFill } from "react-icons/go";


export default function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="container">
        <div className="not-f-main-div">
          <GoAlertFill />
          <div className="not-f-text-div">
              <p>404<br/>صفحه مورد نظر شما پیدا نشد</p>
              <button className="not-f-back-btn" onClick={() => navigate('/')}>بازگشت به صفحه اصلی</button>
          </div>
        </div>
    </div>
  )
}
