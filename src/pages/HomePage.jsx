import ProductsPreview from "../components/ProductsPreview"
import TextSection from "../components/TextSection"
import { Helmet } from 'react-helmet-async'

export default function HomePage() {
  

  return (
    <>
      <Helmet>
        <title>نویدترونیک | صفحه اصلی</title>
      </Helmet>
      <main>
        <ProductsPreview />
        <TextSection />
      </main>
    </>
  )
}
