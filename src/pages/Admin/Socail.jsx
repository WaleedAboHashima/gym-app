import React from 'react'
import Sidebar from '../../components/Sidebar'
import { IoCheckmark } from "react-icons/io5"
const Socail = () => {
  return (
    <div className='flex '>
      <div className='flex flex-1  min-h-screen flex-col items-end bg-slate-100'>
        <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full '>مواقع التواصل</span>
        <div className='flex flex-col w-full justify-center items-center my-10 gap-y-10 h-full '>
          <div className='flex w-full items-center justify-center'>
            <IoCheckmark className='mr-2 text-white bg-gray-600 text-lg h-full w-fit rounded-md hover:scale-125 transition-all cursor-pointer'/>
            <input type='text' placeholder='Facebook URL Profile' className='w-full px-5 py-3 xl:w-1/3 rounded-xl' />
          </div>
          <div className='flex w-full items-center justify-center'>
            <IoCheckmark className='mr-2 text-white bg-gray-600 text-lg h-full w-fit rounded-md hover:scale-125 transition-all cursor-pointer'/>
          <input type='text' placeholder='WhatsApp Number' className='w-full px-5 py-3 xl:w-1/3 rounded-xl'/>
          </div>
          <div className='flex w-full items-center justify-center'>
            <IoCheckmark className='mr-2 text-white bg-gray-600 text-lg h-full w-fit rounded-md hover:scale-125 transition-all cursor-pointer'/>
          <input type='text' placeholder='Instgram URL Profile' className='w-full px-5 py-3 xl:w-1/3 rounded-xl'/>
          </div>
          </div>
          </div>
          <Sidebar />
      </div>
  )
}

export default Socail