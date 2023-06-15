import React from 'react'
import Sidebar from '../../components/Sidebar'

const Privacy = () => {
  return (
    <div className='flex '>
      <div className='flex flex-1 min-h-screen flex-col items-end bg-slate-100'>
        <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full '>سياسه الخصوصيه</span>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                  <textarea className='text-xl border-slate-100 border-2 resize-none p-3 m-3 py-1 my-5 h-full text-right rounded-xl w-10/12'>تعتبر سياسه الخصوصيه</textarea>
        <button className='text-2xl rounded-lg bg-gray-600 px-5 py-3 hover:scale-125 transition-all text-white place-self-center  cursor-pointer w-fit mb-5'>تغيير</button>
        </div>
      </div>
            <Sidebar/>
    </div>
  )
}

export default Privacy