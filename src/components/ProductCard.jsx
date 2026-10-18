import { useNavigate } from 'react-router-dom'

export default function ProductCard({img, name, price}) {
  const navigate = useNavigate()
  return (
    <div className='w-52 h-72 my-4 p-4 mx-auto bg-white cus-shadow rounded-lg flex flex-col items-center justify-evenly cursor-pointer [&>img]:w-full [&>img]:rounded-[5px] [&>img]:mix-blend-multiply max-md:w-34 max-md:h-50 max-md:p-2' onClick={() => navigate(`/product-details/${name}`)}>
        {img ? <img src={img} alt='product-img' /> : <img src="/images/no-pic.jpg" alt='no-pic-img' />}
        <div className='w-full'>
            <p className='my-2 text-[#393e46] w-full text-[1.2rem] font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-md:text-[1rem]'>{name}</p>
            <p className="my-2 text-[#393e46] text-[1.1rem] max-md:text-[0.8rem]">{new Intl.NumberFormat('fa-IR').format(price)} تومان</p>
        </div>
    </div>
  )
}
