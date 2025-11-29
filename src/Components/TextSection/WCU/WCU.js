import './WCU.css'

export default function WCU() {
  return (
    <div className="wcu-main-div">
        <img src={process.env.PUBLIC_URL + "/images/electric-board2.png"} alt="electric-board" />
        <div className="wcu-div">
            <p className='wcu-main-title'>چه چیزی ما را متمایز می‌کند؟</p>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>طراحی‌های منحصر‌به‌فرد</p>
                <p>هر قطعه با دقت و ذوق هنری طراحی شده و هیچ‌کدام شبیه به دیگری نیستند.</p>
            </div>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>کیفیت بی‌نظیر</p>
                <p>ما از بهترین مواد اولیه استفاده می‌کنیم تا محصولاتی با دوام و با کیفیت ارائه دهیم.</p>
            </div>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>ساخته شده با عشق</p>
                <p>هر محصول داستانی دارد؛ داستانی از خلاقیت، تلاش و عشقی که در آن نهفته است.</p>
            </div>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>پشتیبانی ویژه</p>
                <p>ما به شما اهمیت می‌دهیم و در هر مرحله از خرید تا استفاده، کنار شما خواهیم بود.</p>
            </div>
        </div>
    </div>
  )
}
