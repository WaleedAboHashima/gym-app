import React from 'react'
import ClubSidebar from '../../components/ClubSidebar'

const VerifyPlayer = () => {
  return (
       <div className='flex'>
      <div className='flex flex-1 items-center justify-center h-screen'>
        <div className='bg-slate-100 flex flex-col justify-center items-center w-fit gap-y-10 py-5 rounded-lg md:w-1/3 '>
          <span className='text-2xl md:text-3xl'>التحقق من رقم الاعب</span>
          <div className='flex justify-around w-full items-center gap-x-5 px-2'>
            <input type='text' placeholder='اكتب رقم الاعب مثال : 12355' className='border-2 border-black rounded-lg md:text-2xl  text-lg px-2 py-1 '/>
            <span className='text-xl md:text-2xl'>اكتب رقم الاعب</span>
          </div>
          <button className='bg-neutral-700 rounded-lg text-white px-3 py-1 text-lg hover:scale-125 transition-all md:text-2xl' onClick={()=>window.location.pathname="/club/player"}>اذهب الي الاعب</button>
        </div>
      </div>
      <ClubSidebar/>
    </div>
  )
}

export default VerifyPlayer