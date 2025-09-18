import NotFound from '../Components/NotFound/NotFound'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | خطای 404</title>
      </Helmet>
      <NotFound />
    </>
  )
}
