import ProductDetails from "../Components/ProductDetails/ProductDetails"
import Header from '../Components/Header/Header'
import { Helmet } from 'react-helmet-async'

export default function ProductsDetailsPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | جزئیات محصول</title>
      </Helmet>
      <Header />
      <main>
        <ProductDetails />
      </main>
    </>
  )
}
