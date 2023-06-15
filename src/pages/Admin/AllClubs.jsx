import React from 'react'
import Sidebar from '../../components/Sidebar'
import { IoCheckmark } from "react-icons/io5"
import {AiOutlineClose} from "react-icons/ai"

const AllClubs = ({clubsData}) => {
    return (
      <div className='flex'>
        <div className='flex-1 flex flex-col bg-white pb-10'>
          <span className='text-2xl text-center  bg-neutral-700 px-5 py-3  text-white  w-full '>التحكم بالنوادي</span>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-3 px-5'>
            {clubsData.map((club) => {
              return (
                <div className='flex flex-col justify-center items-center gap-y-3 border-2 border-black h-fit' key={club.id}>
                  <img src='/assets/main-img.jpg' className='w-full ' alt="club Img"/>
                  <span className='text-xl'>{club.name}</span>
                  <div className='flex justify-around w-full items-center'>
                    <span className='text-xl text-red-500 flex items-center cursor-pointer hover:scale-125 transition-all'>حذف<AiOutlineClose/></span>
                    <span className='text-xl text-green-500 flex items-center cursor-pointer hover:scale-125 transition-all' onClick={()=>window.location.pathname=`/admin/edit_club/${club.id}`}>تعديل<IoCheckmark/></span>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
      <Sidebar/>
      </div>
  )
}

export default AllClubs