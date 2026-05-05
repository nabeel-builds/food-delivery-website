import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../../Categories'
import Card from '../components/Card'
import { dataContext } from '../context/UserContext'
import { food_items } from '../food'
import { RxCross2 } from "react-icons/rx";
import Buycart from '../components/Buycart'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const Home = () => {

  let {Cat, setCat, input, showCart, setShowCart}=useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCat(food_items)
    }
    else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCat(newList)
    }
  }

  let items = useSelector(state=>state.cart)

  let subtotal = items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryFee = 20
  let taxes = subtotal*0.5/100
  let Grandtotal = Math.floor(subtotal+deliveryFee+taxes)


  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Navbar />
      {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        {Categories.map((item, idx) => {
          return <div key={idx} className='w-[140px] h-[140px] bg-white flex flex-col items-center p-5 gap-2 text-[16px] font-semibold text-gray-600 rounded-lg shadow-xl cursor-pointer hover:bg-green-200 hover:scale-120 transition-all duration-200' onClick={() => {
            filter(item.name)
          }}>
            {item.icon}
            {item.name}
          </div>
        })}
      </div>:null}
      
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {Cat.length>1?Cat.map((item, idx) => (
          <Card key={idx} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )):<div className='text-center text-4xl text-green-500 font-bold pt-5'>No Dish Found</div>}
        
      </div>
      <div className={`w-full md:w-[40vw] h-full fixed flex flex-col items-center overflow-auto top-0 right-0 bg-white shadow-xl p-6 ${showCart?"translate-x-0 transition-all duration-500":"translate-x-full transition-all duration-500"} `}>
        <header className='w-full flex justify-between items-center'>
            <span className='text-xl text-green-400 font-semibold'>Ordered Items</span>
            <RxCross2 className='w-[23px] h-[30px] text-green-400 text-2xl font-bold cursor-pointer hover:text-gray-600 hover:scale-120 transition-all' onClick={()=>{setShowCart(false)}} />
        </header>
        {items.length>0?<>
        <div className='w-full mt-7 flex flex-col gap-1 '>
          {items.map((item)=>(
        <Buycart name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-500 mt-7 flex flex-col gap-4 p-8'>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Delivery Fees</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
          </div>
        </div>
        <div className='w-full flex justify-between items-center pt-3 px-7'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-green-400 font-semibold text-2xl'>Rs {Grandtotal}/-</span>
          </div>
          <button className='w-[80%] p-3 bg-green-500 text-white hover:bg-green-400 transition-all rounded-lg cursor-pointer mt-5 font-semibold' onClick={()=>{toast.success("Order Placed")}}>Place Order</button>
        </>:
        <div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart</div>}
        
      </div>
    </div>
  )
}

export default Home