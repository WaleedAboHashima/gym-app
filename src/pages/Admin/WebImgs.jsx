import React, { useState } from 'react'
import Sidebar from '../../components/AdminSidebar'
import { useDispatch } from 'react-redux';
import { IconHandler } from './../../apis/admin/ChangeIcon';
import { LogoHandler } from './../../apis/admin/ChangeLogo';

const Icon = () => {
  const dispatch = useDispatch();
  const [logo, setLogo] = useState();
  const [icon, setIcon] = useState();
  const [error, setError] = useState();

  const handleIcon = () => {
    const formData = new FormData();
    formData.append("img", icon[0])
    dispatch(IconHandler(formData)).then((res) => {
      if (res.payload.status === 200) {
        setError("تم التغيير")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      else {
        setError("هناك خطأ")
      }
    })
  }

  const handleLogo = () => {
    const formData = new FormData();
    formData.append("img", logo[0])
    dispatch(LogoHandler(formData)).then((res) => {
      if (res.payload.status === 200) {
        setError("تم التغيير")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      else {
        setError("هناك خطأ")
      }
    })
  }
  return (
 <div className='flex bg-slate-100'>
      <div className='flex-1 flex flex-col justify-center  items-center min-h-screen gap-y-10'>
        <form onSubmit={(e) => { e.preventDefault(); handleLogo() }} className='md:flex-row flex-col-reverse flex items-center gap-y-10 gap-x-5'>
        <button className='text-2xl rounded-lg bg-gray-600 px-5 py-3 hover:scale-125 transition-all text-white  cursor-pointer w-fit'>تغيير</button>
          <input onChange={(e) => setLogo(e.target.files)} type='file' className='bg-neutral-700 text-sm md:w-fit w-1/2  text-white px-5 py-3  rounded-lg cursor-pointer' />
          <span className='text-xl'>شعار الموقع</span> {/*logo*/}
        </form>
        <form onSubmit={(e) => { e.preventDefault(); handleIcon() }} className='md:flex-row flex-col-reverse flex items-center gap-y-10 gap-x-5'>
        <button className='text-2xl rounded-lg bg-gray-600  px-5 py-3 hover:scale-125 transition-all text-white  cursor-pointer w-fit'>تغيير</button>
          <input onChange={(e) => setIcon(e.target.files)} type='file' className='bg-neutral-700 text-sm md:w-fit w-1/2  text-white px-5 py-3  rounded-lg cursor-pointer' />
          <span className='text-xl'>صوره الموقع</span> {/*img*/}
        </form>
        <div className="text-red-500 font-bold">{error}</div>
      </div>
          <Sidebar/>
      </div>
  )
}

export default Icon