import './ProductDetails.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import ProductDetailsLoading from '../ProductDetailsLoading/ProductDetailsLoading'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {productID} = useParams()
    const [proDetails,setProDetails] = useState('')

    const [haveMassage, setHaveMassage] = useState('')

    useEffect(() => {
        fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products/${productID}.json`)
        .then(res => res.json())
        .then(res => setProDetails(res))
    }, [])

    const errorHandler = errorMassage => {
        setHaveMassage(errorMassage)
        setTimeout(() => setHaveMassage(''), 4000)
      }

    const addToBasket = () => {
        let basketProducts = JSON.parse(localStorage.getItem('navcart'))
        let isInBasket = basketProducts.some(product => product == productID)
        
        if(isInBasket){
            errorHandler('این محصول قبلا به سبد خرید شما اضافه شده است')
        }else{
            basketProducts.push(productID)
            localStorage.setItem('navcart', JSON.stringify(basketProducts))
            errorHandler('محصول به سبد خرید اضافه شد')
        }
    }
  return (
    <>
        {haveMassage && <ErrorBox massage={haveMassage} />}
        <div className="container">
            {proDetails ?
            <div className='pro-de-main-div'>
                <div className="pro-de-img-div">
                    {proDetails.img === undefined ?
                    <img src="/images/no-pic.jpg" alt='no-pic-img' /> :
                    <img src={proDetails.img} alt="product-img" />}
                </div>
                <div className="pro-de-details-div">
                    <p className='pro-de-name'>{proDetails.name}</p>
                    <p className='pro-de-price'>قیمت: {new Intl.NumberFormat('fa-IR').format(proDetails.price)}</p>
                    <p className='pro-de-description'>{proDetails.description}</p>
                    <button className='pro-de-buy-btn' onClick={() => addToBasket()}>افزدن به سبد خرید</button>
                </div>
            </div> : <ProductDetailsLoading />}
        </div>
    </>
  )
}
