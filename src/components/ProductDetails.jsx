import ErrorBox from './ErrorBox'
import Comment from './Comment'
import CommentModal from './CommentModal'
import data  from '../data/data.json'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

export default function ProductDetails() {
    const {productName} = useParams()

    const [error, setError] = useState({message: '', left: '-left-64'})
    const [showModal, setShowModal] = useState(false)

    let currentProduct = data.products.find(product => product.name == productName)

    const errorHandler = mess => {
        setError({message: mess, left: 'left-2'})
        setTimeout(() => setError({message: '', left: '-left-64'}), 2500)
    }

    const addToBasket = () => {
        let basketProducts = JSON.parse(localStorage.getItem('navcart'))
        let isInBasket = basketProducts.some(product => product == productName)
        
        if(isInBasket){
            errorHandler('این محصول قبلا به سبد خرید شما اضافه شده است')
        }else{
            basketProducts.push(productName)
            localStorage.setItem('navcart', JSON.stringify(basketProducts))
            errorHandler('محصول به سبد خرید اضافه شد')
        }
    }

  return (
    <>
        {showModal && <CommentModal onClose={() => setShowModal(false)} />}
        <ErrorBox {...error} />
        <div className="container">
            <div className='flex items-center justify-between mt-3 max-md:mt-2 max-sm:mt-1'>
                <FaArrowRight className='text-[1.8rem] text-[#393e46] cursor-pointer max-md:text-[1.6rem] max-sm:text-[1.4rem]' onClick={() => history.back()} />
                <h1 className='text-center text-[2rem] font-bold text-[#393e46] max-md:text-[1.6rem] max-sm:text-[1.4rem]'>جزئیات محصول</h1>
                <div className='w-[1.8rem] max-md:w-[1.6rem] max-sm:w-[1.4rem]'></div>
            </div>
            <div className='w-[75%] mx-auto mt-4 flex flex-row-reverse items-center justify-between max-xl:w-[85%] max-md:w-full max-lg:flex-col max-lg:mt-2 max-md:mt-0'>
                <div className="w-100 p-4 flex justify-center items-center [&>img]:w-92 [&>img]:rounded-lg [&>img]:mix-blend-multiply max-md:w-80 max-md:[&>img]:w-72 max-sm:w-70 max-sm:[&>img]:w-62">
                    {currentProduct.img ?
                    <img src={import.meta.env.BASE_URL + currentProduct.img} alt="product" /> :
                    <img src={`${import.meta.env.BASE_URL}/images/no-pic.jpg`} alt='no-pic-img' />} 
                </div>
                <div className="w-108 py-8 text-[#393e46] max-lg:border-l-0 max-lg:border-t max-lg:border-t-[#393e46] max-lg:w-full max-lg:py-4 max-md:py-2 max-sm:py-0">
                    <p className='text-[1.8rem] font-semibold my-2 max-md:text-[1.6rem] max-sm:text-[1.4rem]'>{currentProduct.name}</p>
                    <p className='text-[1.6rem] my-2 max-md:text-[1.4rem] max-sm:text-[1.2rem]'>قیمت: {new Intl.NumberFormat('fa-IR').format(currentProduct.price) + " تومان"}</p>
                    <p className='text-[1.2rem] my-2 max-md:text-[1.1rem] max-sm:text-[1rem]'>{currentProduct.description}</p>
                    <button className='w-38 h-10 mt-3 bg-[#6d9886] rounded-[5px] text-[1rem] text-[#f7f7f7] cursor-pointer max-md:w-34 max-md:h-9 max-md:mt-2 max-md:text-[0.9rem] max-sm:w-30 max-sm:h-8 max-sm:mt-1 max-sm:text-[0.8rem]' onClick={() => addToBasket()}>افزودن به سبد خرید</button>
                </div>
            </div>
            <div className='w-[75%] mx-auto mt-4 flex flex-col items-center mb-8 max-xl:w-[85%] max-md:w-full'>
                <div className='w-full my-4 flex items-center justify-between max-md:my-2'>
                    <p className='text-[1.6rem] font-bold text-[#393e46] max-md:text-[1.4rem] max-sm:text-[1.2rem]'>دیدگاه و نظر کاربران</p>
                    <button className='w-26 h-10 bg-[#6d9886] rounded-[5px] text-[1rem] text-[#f7f7f7] cursor-pointer max-md:w-22 max-md:h-9 max-md:text-[0.9rem] max-sm:w-20 max-sm:h-8 max-sm:text-[0.8rem]' onClick={() => setShowModal(true)}>ثبت دیدگاه</button>
                </div>
                {currentProduct.comments.length > 0 ?
                currentProduct.comments.map(comm => <Comment key={comm.id} {...comm} />) :
                <p className='text-[1.6rem] text-[#393e46] my-10 max-md:text-[1.4rem] max-md:my-8 max-sm:text-[1.2rem] max-sm:my-6'>دیدگاهی وجود ندارد</p>}
            </div>
        </div>
    </>
  )
}
