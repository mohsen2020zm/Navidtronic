import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Cart from '../Components/Cart/Cart'
import { Helmet } from 'react-helmet-async'

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | سبد خرید</title>
      </Helmet>
      <Header />
      <main>
        <Cart />
      </main>
      <Footer />
    </>
  )
}
