import Header from "../Components/Header/Header"
import ProductsPreview from "../Components/ProductsPreview/ProductsPreview"
import Footer from "../Components/Footer/Footer"
import TextSection from "../Components/TextSection/TextSection"
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>نویدترونیک | صفحه اصلی</title>
      </Helmet>
      <Header>
        <div className="home-header-main-div">
            <img src="images/electric-board1.png" alt="electronic-board" />
            <div className="header-text-div">
                <h1>نویدترونیک<br/> محصولات الکترونیکی <br/>برای هر ایده ای</h1>
                <button onClick={() => navigate('/products')}>مشاهده محصولات</button>
            </div>
        </div>
      </Header>
      <main>
        <ProductsPreview />
        <TextSection />
      </main>
      <Footer />
    </>
  )
}
