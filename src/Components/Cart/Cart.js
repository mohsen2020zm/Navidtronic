import './Cart.css'
import CartProducts from './CartProducts/CartProducts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState(0)

  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/products.json')
    .then(res => res.json())
    .then(res => Object.entries(res))
    .then(res => {
      let cartPros = JSON.parse(localStorage.getItem('navcart'))
      let filterdPros = []
      cartPros.forEach(proID => {
        filterdPros.push(res.find(product => product[0] == proID))
        setCartProducts(filterdPros)
        totalCalculate()
      })
    })
  },[])

  useEffect(() => totalCalculate(),[cartProducts])

  const totalCalculate = () => {
    let priceTotal = 0
    cartProducts.forEach(product => {
      priceTotal += product[1].price
    })
    setTotal(priceTotal)
  }

  const onDelete = id => {
    let cartProsId = JSON.parse(localStorage.getItem('navcart'))
    let locStoFilter = cartProsId.filter(product => product != id)
    localStorage.setItem('navcart', JSON.stringify(locStoFilter))

    let cartProductFilter = cartProducts.filter(product => product[0] != id)
    setCartProducts(cartProductFilter)
  }

  const completeOrderHandler = () => {
    if(cartProducts.length > 0){
      let cookieArray = document.cookie.split(';');
      let passCookie = null;
      let usernameCookie = null;
      cookieArray.forEach((cookie) => {
        if(cookie.includes('username')){
          usernameCookie = cookie.substring(cookie.indexOf('=') + 1);
        }else if(cookie.includes('password')){
          passCookie = cookie.substring(cookie.indexOf('=') + 1);
        }
      })
      if(passCookie != null && usernameCookie != null){
        fetch('https://navidtronic2-8b5ef-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(res => {
          let usersInfo = Object.entries(res)
          let isInUsers = usersInfo.some(user => user[1].username == usernameCookie && user[1].password == passCookie)
          if(isInUsers === false){
            navigate('/signin')
          }else{
            console.log('ok');
          }
        })
      }else{
        navigate('/signin')
      }
    }
  }

  return (
    <div className='container'>
      <p className="cart-tltle">سبد خرید</p>
      <div className='cart-main-div'>
        <div className="cart-products-main-div">
          {cartProducts.length === 0 ?
          <p className='cart-empty-mass'>هنوز محصولی به سبد خرید اضافه نکرده اید</p> :
          cartProducts.map(product => <CartProducts key={product[0]} {...product[1]} id={product[0]} deleteHandler={onDelete} />)}
        </div>
        <div className="cart-purchase-main-div">
          <div className="cart-purchase-details-div">
            <p className='cart-purchase-title'>جمع سبد خرید</p>
            <p className='cart-purchase-price'>{new Intl.NumberFormat('fa-IR').format(total)} تومان</p>
          </div>
          <button className='cart-purchase-btn' onClick={() => completeOrderHandler()}>تایید و تکمیل سفارش</button>
        </div>
      </div>
    </div>
  )
}