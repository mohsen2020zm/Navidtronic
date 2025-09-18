import './UserOrders.css'
import Row from '../Row/Row';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserOrders() {
    const [userOrders, setUserOrders] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    const {userID} = useParams()

    const fetchData =  async () => {
        let userName = null
        await fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users/${userID}/username.json`)
        .then(res => res.json())
        .then(res => userName = res)

        await fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/allOrders.json')
        .then(res => res.json())
        .then(res => {
            let allOrders = Object.entries(res)
            let filter = allOrders.filter(order => order[1].username === userName)
            setUserOrders(filter)
            setIsLoad(false)
        })
    }
    useEffect(() => {
        fetchData();
        return () => {};
    },[])
    
  return (
    <div className='container'>
        <div className="user-ord-header-div">
            <h1 className='user-ord-title'>سفارشات</h1>
        </div>
        <div className="user-ord-info-titles">
            <div className="user-ord-info-title">
                <p>نام محصول</p>
            </div>
            <div className="user-ord-info-title">
                <p>تاریخ سفارش</p>
            </div>
            <div className="user-ord-info-title">
                <p>وضعیت</p>
            </div>
        </div>
        <div className="user-ord-info-main-div">
        {userOrders.length > 0 ?
        userOrders.map(order => <Row column1={order[1].productName} column2={order[1].date} column3={order[1].status == 'complete' ? 'تکمیل شده' : 'در حال ارسال'} key={order[0]} />) :
        <p className='user-ord-searching-mass'>{isLoad ?  'درحال جست و جو...' : 'هنوز محصولی سفارش نداده اید'}</p>}
        </div>
    </div>
  )
}
