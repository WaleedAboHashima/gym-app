import React from 'react'
import Sidebar from '../../components/Sidebar'

const Reports = () => {
  const clubs = [
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 1,
      name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 2,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 3,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 4,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 5,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 6,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
    {
      id: 7,
            name:"جيم البطوله",
      quantitySub: 10,
      city: "غزه",
      daily: 150,
      monthly: 850,
      yearly:3400
    },
  ]
  return (
      <div className='flex'>
      <div className='flex-1 flex flex-col max-h-screen'>
        <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full '>تقارير النوادي</span>
          <div className=' grid grid-cols-3 md:grid-cols-6  bg-neutral-700 mt-5 mx-5 rounded-t-lg'>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex'>الربح السنوي</span>
            <span className='text-xl text-center text-white border-r-2 border-b-2  py-3 border-white border-dashed hidden md:flex'>الربح الشهري</span>
            <span className='text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed hidden md:flex'>الربح اليومي</span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>المدينه </span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>عدد المشتركين</span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>اسم النادي</span>
        </div>
        <div className=' bg-neutral-700  mx-5 h-3/4 overflow-auto rounded-b-lg'> 
             {clubs.map((club) => {
          return (
              <div className='grid grid-cols-3 md:grid-cols-6 justify-center items-center'>
            <span className='text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed hidden md:flex'>{club.yearly } </span>
            <span className='text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed hidden md:flex'>{club.monthly } </span>
            <span className='text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed hidden md:flex'>{club.daily } </span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{club.city } </span>
              <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{club.quantitySub }</span>
              <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{ club.name}</span>
          </div>
            )
          })}
      </div>
        <div className='flex flex-col p-4 '>
          <div className='flex gap-x-5 w-full justify-end md:items-center md:flex-row flex-col-reverse items-end'>
            <div className='flex items-center '>
                    <span className='md:text-xl text-lg  text-gray-500'> x123@B </span>
            <span className='md:text-2xl text-xl'> رقم الاشتراك : </span>
          </div>
        <div className='flex items-center'>
              <span className='md:text-xl text-lg text-gray-500'> تامر حسن النخال </span>
            <span className='md:text-2xl text-xl'> الاعب الاكثر اشتراكا هو : </span>
        </div>
          </div>
          <div className='flex gap-x-5 w-full justify-end items-center'>
            <span className='md:text-xl text-lg text-gray-500'>(جيم البطوله)</span>
            <span className='md:text-2xl text-xl'> النادي الاكثر اشتراكا هو : </span>
          </div>
          <div className='flex gap-x-5 w-full justify-end items-center'>
            <span className='md:text-xl text-lg text-gray-500'>غزه</span>
            <span className='md:text-2xl text-xl'> المدينه الاكثر اشتراكا  : </span>
          </div>
         </div>
          </div>
          <Sidebar />
      </div>
  )
}

export default Reports