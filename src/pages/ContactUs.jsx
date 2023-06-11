import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex flex-col justify-evenly items-center w-full my-5 gap-y-10'>
      <div className='flex flex-col gap-y-10 bg-gray-50 shadow-xl rounded-3xl px-5 py-10 w-2/3' >
        <div className='flex flex-col items-center justify-center'>
          <span className='md:text-3xl text-xl'>تواصل معنا</span>
          <span className='md:text-lg text-sm text-gray-500'>بيانات التواصل</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='md:text-3xl text-xl'>المملكه العربيه السعوديه</span>
          <span className='md:text-lg text-sm text-gray-500'>الرقم الموحد: 111111111 (المملكة العربية السعودية).</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='md:text-3xl text-xl'>المملكة العربية السعودية</span>
          <span  className='md:text-lg text-sm text-gray-500'>الرقم الموحد: 111111111 (المملكة العربية السعودية).</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-y-10 bg-gray-50 shadow-xl rounded-3xl px-5 py-10 w-2/3'>
        <div className='flex flex-col items-center justify-center'>
          <span className='md:text-3xl text-xl mb-3'>نموذج التواصل</span>
          <span className='md:text-lg text-sm text-gray-500'>أرسل رسالة لنا</span>
        </div>
        <form onClick={(e)=>e.preventDefault()} className='flex flex-col w-full items-center justify-center gap-y-5'>
          <input type='text' placeholder='الاسم' className='md:w-2/3 w-3/4 border-black border-2 text-right md:py-3 py-2 px-5 md:text-xl text-md rounded-md'/>
          <input type='email' placeholder='البريد الالكتروني' className='md:w-2/3 w-3/4 border-black border-2 text-right md:py-3 py-2 px-5 md:text-xl text-md rounded-md'/>
          <input type='text' placeholder='الهاتف المحمول' className='md:w-2/3 w-3/4 border-black border-2 text-right md:py-3 py-2 px-5 md:text-xl text-md rounded-md'/>
          <textarea placeholder='الرسالة' className='md:w-2/3 w-3/4 border-black border-2 text-right md:py-3 py-2 px-5 md:text-xl text-md rounded-md'></textarea>
          <button className='bg-black md:text-2xl text-lg text-white px-5 py-2 rounded-md'>ارسل</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs