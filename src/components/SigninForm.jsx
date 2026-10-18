import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

export default function SigninForm() {

  const [showPass, setShowPass] = useState(false)
  
  const navigate = useNavigate()

  return (
    <>
    <div className="form-main-div h-76">
      <div className='form-header'>
        <FaArrowRight onClick={() => navigate('/')} />
        <h1 className='form-title'>ورود</h1>
        <div className='w-6'></div>
      </div>
      <form className='w-70 h-46 flex justify-around items-center flex-col'>
        <input type="text" name='username' placeholder='نام کاربری' className='w-full form-input' />
        <div className='flex items-center bg-[#f7f7f7] rounded-[5px]'>
          <input type={showPass ? 'text' : 'password'} name='password' placeholder='رمز عبور' className='w-61 form-input' />
          <div className='w-9 flex justify-center cursor-pointer [&>svg]:text-[#393e46] [&>svg]:text-[1.2rem]' onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        <input type="submit" value='ورود' className='form-submit-btn' onClick={e => e.preventDefault()} />
      </form>
      <p className='form-question-p'>حساب کاربری ندارید؟ <Link to='/signup'>ثبت نام کنید</Link></p>
    </div>
    </>
  )
}