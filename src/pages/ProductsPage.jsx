import AllProducts from "../components/AllProducts"
import { Helmet } from 'react-helmet-async'

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | محصولات</title>
      </Helmet>
      <main>
        <AllProducts />
      </main>
    </>
  )
}
