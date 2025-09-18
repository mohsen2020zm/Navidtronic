import './CartProducts.css'
import { Link } from 'react-router-dom'

export default function CartProducts({id, name, price, img, deleteHandler}) {
  return (
    <div className='cart-products-div'>
        {img ? <img src={img} /> : <img src="/images/no-pic.jpg" />}
        <div className='cart-products-details'>
          <Link to={`/product-details/${id}`}>
            <p className="cart-products-name">{name}</p> 
          </Link>
          <p className="cart-products-price">{new Intl.NumberFormat('fa-IR').format(price)} تومان</p>
          <button className='cart-products-delete-btn' onClick={() => deleteHandler(id)}>حذف</button>
        </div>
    </div>
  )
}
