import Navbar from "./Navbar"
import HeaderIntroduction from './HeaderIntroduction'
import { useLocation } from 'react-router-dom'

export default function Header() {

  const locationInfo = useLocation()

  return (
    <header className="bg-[#393e46]">
      <div className="container">
        <Navbar />
        {locationInfo.pathname === '/' && <HeaderIntroduction />}
      </div>
    </header>
  )
}
