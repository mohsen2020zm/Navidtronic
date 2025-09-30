import './SignupForm.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function SignupForm() {
    
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

    const submitForm = formData => {
      console.log(formData)
    }
  return (
    <>
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
