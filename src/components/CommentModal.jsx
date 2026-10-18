import { FaArrowRight } from 'react-icons/fa6'

export default function CommentModal({onClose}) {
  return (
    <div className='w-full h-screen bg-[#00000065] fixed top-0 left-0 z-10' onClick={onClose}>
        <div className='w-70 h-76 p-4 text-[#f7f7f7] bg-[#393e46] rounded-lg fixed top-[50%] left-[50%] transform-[translate(-50%,-50%)] max-sm:w-64 max-sm:h-68 max-sm:p-3' onClick={e => e.stopPropagation()}>
            <div className='flex items-center justify-between'>
                <FaArrowRight  className='text-[1.3rem] cursor-pointer max-sm:text-[1.1rem]' onClick={onClose}/>
                <p className='text-[1.2rem] max-sm:text-[1rem]'>ثبت دیدگاه</p>
                <div className='w-[1.3rem] max-sm:w-[1.1rem]'></div>
            </div>
            <p className='w-full text-[1rem] mt-4 mb-2 max-sm:text-[0.9rem] max-sm:mt-3 max-sm:mb-1'>متن دیدگاه:</p>
            <textarea name="comment" autoFocus className='w-full h-36 p-2 text-[0.9rem] text-[#393e46] bg-[#f7f7f7] rounded-[5px] resize-none overflow-y-hidden max-sm:h-34 max-sm:text-[0.8rem] max-sm:p-1'></textarea>
            <button className='w-full h-9 mt-2 bg-[#6d9886] rounded-[5px] text-[1.1rem] text-[#f7f7f7] cursor-pointer max-sm:h-8 max-sm:mt-1 max-sm:text-[1rem]'>ثبت</button> 
        </div>
    </div>
  )
}
