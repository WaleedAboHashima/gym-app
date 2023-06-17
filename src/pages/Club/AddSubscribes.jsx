import React from 'react'
import ClubSidebar from '../../components/ClubSidebar'
import {BiPencil,BiBlock} from "react-icons/bi"
const AddSubscribes = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex md:flex-1 flex-col-reverse md:flex-row h-screen  justify-evenly items-center bg-slate-100 m-4 rounded-xl'>
         <div className=' md:flex-1 flex flex-col items-end w-full p-5 gap-y-8'>
          <span className='text-2xl'>الباقات المضافه</span>
          <div className='flex w-full justify-around items-center'>
            <div style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} className='relative  w-1/4 flex flex-col items-center justify-center rounded-lg p-5'>
              <BiPencil className='bg-white border-black borderr-2 rounded-full text-xl absolute right-0 top-0 cursor-pointer hover:scale-125 transition-all'/>
              <BiBlock className='text-white bg-red-700 border-black borderr-2 rounded-full text-xl absolute left-0 bottom-0 rotate-90 cursor-pointer hover:scale-125 transition-all' />
              <span className='text-white text-2xl'>يوميا</span>
              <span className='text-white text-xl'>15$</span>
            </div>
            <div style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} className='relative w-1/4 flex flex-col items-center justify-center rounded-lg p-5'>
              <BiPencil className='bg-white border-black borderr-2 rounded-full text-xl absolute right-0 top-0 cursor-pointer hover:scale-125 transition-all'/>
              <BiBlock className='text-white bg-red-700 border-black borderr-2 rounded-full text-xl absolute left-0 bottom-0 rotate-90 cursor-pointer hover:scale-125 transition-all' />
              <span className='text-white text-2xl'>اسبوعيا</span>
              <span className='text-white text-xl'>85$</span>
            </div>
            <div style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} className='relative w-1/4 flex flex-col items-center justify-center rounded-lg p-5'>
              <BiPencil className='bg-white border-black borderr-2 rounded-full text-xl absolute right-0 top-0 cursor-pointer hover:scale-125 transition-all'/>
              <BiBlock className='text-white bg-red-700 border-black borderr-2 rounded-full text-xl absolute left-0 bottom-0 rotate-90 cursor-pointer hover:scale-125 transition-all' />
              <span className='text-white text-2xl'>شهريا</span>
              <span className='text-white text-xl'>340$</span>
            </div>
          </div>
        </div>
        <div className=' flex-col flex w-full items-end p-5 gap-y-3 md:flex-1 md:border-l-2 md:border-neutral-700'>
          <span className='text-2xl md:text-3xl'>اضف باقه اشتراك</span>
          <span className='text-lg  text-gray-500'>اضف بيانات باقه الاشتراك</span>
            <input type='text' placeholder='اسم الباقه' className='text-xl text-right rounded-lg border-2 border-black px-3 py-1 w-full md:w-1/3 md:text-2xl '/>
          <input type='number' placeholder='رسوم الاشتراك' className='text-xl text-right rounded-lg border-2 border-black px-3 py-1 w-full md:w-1/3 md:text-2xl' />
          <select className='text-xl text-right rounded-lg border-2 border-black px-3 py-1 w-full md:w-1/3 md:text-2xl'>
            <option>سنوي</option>
            <option>شهري</option>
            <option>يومي</option>
            <option>اسبوعي</option>
          </select>
          <button className='text-xl  rounded-lg border-2 border-neutral-600 bg-neutral-700 text-center text-white px-3 py-1 w-full md:w-1/3 md:text-2xl hover:scale-125 transition-all'>اضافه</button>
        </div>
      </div>
      <ClubSidebar/>
    </div>
  )
}

export default AddSubscribes