import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data  from '../data/data.json'

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
          <div className='w-full flex items-center justify-around my-6 max-lg:flex-col max-lg:my-2'>
            <div className="max-w-80 max-lg:mb-2 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:[&>p]:text-center max-sm:mb-3">
              <p className='text-[3rem] font-semibold my-2 text-[#393e46] max-lg:text-[2.5rem] max-lg:my-1 max-md:text-[2rem] max-sm:my-0 max-sm:text-[1.5rem]'>محصولات</p>
              <p className='text-[1.2rem] my-2 text-[#393e46] max-lg:text-[1.1rem] max-lg:my-1 max-md:text-[1rem] max-sm:text-[0.9rem]'>برای مشاهده همه محصولات روی مشاهده همه کلیک کنید</p>
              <button className='w-28 h-10 bg-[#6d9886] text-[#f7f7f7] text-[1rem] rounded-[5px] cursor-pointer max-lg:mt-2 max-lg:w-24 max-lg:h-9 max-lg:text-[0.9rem] max-md:mt-1 max-md:w-21 max-md:h-8 max-md:text-[0.8rem]' onClick={() => navigate('/products')}>مشاهده همه</button>
            </div>
            <div className="flex items-center justify-evenly [&>div]:m-4 max-md:[&>div]:m-2 max-sm:[&>div:nth-child(3)]:hidden">
              {
                threeProducts.map(product => <ProductCard key={product.id} {...product} />)
              }
            </div>
          </div>
        </div>
    </section>
  )
}
