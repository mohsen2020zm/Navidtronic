import Header from "../Components/Header/Header"
import AllProducts from "../Components/AllProducts/AllProducts"
import Footer from "../Components/Footer/Footer"
import { Helmet } from 'react-helmet-async'

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | محصولات</title>
      </Helmet>
      <Header />
      <main>
        <AllProducts />
      </main>
      <Footer />
    </>
  )
}
