import React from 'react'
import Sidebar from '../../components/Sidebar'

const UsersQuestions = () => {
  return (
<div className='flex'>
      <div className='flex flex-1 min-h-screen flex-col items-end bg-slate-100'>
                <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full '>الاسئله الشائعه</span>
        <div className='w-full flex flex-col justify-center items-center h-full'>
          <div className='bg-white flex flex-col justify-center items-center md:w-1/2 w-3/4 py-7 rounded-2xl'>
            <div className='flex flex-col md:w-1/2 w-10/12 items-end justify-center gap-y-5 '>
            <span className='md:text-3xl text-xl'>السؤال</span>
          <span className='md:text-xl text-sm text-right text-gray-500 w-full' >ادخل السؤال التوضيحي للمستخدمين</span>
          <input type='text' placeholder='السؤال' className='w-full text-right text-xl px-5 py-2 border-2 border-gray-600 rounded-lg'/>
          </div>
          <div className='flex flex-col md:w-1/2 w-10/12 items-end justify-center gap-y-5 mt-16'>
            <span className='md:text-3xl text-xl'>الاجابه</span>
          <span className='md:text-xl text-sm text-right text-gray-500 w-full' >اجب علي  السؤال</span>
          <textarea placeholder='الاجابه' className='w-full text-right text-xl px-5 py-2 border-2 border-gray-600 rounded-lg min-h-full resize-none'></textarea>
          </div>
          <button className='md:text-2xl text-lg rounded-lg bg-neutral-700 px-5 py-3 hover:scale-125 transition-all text-white place-self-start  cursor-pointer w-fit sm:mt-5 mt-20  ml-5'>اضف السؤال</button></div>
      </div>
          </div>
            <Sidebar/>
    </div>
  )
}

export default UsersQuestions