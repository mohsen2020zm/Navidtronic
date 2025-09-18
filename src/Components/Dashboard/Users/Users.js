import './Users.css'
import Row from '../Row/Row'
import Modal from '../../Modal/Modal'
import ErrorBox from '../../ErrorBox/ErrorBox'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Users() {
  const [haveError, setHaveError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [userDeleteId, setUserDeleteId] = useState('')

  const [allUsers, setAllUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users.json')
    .then(res => res.json())
    .then(res => Object.entries(res))
    .then(res => setAllUsers(res))
  },[])

  useEffect(() => {
    const query = searchParams.get('q') || ''
    let filtered = allUsers.filter(user => user[1].username.toLowerCase().includes(query.toLowerCase()))
    setFilteredUsers(filtered)
  },[searchParams, allUsers])

  const onDeleteHandler = () => {
    setShowModal(false)
    fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users/${userDeleteId}.json`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.status == 200){
        let deleteFilter = filteredUsers.filter(user => user[0] != userDeleteId)
        setFilteredUsers(deleteFilter)
        errorHandler('کاربر با موفقیت حذف شد')
      }else{
        errorHandler('خطایی رخ داده است')
      }
    })
  }

  const userDeleteIdHandler = id => {
    setShowModal(true)
    setUserDeleteId(id)
  }

  const errorHandler = error => {
    setHaveError(error)
    setTimeout(() => setHaveError('') ,4000)
  } 

  return (
    <>
      {showModal && <Modal massage='آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟' onNo={() => setShowModal(false)} onYes={onDeleteHandler} />}
      {haveError && <ErrorBox massage={haveError} />}
      <div className='container'>
          <div className="users-header-div">
            <h1 className='users-title'>فهرست کاربران</h1>
            <input 
            className='users-search-input' 
            type="text" 
            placeholder='جست و جوی کاربران...' 
            onChange={event => setSearchParams({q: event.target.value})}/>
          </div>
          <div className="users-info-titles">
            <div className="users-info-title">
              <p>نام و نام خانوادگی</p>
            </div>
            <div className="users-info-title">
              <p>نام کاربری</p>
            </div>
            <div className="users-info-title">
              <p>شماره تلفن</p>
            </div>
          </div>
          <div className="users-info-main-div">
            {filteredUsers.map(user => <Row  column1={user[1].name} column2={user[1].username} column3={user[1].phoneNumber} key={user[0]}><button className='row-delete-btn' onClick={() => userDeleteIdHandler(user[0])}>حذف</button></Row>)}
          </div>
      </div>
    </>
  )
}
