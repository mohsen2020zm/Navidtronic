import './SignupForm.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorBox from '../ErrorBox/ErrorBox'

export default function SignupForm() {
    const [haveMassage, setHaveMassage] = useState('')

    const navigate = useNavigate()
    
    const usernameRegEx = /^[a-z0-9]+$/
    const phoneRegEx = /^(\+98|0)?9\d{9}$/
    const passRegEx = /^[a-zA-Z0-9]+$/

    const schema = yup.object().shape({
        name: yup.string().min(3,'نام باید حداقل 3 حرف باشد').required('اجباری'),
        username: yup.string().min(5,'نام کاربری باید حداقل 5 حرف باشد').max(10,'نام کاربری باید حداکثر 10 حرف باشد').matches(usernameRegEx,'نام کاربری فقط می تواند حروف کوچک انگلیسی و اعداد باشد').required('اجباری'),
        phoneNumber: yup.string().matches(phoneRegEx,'شماره نامعتبر').required('اجباری'),
        password: yup.string().min(8,'رمز عبور باید حداقل 8 حرف باشد').matches(passRegEx,'رمز عبور فقط می تواند حروف کوچک و بزرگ انگلیسی و اعداد باشد').required('اجباری')
    })
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

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
     fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users.json')
      .then(res => res.json())
      .then(res => {
        let usersInfo = Object.entries(res)
        let isInUsers = usersInfo.some(user => user[1].username === formData.username)

        if(isInUsers){
          errorHandler('شخص دیگری قبلا با این نام کاربری ثبت نام کرده است.')
        }else{
          let userData = {
            userType: 'user',
            name: formData.name,
            username: formData.username, 
            phoneNumber: formData.phoneNumber,
            password: formData.password,
            orders: {}
          }

          fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users.json', {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
          })
          .then(res =>{
            if(res.status === 200){
              setCookie('username', formData.username)
              setCookie('password', formData.password)
              navigate('/')
            }else{
              errorHandler('خطایی رخ داده است.')
            }
          })

        }
      })
    }
  return (
    <>
      {haveMassage && <ErrorBox massage={haveMassage} />}
      <div className="main-signup-div">
        <h1 className='signup-title'>عضویت</h1>
        <form className='signup-form-elem' onSubmit={handleSubmit(submitForm)}>
          <input type="text" max='12' name='name' placeholder='نام و نام خانوادگی' {...register('name')} />    
          <p>{errors.name && errors.name.message}</p>
          <input type="text" name='username' placeholder='نام کاربری' {...register('username')} />    
          <p>{errors.username && errors.username.message}</p>
          <input type="number" name='phoneNumber' placeholder='شماره موبایل' {...register('phoneNumber')} />    
          <p>{errors.phoneNumber && errors.phoneNumber.message}</p>
          <input type="password" name='password' placeholder='رمز عبور' {...register('password')} />
          <p>{errors.password && errors.password.message}</p>
          <input type="submit" className='submit-up-btn' value='ثبت نام' />
        </form>
        <p className='que-p-tag'>قبلا ثبت نام کرده اید؟ <Link to='/signin'>وارد شوید</Link></p>
      </div>
    </>
  )
}
