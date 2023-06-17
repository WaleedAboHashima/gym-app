import React from 'react'
import ClubSidebar from '../../components/ClubSidebar'

const ClubReport = () => {
  const club = [
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
    {
      id:1,
    name: "محمد",
    code: "x123@B",
    subType:"monthly",
    country: "غزه",
    subStart:"12-3-2022",
    endStart:"12-3-2022"
  },
  
  ]
  return (
    <div className='flex'>
<div className='flex-1 flex flex-col max-h-screen '>
        <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full '>تقارير النوادي</span>
          <div className=' grid grid-cols-3 md:grid-cols-6  bg-neutral-700 mt-5 mx-5 rounded-t-lg'>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex justify-center items-center'>انتهاء الاشتراك </span>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex justify-center items-center'>تاريخ الاشتراك</span>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex justify-center items-center'>باقه الاشتراك</span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 md:px-0 py-3 border-white border-dashed'>المدينه </span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 md:px-0 py-3 border-white border-dashed'>رقم الاشتراك</span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 md:px-0 py-3 border-white border-dashed'>اسم الاعب</span>
        </div>
        <div className=' bg-neutral-700  mx-5 h-3/4 overflow-auto rounded-b-lg'> 
             {club.map((user) => {
          return (
              <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center'>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex justify-center items-center'>{user.endStart } </span>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex justify-center items-center'>{user.subStart } </span>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex justify-center items-center'>{user.subType } </span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 md:px-0 py-3 border-white border-dashed'>{user.country } </span>
              <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 md:px-0 py-3 border-white border-dashed'>{user.code }</span>
              <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 md:px-0 py-3 border-white border-dashed'>{ user.name}</span>
          </div>
            )
          })}
      </div>
          </div>
      <ClubSidebar/>
    </div>
  )
}

export default ClubReport