import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import data  from '../data/data.json'

export default function AllProducts() {
    const [products, setProducts] = useState([])
    const [filteredPros, setFilteredPros] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get('q') || ''

    let num = 15

    useEffect(() => {
        setProducts([])
        num = 0
        let filteredProducts = data.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        setFilteredPros(filteredProducts)
        addProductsHandler(filteredProducts)
    },[query])

    const addProductsHandler = pros => {
        num += 15
        let fifteenProducts = []
        for(let i = 0; i < num; i++){
            pros[i] && fifteenProducts.push(pros[i])
            setProducts(fifteenProducts)
        }
    }

  return (
    <section>
        <div className='container'>
            <h1 className='text-center text-[2rem] font-bold mt-3 mb-2 text-[#393e46] max-md:text-[1.6rem] max-md:mt-2 max-md:mb-1 max-sm:text-[1.4rem] max-sm:mt-1 max-sm:mb-0 '>محصولات</h1>
            {
            products.length == 0 ? <p className='text-center text-[1.6rem] text-[#393e46] my-22 max-md:text-[1.4rem] max-md:my-20 max-sm:text-[1.2rem] max-sm:my-18'>محصولی با این نام پیدا نشد</p> :
            <>
                <div className='grid grid-cols-[repeat(5,1fr)] max-2xl:grid-cols-[repeat(4,1fr)] max-xl:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[repeat(2,1fr)]'>
                    {products.map(product => <ProductCard key={product.id} {...product} />)}
                </div>
                {
                filteredPros.length > 15 &&
                <div className="my-8 flex justify-center max-md:my-5">
                    <button className='w-28 h-10 rounded-[3px] bg-[#6d9886] text-[1.2rem] text-[#f7f7f7] cursor-pointer max-md:w-22 max-md:h-8 max-md:text-[1rem]' onClick={() => addProductsHandler(filteredPros)}>بیشتر</button>
                </div>
                }
            </>
            }
        </div>
    </section>
  )
}
