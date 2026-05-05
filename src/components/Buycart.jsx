import React from 'react'
import image1 from '../assets/image1.avif'
import { IoTrashBin } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../Redux/CartSlice';

const Buycart = ({name,image,id,price,qty}) => {

    let dispatch = useDispatch()

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between mt-5 rounded-md'>
        <div id='right' className='w-[60%] h-full flex gap-2'>
            <div className='w-[60%] h-full overflow-hidden'>
                <img src={image} alt="" className='object-cover rounded-lg' />
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-600 font-semibold'> {name} </div>
                <div className='w-full h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 text-xl'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 font-semibold hover:bg-gray-200 cursor-pointer' onClick={()=>{
                        qty>1?dispatch(DecreamentQty(id)):1
                    }}>-</button>
                    <span className='text-base w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400 cursor-pointer'>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 font-semibold hover:bg-gray-200 cursor-pointer' onClick={()=>dispatch(IncreamentQty(id))}>+</button>
                </div>
            </div>
        </div>
        <div id='left'>
            <div className='flex flex-col items-end gap-6'>
                <span className='text-xl text-green-400 font-semibold'>Rs {price}</span>
                <IoTrashBin className='w-[20px] h-[20px] text-red-500 cursor-pointer hover:scale-120 transition-all' onClick={()=>dispatch(RemoveItem(id))} />
            </div>
        </div>
    </div>
  )
}

export default Buycart