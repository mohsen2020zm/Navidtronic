import CartProducts from './CartProducts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data  from '../data/data.json'

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState(0)

  const navigate = useNavigate()
  
  useEffect(() => {
    let cartPros = JSON.parse(localStorage.getItem('navcart'))
    let filterdPros = []
    cartPros.forEach(proName => {
      filterdPros.push(data.products.find(product => product.name == proName))
      setCartProducts(filterdPros)
      totalCalculate()
    })
  },[])

  useEffect(() => totalCalculate(),[cartProducts])

  const totalCalculate = () => {
    let priceTotal = 0
    cartProducts.forEach(product => {
      priceTotal += product.price
    })
    setTotal(priceTotal)
  }

  const onDelete = name => {
    let cartProsId = JSON.parse(localStorage.getItem('navcart'))
    let locStoFilter = cartProsId.filter(productName => productName != name)
    localStorage.setItem('navcart', JSON.stringify(locStoFilter))

    let cartProductFilter = cartProducts.filter(product => product.name != name)
    setCartProducts(cartProductFilter)
  }

  const completeOrderHandler = () => {
    if(cartProducts.length > 0){
      navigate('/signin')
    }
  }

  return (
    <div className='container'>
      <h1 className="text-[2rem] font-semibold text-[#393e46] my-3 max-md:text-[1.6rem] max-md:my-2 max-md:text-center max-sm:text-[1.4rem] max-sm:my-1">سبد خرید</h1>
      <div className='flex justify-between my-8'>
        <div className="w-full flex items-start flex-row flex-wrap max-md:flex-col max-md:items-center">
          {cartProducts.length === 0 ?
          <p className='w-full text-[1.6rem] text-[#393e46] my-15 ml-16 max-md:text-[1.4rem] max-md:text-center max-md:my-20 max-md:ml-0 max-sm:text-[1.2rem]'>هنوز محصولی به سبد خرید اضافه نکرده اید</p> :
          cartProducts.map(product => <CartProducts key={product.id} {...product} deleteHandler={onDelete} />)}
        </div>
        <div className="w-116 h-40 bg-[#393e46] sticky top-4 rounded-lg flex flex-col items-center max-md:w-full max-md:h-18 max-md:rounded-none max-md:flex-row-reverse max-md:justify-between max-md:fixed max-md:top-auto max-md:bottom-0 max-md:right-0 max-md:shadow-[0_-4px_8px_1px_#0000002b] max-sm:h-16">
          <div className="w-full flex items-center justify-between text-[#f7f7f7] [&>p]:text-[1rem] max-lg:[&>p]:text-[0.95rem] max-md:w-40 max-md:flex-col max-md:ml-8 max-md:[&>p]:text-[0.9rem] max-sm:w-32 max-sm:ml-4 max-sm:[&>p]:text-[0.8rem]">
            <p className='my-10 mr-8 max-md:mx-0 max-md:mt-0 max-md:mb-2 max-md:text-center'>جمع سبد خرید</p>
            <p className='my-10 ml-8 max-md:m-0 max-md:text-center'>{new Intl.NumberFormat('fa-IR').format(total)} تومان</p>
          </div>
          <button className='w-64 h-10 rounded-[5px] bg-[#6d9886] text-[1rem] text-[#f7f7f7] cursor-pointer max-lg:w-56 max-md:w-40 max-md:h-9 max-md:mr-8 max-md:text-[0.9rem] max-sm:w-32 max-sm:h-8 max-sm:mr-4 max-sm:text-[0.75rem]' onClick={() => completeOrderHandler()}>تایید و تکمیل سفارش</button>
        </div>
      </div>
    </div>
  )
}