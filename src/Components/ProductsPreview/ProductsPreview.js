import './ProductsPreview.css'
import ProductCard from '../ProductCard/ProductCard'
import { useNavigate } from 'react-router-dom'
import data  from '../../Data/data'
import { useEffect, useState } from 'react'

export default function ProductsPreview() {
  const navigate = useNavigate()
  const [threeProducts,setThreeProducts] = useState([])

  useEffect(() => {
    let pros = []
    for(let i = 0; i < 3; i++){
      pros.push(data.products[i])
    }
    setThreeProducts(pros)
  },[])
  
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
              {
                threeProducts.map(product => <ProductCard key={product.id} {...product} />)
              }
            </div>
          </div>
        </div>
    </section>
  )
}
