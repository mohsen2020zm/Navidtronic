import './ProductsPreview.css'
import ProductCard from '../ProductCard/ProductCard'
import ProductCardLoading from '../ProductCardLoading/ProductCardLoading'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductsPreview() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products.json')
    .then(res => res.json())
    .then(res => {
      let allProducts = Object.entries(res)
      let newProducts = []
      for(let i = 0;i < 3; i++){
        newProducts.push(allProducts[i])
      }
      setProducts(newProducts)
    })
  }, [])
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
              <ProductCard name='ماژول YL-69' price={52000} img='/images/yl.jpeg' /> */}
              {products.length ? products.map(product => <ProductCard key={product[0]} {...product[1]} id={product[0]} />) :
              <>
              <ProductCardLoading />
              <ProductCardLoading />
              <ProductCardLoading />
              </>
              }
            </div>
          </div>
        </div>
    </section>
  )
}
