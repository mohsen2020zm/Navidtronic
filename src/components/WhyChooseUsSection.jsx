import electricBoard from '../assets/images/electric-board2.png'

export default function WhyChooseUsSection() {
  return (
    <div className="max-w-full flex items-center justify-around my-6 max-xl:flex-col">
        <img src={electricBoard} alt="electric-board" className='max-w-md max-md:max-w-102 max-sm:max-w-72' />
        <div className="max-w-160 flex flex-wrap justify-center max-xl:mt-8 max-md:max-w-104 max-sm:max-w-full max-lg:mt-4 max-sm:flex-col max-sm:items-start max-sm:px-[0.7rem]">
            <p className='w-full mr-10 mb-4 text-[1.5rem] font-semibold max-xl:mb-2 max-md:text-[1.3rem] max-md:mr-2 max-sm:text-[1.1rem] max-sm:mr-0 max-sm:mb-3'>چه چیزی ما را متمایز می‌کند؟</p>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>طراحی‌های منحصر‌به‌فرد</p>
                <p className='wcu-boxes-texts'>هر قطعه با دقت و ذوق هنری طراحی شده و هیچ‌کدام شبیه به دیگری نیستند.</p>
            </div>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>کیفیت بی‌نظیر</p>
                <p className='wcu-boxes-texts'>ما از بهترین مواد اولیه استفاده می‌کنیم تا محصولاتی با دوام و با کیفیت ارائه دهیم.</p>
            </div>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>ساخته شده با عشق</p>
                <p className='wcu-boxes-texts'>هر محصول داستانی دارد؛ داستانی از خلاقیت، تلاش و عشقی که در آن نهفته است.</p>
            </div>
            <div className="wcu-boxes">
                <p className='wcu-boxes-title'>پشتیبانی ویژه</p>
                <p className='wcu-boxes-texts'>ما به شما اهمیت می‌دهیم و در هر مرحله از خرید تا استفاده، کنار شما خواهیم بود.</p>
            </div>
        </div>
    </div>
  )
}
