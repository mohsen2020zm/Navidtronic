import { Link } from 'react-router-dom'

export default function CartProducts({id, name, price, img, deleteHandler}) {
  return (
    <div className='w-90 flex items-center my-4 ml-4 [&>img]:w-40 [&>img]:rounded-[5px] [&>img]:mix-blend-multiply max-md:ml-0 max-md:my-3 max-md:w-82 max-md:[&>img]:w-36 max-sm:my-2 max-sm:w-74 max-sm:[&>img]:w-32'>
        {img ? <img src={import.meta.env.BASE_URL + img} alt='product-img' /> : <img src={`${import.meta.env.BASE_URL}/images/no-pic.jpg`} alt='no-pic-img' />}
        <div className='w-44 mr-6 max-md:w-40 max-md:mr-8 max-sm:w-36 max-sm:mr-6'>
          <Link to={`/product-details/${id}`}>
            <p className="w-full text-[1.2rem] text-[#393e46] font-semibold my-2 whitespace-nowrap overflow-hidden text-ellipsis max-md:text-[1.1rem] max-sm:text-[1rem]">{name}</p> 
          </Link>
          <p className="text-[1.1rem] text-[#393e46] my-2 max-md:text-[1rem] max-sm:text-[0.9rem]">{new Intl.NumberFormat('fa-IR').format(price)} تومان</p>
          <button className='w-20 h-[1.8rem] rounded-[5px] bg-[#6d9886] text-[1rem] text-[#f7f7f7] cursor-pointer max-md:w-18 max-md:h-[1.7rem] max-md:text-[0.9rem] max-sm:w-16 max-sm:h-[1.6rem] max-sm:text-[0.8rem]' onClick={() => deleteHandler(name)}>حذف</button>
        </div>
    </div>
  )
}
