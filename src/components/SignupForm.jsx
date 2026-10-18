import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaArrowRight } from 'react-icons/fa6'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

export default function SignupForm() {

    const [showPass, setShowPass] = useState(false)

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

    const submitForm = formData => console.log(formData)

  return (
    <>
      <div className="form-main-div h-108">
        <div className='form-header'>
          <FaArrowRight onClick={() => navigate('/')} />
          <h1 className='form-title'>عضویت</h1>
          <div className='w-6'></div>
        </div>
        <form className='w-70 h-72 flex justify-around items-center flex-col' onSubmit={handleSubmit(submitForm)}>
          <input type="text" max='12' name='name' placeholder='نام و نام خانوادگی' {...register('name')} className='w-full form-input' />    
          <p className='form-error'>{errors.name && errors.name.message}</p>
          <input type="text" name='username' placeholder='نام کاربری' {...register('username')} className='w-full form-input' />    
          <p className='form-error'>{errors.username && errors.username.message}</p>
          <input type="number" name='phoneNumber' placeholder='شماره موبایل' {...register('phoneNumber')} className='w-full form-input' />    
          <p className='form-error'>{errors.phoneNumber && errors.phoneNumber.message}</p>
          <div className='flex items-center bg-[#f7f7f7] rounded-[5px]'>
            <input type={showPass ? 'text' : 'password'} name='password' placeholder='رمز عبور' {...register('password')} className='w-61 form-input' />
            <div className='w-9 flex justify-center cursor-pointer [&>svg]:text-[#393e46] [&>svg]:text-[1.2rem]' onClick={() => setShowPass(!showPass)}>
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <p className='form-error'>{errors.password && errors.password.message}</p>
          <input type="submit" className='form-submit-btn' value='ثبت نام' />
        </form>
        <p className='form-question-p'>قبلا ثبت نام کرده اید؟ <Link to='/signin'>وارد شوید</Link></p>
      </div>
    </>
  )
}
