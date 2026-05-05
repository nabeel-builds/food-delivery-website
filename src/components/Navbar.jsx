import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux'


const Navbar = () => {

  let { input, setInput, Cat, setCat, showCart, setShowCart } = useContext(dataContext)
  useEffect(() => {

    let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCat(newList)

  }, [input])

  let items = useSelector(state => state.cart)
  console.log(items)


  return (
    <div id='nav' className='w-full h-[100px] flex justify-between items-center px-5'>
      <div id='logo' className="bg-white w-[60px] h-[60px] flex justify-center items-center rounded-xl shadow-xl cursor-pointer hover:scale-120 transition-all">
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>
      <form onSubmit={(e) => (e.preventDefault())} className='w-[60%] h-[60px] bg-white rounded-xl flex items-center px-5 gap-5 shadow-xl'>
        <Search className='w-[30px] h-[30px] text-green-500 cursor-pointer 
        hover:scale-120 transition-all' />
        <input type="text" placeholder='Search your dishes' className='w-full outline-none text-[20px]' onChange={(e) => setInput(e.target.value)} value={input} />
      </form>
      <div className='bg-white w-[60px] h-[60px] flex justify-center items-center rounded-xl shadow-xl cursor-pointer relative hover:scale-120 transition-all' onClick={() => {
        setShowCart(true)
      }}>
        <span className='absolute top-0 right-2 text-green-500 font-semibold'>{items.length}</span>
        <ShoppingBag className='w-[30px] h-[30px] text-green-500 ' />
      </div>
    </div>
  )
}

export default Navbar