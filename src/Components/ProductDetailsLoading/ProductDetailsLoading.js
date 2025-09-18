import './ProductDetailsLoading.css'

export default function ProductDetailsLoading() {
  return (
    <div className='pro-de-load-main-div'>
        <div className="pro-de-load-img-div">
            <div></div>
        </div>
        <div className="pro-de-load-details-div">
            <div className='pro-de-load-name'></div>
            <div className='pro-de-load-price'></div>
            <div className='pro-de-load-description'></div>
            <button className='pro-de-buy-btn'>افزدن به سبد خرید</button>
        </div>
    </div>
  )
}