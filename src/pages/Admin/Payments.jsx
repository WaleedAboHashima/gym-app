import React from 'react'
import Sidebar from '../../components/Sidebar'

const Payments = () => {
  return (
    
      <div className='flex'>
      <div className='flex-1 flex-col  justify-center items-center min-h-screen gap-y-10  bg-slate-100'>
        <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full flex justify-center '>وسائل الدفع</span>
        <div className='flex  flex-col h-full items-center justify-center gap-y-5 '>
          <span className='text-xl text-gray-500  '>PayPal Configration </span>
          <input type='text' className=' px-3 py-2 w-4/5' placeholder='Sandbox Client ID'/>
          <input type='text' className=' px-3 py-2 w-4/5' placeholder='Sandbox Secert ID'/>
          <input type='text' className=' px-3 py-2 w-4/5' placeholder='Live Client ID'/>
            <input type='text' className=' px-3 py-2 w-4/5' placeholder='Live Secert ID' />
          <select className='bg-gray-500 rounded-md text-xl text-white p-2'>
            <option>Live</option>
            <option>Sandbox</option>
          </select>
          <button className='text-white bg-green-600 text-xl  px-5 py-2 w-fit rounded-lg hover:scale-125 transition-all' >تطبيق التغيرات</button>
          </div>
        </div>
        <Sidebar />
      </div>
  )
}

export default Payments