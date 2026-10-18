import Cart from '../components/Cart'
import { Helmet } from 'react-helmet-async'

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | سبد خرید</title>
      </Helmet>
      <main>
        <Cart />
      </main>
    </>
  )
}
