import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slice/CartSlice';
import { toast } from 'react-hot-toast';
function CartItem({item}) {

    const dispatch = useDispatch();

    const removeItemCart =() => {
        dispatch(remove(item.id));
        toast.error("Removed Item")
    }


  return (
    <div>
        <div className='flex mx-auto flex-row border-b-2 border-green-600 py-3 my-4 lg:w-[70%] gap-4'>
            <div>
                <img src={item.image} alt="productImg" className='w-[180px] h-[180px] object-contain'/>
            </div>
            <div>
                <h1 className='text-gray-700 text-2xl font-bold'>{item.title}</h1>
                <h1 className='text-gray-500 text-sm'>{item.description.split(" ").slice(0,13).join(" ") + "..."}</h1>
                <div className='flex justify-between items-center mt-[24px]'>
                    <p className='text-green-600 font-semibold'>${item.price}</p>
                    <div className='bg-green-400 p-2 rounded-full cursor-pointer'>
                        <MdDelete onClick={removeItemCart}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem