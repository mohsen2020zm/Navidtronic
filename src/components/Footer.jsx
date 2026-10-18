import { FiInstagram } from "react-icons/fi";
import { RiTelegram2Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import eNamad from '../assets/images/enamad.png'

export default function Footer() {
  return (
    <footer className="bg-[#393e46] text-[#f7f7f7]">
        <div className="container">
            <div className="h-24 flex items-center justify-between max-sm:h-20">
                <img className='max-w-44 max-md:max-w-36 max-sm:max-w-32' src={logo} alt="logo" />
                <ul className="w-14 flex items-center justify-between max-md:max-w-12 max-sm:w-[2.8rem]">
                    <a href="#" className='text-[1.5rem] max-md:text-[1.3rem] max-sm:text-[1.2rem]'><RiTelegram2Line /></a>
                    <a href="#" className='text-[1.5rem] max-md:text-[1.3rem] max-sm:text-[1.2rem]'><FiInstagram /></a>
                </ul>
            </div>
            <div className="w-full h-12 border-b border-b-[#6c6c6c] mb-4 flex justify-self-start">
                <a href='#' className='contact-address'><BsTelephone /> ۰۹۱۲۳۴۵۶۷۸۹</a>
                <a href='#' className='contact-address'><AiOutlineMail /> navidtronic@gmail.com</a>
            </div>
            <div className="w-full flex items-center justify-between pb-4 max-md:flex-wrap">
                <div className="max-w-100 max-lg:max-w-92 max-md:mb-6 max-md:max-w-84">
                    <p className='text-[1.5rem] font-semibold mb-4 max-lg:text-[1.3rem] max-md:text-[1.2rem]'>درباره ما</p>
                    <p className='text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem]'>ما در اینجا محصولات الکترونیکی با کیفیت بالا ارائه می دهیم.
                        هدف ما ارائه محصولات منحصر به فرد و خلاقانه است که الهام بخش شما در دنیای فناوری و نواوری باشند.
                    </p>
                </div>
                <div className="w-40 [&>p>a]:text-[1.2rem] [&>p>a]:max-lg:text-[1.1rem] [&>p>a]:max-md:text-[1rem] max-sm:w-32">
                    <p className='text-[1.5rem] font-semibold mb-4 max-lg:text-[1.3rem] max-md:text-[1.2rem]'>دسترسی سریع</p>
                    <p><Link to='/'>صفحه اصلی</Link></p>
                    <p><Link to='/products'>محصولات</Link></p>
                    <p><Link to='/about'>درباره ما</Link></p>
                </div>
                <a href="#">
                    <img className="max-lg:max-w-36 max-sm:max-w-32" src={eNamad} alt="e-namad" />
                </a>
            </div>
        </div>
    </footer>
  )
}
