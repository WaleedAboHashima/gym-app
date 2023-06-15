import React from 'react'
import Sidebar from '../../components/Sidebar'

const Complaints = () => {
  const Qs = [
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
    {
      id: 1,
      username: 'omar',
      phone: "+201065447142",
      email: "omar@gmail.com",
      question:"مساءك لذيذ"
    },
  ]
  return (
      <div className='flex'>
                <div className='flex-1 flex flex-col max-h-screen'>
        <span className='text-2xl text-center bg-neutral-700 px-5 py-3  text-white  w-full '>الشكاوي</span>
          <div className=' grid grid-cols-4  bg-neutral-700 mt-5 mx-5 rounded-t-lg'>
            <span className='md:text-xl text-sm text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>السؤال</span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>الايميل </span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>رقم الهاتف</span>
            <span className='md:text-xl text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>اسم المستخدم</span>
        </div>
                <div className=' bg-neutral-700  mx-5 h-full overflow-auto rounded-b-lg'> 
             {Qs.map((q) => {
          return (
              <div className='grid grid-cols-4 justify-center items-center' key={q.id}>
            <span className='md:text-xl text-xs overflow-hidden  text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{q.question } </span>
            <span className='md:text-xl text-xs overflow-hidden text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{q.email } </span>
              <span className='md:text-xl text-xs overflow-hidden  text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{q.phone }</span>
              <span className='md:text-xl text-xs overflow-hidden  text-center text-white border-r-2 border-b-2 px-3 py-3 border-white border-dashed'>{ q.username}</span>
          </div>
            )
          })}
      </div>
        </div>
            <Sidebar/>
    </div>
  )
}

export default Complaints