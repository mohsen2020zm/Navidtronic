import './Modal.css'
import { BiSolidMessageAltError } from "react-icons/bi";

export default function Modal({massage, onNo, onYes}) {
  return (
    <div className='modal-main-div'>
        <BiSolidMessageAltError />
        <p className='modal-massage'>{massage}</p>
        <div className='modal-btns-div'>
            <button className='modal-btns' onClick={() => onNo()}>خیر</button>
            <button className='modal-btns' onClick={() => onYes()}>بله</button>
        </div>
    </div>
  )
}
