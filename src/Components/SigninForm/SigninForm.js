import './SigninForm.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function SigninForm() {
  
  const {register, handleSubmit} = useForm()

  const submitForm = formData => {
    if(formData.username && formData.password){
      console.log('logged')
    }
  } 

  return (
    <>
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