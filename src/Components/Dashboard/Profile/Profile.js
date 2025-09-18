import './Profile.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ErrorBox from '../../ErrorBox/ErrorBox'

export default function Profile() {
  const [userInfo, setUserInfo] = useState({})
  const [nameInput, setNameInput] = useState('')
  const [nameError, setNameError] = useState('')

  const [haveMassage, setHaveMassage] = useState('')

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passError, setPassError] = useState('')

  const {userID} = useParams()
  useEffect(() => {
    fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users/${userID}.json`)
    .then(res => res.json())
    .then(res => {
      setUserInfo(res)
      setNameInput(res.name)
    })
  },[])

  const errorHandler = errorMassage => {
    setHaveMassage(errorMassage)
    setTimeout(() => setHaveMassage(''), 4000)
  }
  
  const onNameInput = event => setNameInput(event.target.value)
  const changeInfo = event => {
    event.preventDefault()
    if(nameInput.length >= 3 && nameInput != userInfo.name){
      setNameError('')
      fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users/${userID}/name.json`, {
        method: 'PUT',
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify(nameInput)
      })
      .then(res => {
        if(res.status == 200) errorHandler('مشخصات شما با موفقیت تغییر کرد')
        else errorHandler('خطایی رخ داده است')
      })
    }else{
      setNameError('نام و نام خانوادگی باید حداقل 3 حرف باشد')
    }
  }
  
  const passRegEx = /^[a-zA-Z0-9]+$/
  const onCurrentPass = event => setCurrentPassword(event.target.value)
  const onNewPass = event => setNewPassword(event.target.value)
  const changePass = () => {
    if(userInfo.password == currentPassword){
      if(newPassword.length >= 8 && passRegEx.test(newPassword)){
        fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users/${userID}/password.json`, {
          method: 'PUT',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newPassword)
        })
        .then(res => {
          if(res.status == 200){
            let date = new Date()
            date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000)
            document.cookie = `password=${newPassword};path=/;expires=${date}`
            errorHandler('رمز عبور با موفقیت تغییر کرد')
          }
          else errorHandler('خطایی رخ داده است')
        })
        setCurrentPassword('')
        setNewPassword('')
        setPassError('')
      }else{
        setPassError('رمز عبور باید حداقل 8 حرف باشد و می تواند فقط شامل حروف کوچک و بزرگ انگلیسی و اعداد باشد')
      }
    }else{
      errorHandler('رمز عبور فعلی وارد شده نادرست است')
    }
  }

  return (
    <>
      {haveMassage && <ErrorBox massage={haveMassage} />}
      <div className='container'>
        <form className='profile-info-form'>
          <p className="profile-title">پروفایل</p>
          <div className="profile-inputs-main-div">
            <div className="profile-input-div">
              <p className="profile-input-name">نام و نام خانوادگی</p>
              <input type="text" max='12' value={nameInput} onChange={event => onNameInput(event)} />
              <p className='profile-input-error'>{nameError && nameError}</p>
            </div>
            <div className="profile-input-div">
              <p className="profile-input-name">نام کاربری</p>
              <input type="text" style={{color: '#9b9b9b'}} disabled value={userInfo.username} />
            </div>
            <div className="profile-input-div">
              <p className="profile-input-name">شماره تلفن</p>
              <input type="number" style={{color: '#9b9b9b'}} disabled value={userInfo.phoneNumber} />
            </div>
          </div>
          <button className='profile-submit-form' onClick={event => changeInfo(event)}>ویرایش حساب کاربری</button>
        </form>
        <div className="change-pass-main-div">
          <div className="profile-inputs-main-div">
            <div className="profile-input-div">
              <p className="profile-input-name">رمز عبور فعلی</p>
              <input type="text" value={currentPassword} onChange={event => onCurrentPass(event)} />
            </div>
            <div className="profile-input-div">
              <p className="profile-input-name">رمز عبور جدید</p>
              <input type="text" value={newPassword} onChange={event => onNewPass(event)} />
              <p className='profile-input-error'>{passError && passError}</p>
            </div>
          </div>
          <button className='profile-submit-form' onClick={() => changePass()}>تغییر رمز عبور</button>
        </div>
      </div>
    </>
  )
}
