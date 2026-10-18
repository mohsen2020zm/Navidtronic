import About from "../components/About"
import { Helmet } from 'react-helmet-async'

export default function aboutPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | درباره ما</title>
      </Helmet>
      <main>
        <About />
      </main>
    </>
  )
}
