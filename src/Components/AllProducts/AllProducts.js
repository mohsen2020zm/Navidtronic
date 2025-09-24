import './AllProducts.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import data  from '../../Data/data'

export default function AllProducts() {
    const [massage, setMassage] = useState('')
    const [products, setProducts] = useState([])
    const [filteredPros, setFilteredPros] = useState([])

    const [searchParams] = useSearchParams()
    const query = searchParams.get('q') || ''

    let num = 15

    useEffect(() => {
        setProducts([])
        setMassage('در حال جست و جو...')
        num = 0
        let filteredProducts = data.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        
        setFilteredPros(filteredProducts)
        addProductsHandler(filteredProducts)

        if(filteredProducts.length == 0){
            setMassage('محصولی با این نام پیدا نشد')
        }else{
            setMassage('در حال جست و جو...')
        }
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
            <p className='all-pros-title'>محصولات</p>
            {products.length == 0 ? 
            <p className='all-pros-loading-mass'>{massage}</p> :
            <>
            <div className='all-pros-main-div'>
                {products.map(product => <ProductCard key={product.id} {...product} />)}
            </div>
            {filteredPros.length > 15 &&
            <div className="all-pros-btn-main-div">
                <button className='all-pros-btn' onClick={() => addProductsHandler(filteredPros)}>بیشتر</button>
            </div>
            }
            </>
            }
        </div>
    </section>
  )
}
