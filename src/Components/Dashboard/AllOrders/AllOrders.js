import './AllOrders.css'
import Row from '../Row/Row'
import ErrorBox from '../../ErrorBox/ErrorBox'
import { useEffect, useState } from 'react'


export default function AllOrders() {
  const [haveError, setHaveError] = useState('')
  
  const [allOrders, setAllOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [value, setValue] = useState([])

  useEffect(() => {
    fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/allOrders.json')
    .then(res => res.json())
    .then(res => {
      let orders = Object.entries(res)
      setAllOrders(orders)
      onFilter(value)
    })
  },[filteredOrders])

  const filterHandler = status => {
    let filter = allOrders.filter(order => order[1].status == status)
    setFilteredOrders(filter)
  }

  const onFilter = () => {
    if(value == 'sending') filterHandler(value)
    else if(value == 'complete') filterHandler(value)
    else setFilteredOrders(allOrders)
  }
  
  const statusHandler = (event, id) => {
    fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/allOrders/${id}/status.json`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(event.target.value)
    })
    .then(res => {
      if(res.status == 200){
        errorHandler('وضعیت تغییر کرد')
        setFilteredOrders(allOrders)
      }else{
        errorHandler('خطایی رخ داده است')
      }
    })
  }
  
  const errorHandler = error => {
    setHaveError(error)
    setTimeout(() => setHaveError('') ,4000)
  }

  return (
    <>
      {haveError && <ErrorBox massage={haveError} />}
      <div className='container'>
          <div className="all-ord-header-div">
            <h1 className='all-ord-title'>سفارشات</h1>
            <select className="all-ord-select-box" onChange={event => {onFilter(); setValue(event.target.value)}}>
              <option value="all">همه</option>
              <option value="sending">درحال ارسال</option>
              <option value="complete">تکمیل شده</option>
            </select>
          </div>
          <div className="all-ord-info-titles">
            <div className="all-ord-info-title">
              <p>نام محصول</p>
            </div>
            <div className="all-ord-info-title">
              <p>نام کاربر</p>
            </div>
            <div className="all-ord-info-title">
              <p>تاریخ سفارش</p>
            </div>
            <div className="all-ord-info-title">
              <p>وضعیت</p>
            </div>
          </div>
          <div className="all-ord-info-main-div">
            {filteredOrders.map(order => 
            <Row column1={order[1].productName} column2={order[1].username} column3={order[1].date} key={order[0]}>
              <select className='row-select-box' value={order[1].status == 'sending' ? 'sending' : 'complete'} onChange={event => statusHandler(event, order[0])}>
                <option value="sending">درحال ارسال</option>
                <option value="complete">تکمیل شده</option>
              </select>
            </Row>
            )}
          </div>
      </div> 
    </>
  )
}
