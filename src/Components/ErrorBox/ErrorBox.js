import './ErrorBox.css'
import { BiSolidMessageAltError } from "react-icons/bi";

export default function ErrorBox({massage}) {
  return (
    <div className='main-massage-div'>
        <BiSolidMessageAltError />
        <p className='box-massage-text'>{massage}</p>
    </div>
  )
}
