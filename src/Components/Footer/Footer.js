import './Footer.css'
import { FiInstagram } from "react-icons/fi";
import { RiTelegram2Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-row-one">
                <img className='footer-logo' src={process.env.PUBLIC_URL + "/images/logo.png"} alt="navidtronic-logo" />
                <ul className="socials-ul">
                    <a href="#" className='social-icon'><RiTelegram2Line /></a>
                    <a href="#" className='social-icon'><FiInstagram /></a>
                </ul>
            </div>
            <div className="footer-row-tow">
                <a href='#' className='contact-address-phone'><BsTelephone /> ۰۹۱۲۳۴۵۶۷۸۹</a>
                <a href='#' className='contact-address-email'><AiOutlineMail /> navidtronic@gmail.com</a>
            </div>
            <div className="footer-row-three">
                <div className="short-about-us-div">
                    <p className='short-about-us-title'>درباره ما</p>
                    <p className='short-about-us'>ما در اینجا محصولات الکترونیکی با کیفیت بالا ارائه می دهیم.
                        هدف ما ارائه محصولات منحصر به فرد و خلاقانه است که الهام بخش شما در دنیای فناوری و نواوری باشند.
                    </p>
                </div>
                <div className="quick-access-div">
                    <p className='quick-access-title'>دسترسی سریع</p>
                    <p><Link to='/'>صفحه اصلی</Link></p>
                    <p><Link to='/products'>محصولات</Link></p>
                    <p><Link to='/contact'>ارتباط با ما</Link></p>
                </div>
                <a href="#">
                    <img src={process.env.PUBLIC_URL + "/images/enamad.png"} />
                </a>
            </div>
        </div>
    </footer>
  )
}
