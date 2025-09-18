import './ProductsPreview.css'
import ProductCard from '../ProductCard/ProductCard'
import { useNavigate } from 'react-router-dom'

export default function ProductsPreview() {
  const navigate = useNavigate()
  return (
    <section>
        <div className="container">
          <div className='pro-pre-flex-div'>
            <div className="pro-pre-details">
              <p className='pro-pre-title'>محصولات</p>
              <p className='pro-pre-des'>برای مشاهده همه محصولات روی مشاهده همه کلیک کنید</p>
              <button className='pro-pre-btn' onClick={() => navigate('/products')}>مشاهده همه</button>
            </div>
            <div className="pros-pre-div">
              {/* <ProductCard name='امپلی فایر XH-A232' price={500000} img='/images/amp.jpg' />
              <ProductCard name='ماژول شارژ TP4056' price={15000} img='/images/ah.jpg' />
              <ProductCard name='ماژول YL-69' price={52000} img='/images/yl.jpeg' />
            </div>
          </div>
        </div>
    </section>
  )
}
