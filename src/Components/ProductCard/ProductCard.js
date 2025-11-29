import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({img, name, price, id}) {
  const navigate = useNavigate()
  return (
    <div className='pro-card-main-div' onClick={() => navigate(`/product-details/${id}`)}>
        {img ? <img src={process.env.PUBLIC_URL + img} alt='product-img' /> : <img src={process.env.PUBLIC_URL + "/images/no-pic.jpg"} alt='no-pic-img' />}
        <div className='pro-card-detals-div'>
            <p className='pro-card-title'>{name}</p>
            <p className="pro-card-price">{new Intl.NumberFormat('fa-IR').format(price)}تومان</p>
        </div>
    </div>
  )
}
