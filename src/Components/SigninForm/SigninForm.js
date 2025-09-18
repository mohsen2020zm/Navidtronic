import './SigninForm.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ErrorBox from '../ErrorBox/ErrorBox'

export default function SigninForm() {
  const [haveMassage, setHaveMassage] = useState('')

  const navigate = useNavigate()
  
  const {register, handleSubmit} = useForm()

  const setCookie = (cookieName, cookieValue) => {
    let date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${cookieValue};path=/;expires=${date}`
  }

  const errorHandler = errorMassage => {
    setHaveMassage(errorMassage)
    setTimeout(() => setHaveMassage(''), 4000)
  }

  const submitForm = formData => {
    if(formData.username && formData.password){
      fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users.json')
      .then(res => res.json())
      .then(res => {
        let userInfo = Object.entries(res)
        let isInUsers = userInfo.some(user => user[1].username == formData.username && user[1].password == formData.password)
        if(isInUsers){
          setCookie('username', formData.username)
          setCookie('password', formData.password)
          navigate('/')
        }else{
          errorHandler('کاربری با این مشخصات یافت نشد.')
        }
      })
    }
  } 

  return (
    <>
    {haveMassage && <ErrorBox massage={haveMassage} />}
    <div className="main-signin-div">
      <h1 className='signin-title'>ورود</h1>
      <form className='signin-form-elem' onSubmit={handleSubmit(submitForm)}>
        <input type="text" name='username' placeholder='نام کاربری' {...register('username')} />
        <input type="password" name='password' placeholder='رمز عبور' {...register('password')} />
        <input type="submit" className='submit-in-btn' value='ورود' />
      </form>
      <p className='que-p-tag'>حساب کاربری ندارید؟ <Link to='/signup'>ثبت نام کنید</Link></p>
    </div>
    </>
  )
}