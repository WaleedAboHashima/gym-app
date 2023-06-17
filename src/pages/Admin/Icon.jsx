import React from 'react'
import Sidebar from '../../components/AdminSidebar'

const Icon = () => {
  return (
 <div className='flex bg-slate-100'>
      <div className='flex-1 flex justify-center  items-center min-h-screen gap-y-10'>
        <div className='md:flex-row flex-col-reverse flex items-center gap-y-10'>
        <button className='text-2xl rounded-lg bg-gray-600 px-5 py-3 hover:scale-125 transition-all text-white  cursor-pointer w-fit'>تغيير</button>
                  <input type='file' className='text-lg md:ml-10 w-10/12 border-2 px-5 py-2 border-gray-600 rounded-lg' />
        </div>
          </div>
          <Sidebar />
      </div>
  )
}

export default Icon