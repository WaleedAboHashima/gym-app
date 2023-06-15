import React from 'react'
import Sidebar from '../../components/Sidebar'

const Img = () => {
  return (
      <div className='flex bg-slate-100'>
      <div className='flex-1 flex flex-col md:flex-row justify-center items-center gap-y-10 gap-x-10 py-10 min-h-screen'>
          <span className='text-2xl rounded-lg bg-neutral-700 px-5 py-3 hover:scale-125 transition-all text-white cursor-pointer' onClick={()=>window.location.pathname="/admin/imgs/logo"}>تغيير لوجو الموقع</span>
          <span className='text-2xl rounded-lg bg-neutral-700 px-5 py-3 hover:scale-125 transition-all text-white  cursor-pointer' onClick={()=>window.location.pathname="/admin/imgs/logo"}>تغيير صوره الموقع</span>
          </div>
          <Sidebar/>
    </div>
  )
}

export default Img