import ProductDetails from "../components/ProductDetails"
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function ProductsDetailsPage() {
  
  const {productName} = useParams()

  return (
    <>
      <Helmet>
        <title>{'نویدترونیک | ' + productName}</title>
      </Helmet>
      <main>
        <ProductDetails />
      </main>
    </>
  )
}
