import SignupForm from "../components/SignupForm"
import { Helmet } from 'react-helmet-async'

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>نویدترونیک | ثبت نام</title>
      </Helmet>
      <SignupForm />
    </>
  )
}
