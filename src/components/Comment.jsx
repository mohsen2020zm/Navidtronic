import { BiLike, BiDislike } from 'react-icons/bi'

export default function Comment({userName, text, date, likes, dislikes}) {
  return (
    <div className="w-full text-[#393e46] border border-[#393e46] rounded-lg mb-4 p-3 max-md:mb-3 max-sm:mb-2 max-sm:p-2">
        <p className="text-[1.2rem] font-semibold mb-1 max-md:text-[1.1rem] max-sm:text-[1rem]">{userName}</p>
        <p className="text-[1rem] max-md:text-[0.9rem] max-sm:text-[0.8rem]">{text}</p>
        <div className="flex items-center justify-between mt-4 max-md:mt-3 max-sm:mt-2">
            <p className="text-[1rem] max-md:text-[0.9rem] max-sm:text-[0.8rem]">{date}</p>
            <div className="w-18 flex items-center justify-between max-md:w-16 max-sm:w-15">
                <div className="flex items-center">
                  <p className='text-[1rem] max-md:text-[0.9rem] max-sm:text-[0.8rem]'>{new Intl.NumberFormat("fa-IR").format(likes.length)}</p>
                  <div className='w-[1.2rem] mr-1 cursor-pointer max-md:w-[1.1rem] max-sm:w-4'>
                    <BiLike className='text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem]' />
                  </div>
                </div>
                <div className='flex items-center'>
                  <p className='text-[1rem] max-md:text-[0.9rem] max-sm:text-[0.8rem]'>{new Intl.NumberFormat("fa-IR").format(dislikes.length)}</p>
                  <div className='w-[1.2rem] mr-1 cursor-pointer max-md:w-[1.1rem] max-sm:w-4'>
                    <BiDislike className='text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem]' />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
