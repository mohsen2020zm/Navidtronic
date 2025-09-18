import './AllProducts.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
        
        fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products.json')
        .then(res => res.json())
        .then(res => {
            num = 0
            let allProducts = Object.entries(res)
            let filteredProducts = allProducts.filter(product => product[1].name.toLowerCase().includes(query.toLowerCase()) && product[1].isSoldOut === false)

            setFilteredPros(filteredProducts)
            addProductsHandler(filteredProducts)

            if(filteredProducts.length == 0){
                setMassage('محصولی با این نام پیدا نشد')
            }else{
                setMassage('در حال جست و جو...')
            }
        })
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
                {products.map(product => <ProductCard key={product[0]} {...product[1]} id={product[0]} />)}
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
