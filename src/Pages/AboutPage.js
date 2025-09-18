import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import About from "../Components/About/About"
import { Helmet } from 'react-helmet-async'

export default function aboutPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | درباره ما</title>
      </Helmet>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}
