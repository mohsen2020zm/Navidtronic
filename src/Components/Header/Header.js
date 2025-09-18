import './Header.css'
import NavBar from "../NavBar/NavBar"

export default function Header({children}) {
  return (
    <header>
      <div className="container">
        <NavBar />
        {children}
      </div>
    </header>
  )
}
