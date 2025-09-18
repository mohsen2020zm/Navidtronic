import SigninForm from "../Components/SigninForm/SigninForm"
import { Helmet } from 'react-helmet-async'

export default function SigninPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | ورود</title>
      </Helmet>
      <SigninForm />
    </>
  )
}
