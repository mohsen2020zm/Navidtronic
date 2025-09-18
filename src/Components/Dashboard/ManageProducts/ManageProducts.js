import './ManageProducts.css'
import Row from '../Row/Row'
import Modal from '../../Modal/Modal'
import ErrorBox from '../../ErrorBox/ErrorBox'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ManageProducts() {
  const [haveError, setHaveError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [productDeleteId, setUserDeleteId] = useState('')

  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products.json')
    .then(res => res.json())
    .then(res => Object.entries(res))
    .then(res => setAllProducts(res))
  },[])

  useEffect(() => {
    const query = searchParams.get('q') || ''
    let filtered = allProducts.filter(product => product[1].name.toLowerCase().includes(query.toLowerCase()))
    setFilteredProducts(filtered)
  },[searchParams, allProducts])

  const onDeleteHandler = () => {
    setShowModal(false)
    fetch(`https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products/${productDeleteId}.json`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.status == 200){
        let deleteFilter = filteredProducts.filter(product => product[0] != productDeleteId)
        setFilteredProducts(deleteFilter)
        errorHandler('محصول با موفقیت حذف شد')
      }else{
        errorHandler('خطایی رخ داده است')
      }
    })
  }

  const productDeleteIdHandler = id => {
    setShowModal(true)
    setUserDeleteId(id)
  }

  const errorHandler = error => {
    setHaveError(error)
    setTimeout(() => setHaveError('') ,4000)
  } 
  return (
    <>
      {showModal && <Modal massage='آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید؟' onNo={() => setShowModal(false)} onYes={onDeleteHandler} />}
      {haveError && <ErrorBox massage={haveError} />}
      <div className='container'>
        <div className="manage-pro-header-div">
          <h1 className='manage-pro-title'>مدیریت محصولات</h1>
          <input 
          className='manage-pro-search-input' 
          type="text" 
          placeholder='جست و جوی محصولات...' 
          onChange={event => setSearchParams({q: event.target.value})}/>
        </div>
        <div className="manage-pro-info-titles">
          <div className="manage-pro-info-title">
            <p>نام محصول</p>
          </div>
          <div className="manage-pro-info-title">
            <p>قیمت محصول</p>
          </div>
          <div className="manage-pro-info-title">
            <p>وضعیت</p>
          </div>
        </div>
        <div className="manage-pro-info-main-div">
          {filteredProducts.map(product => <Row column1={product[1].name} column2={product[1].price} column3={product[1].isSoldOut == false ? 'فروخته نشده' : 'فروخته شده'} key={product[0]}><button className='row-delete-btn' onClick={() => productDeleteIdHandler(product[0])}>حذف</button></Row>)}
        </div>
      </div>
    </>
  )
}
