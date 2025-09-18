import './AddProduct.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import ErrorBox from '../../ErrorBox/ErrorBox'

export default function AddProduct() {
  const [haveMassage, setHaveMassage] = useState('')
  const [fileName, setFileName] = useState('هیچ فایلی انتخاب نشده است')

  const schema = yup.object().shape({
    name: yup.string().min(3,'نام باید حداقل 3 حرف باشد').required('اجباری'),
    price: yup.number().required('اجباری'),
    description: yup.string().required('اجباری'),
    // img: yup.mixed().test('fileSize', 'حجم عکس باید کمتر از 2MB باشد', value => value && value[0] && value[0].size <= 2 * 1024 * 1024)
  })
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  const submitAddProductForm = formData => {
    let productInfo = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
      isSoldOut: false
    }
    fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products.json',{
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(productInfo)
    }).then(res => res.status == 200 ? errorHandler('محصول با موفقیت اضافه شد') : errorHandler('خطایی رخ داده است'))
  }

  const errorHandler = errorMassage => {
    setHaveMassage(errorMassage)
    setTimeout(() => setHaveMassage(''), 4000)
  }

  const fileInputChange = event => event.target.files[0] ? setFileName(event.target.files[0].name) : setFileName('هیچ فایلی انتخاب نشده است')

  return (
    <>
    {haveMassage && <ErrorBox massage={haveMassage} />}
    <div className='container'>
      <form className='add-product-info-form' onSubmit={handleSubmit(submitAddProductForm)}>
          <p className="add-product-title">اضافه کردن محصول</p>
          <div className="add-product-inputs-main-div">
            <div className="add-product-input-div">
              <p className="add-product-input-name">نام محصول</p>
              <input type="text" max='15' name='name' {...register('name')} />
              <p className='add-product-input-error'>{errors.name && errors.name.message}</p>
            </div>
            <div className="add-product-input-div">
              <p className="add-product-input-name">قیمت محصول</p>
              <input type="number" name='price' {...register('price')} />
              <p className='add-product-input-error'>{errors.price && errors.price.message}</p>
            </div>
            <div className="add-product-input-div">
              <p className="add-product-input-name">توضیحات</p>
              <textarea className='add-product-description-input' name='description' {...register('description')} />
              <p className='add-product-input-error'>{errors.description && errors.description.message}</p>
            </div>
            <div className="add-product-input-div">
              <div className="add-product-file-input-div">
                <label className='add-product-img-input-label' htmlFor='img'>اپلود عکس</label>
                <input 
                type="file"
                id="img" 
                name='img' 
                {...register('img')} 
                accept='.jpg,.jpeg,.png' 
                className='add-product-img-input'
                onChange={event => fileInputChange(event) } />
                <p className="file-name">{fileName}</p>
              </div>
              <p className='add-product-input-error'>{errors.img && errors.img.message}</p>
            </div>
          </div>
          <button type="submit" className='add-product-submit-form'>اضافه کردن محصول</button>
        </form>
    </div>
    </>
  )
}
