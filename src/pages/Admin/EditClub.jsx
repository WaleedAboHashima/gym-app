import React, { useState, useEffect } from 'react'

import Sidebar from '../../components/Sidebar'
import { useParams } from 'react-router-dom'

const EditClub = ({clubsData}) => {
    const { id } = useParams()
    const [club, setClub] = useState({})
    useEffect(() => {
        setClub(clubsData.filter(club => club.id === Number(id))[0])
    }, [clubsData,id])
  return (
    <div className='flex min:h-screen '>
        <div className='flex-1 flex flex-col bg-stone-100 px-5 items-end gap-y-5 rounded-lg'>
     <span className='text-2xl text-center  bg-neutral-700 px-5 py-3  text-white  w-full '>التعديل علي  نادي</span>
                    <div className='flex flex-col w-3/5  '>
            <div className='flex justify-end gap-x-3'>
              <select type='text' className='border-2 text-right border-black  px-3 py-1 text-xl'>
                <option>ذكور</option>
                <option>اناث</option>
                <option>مشترك</option>
              </select>
              <select type='text' className='border-2 text-right border-black  px-3 py-1 text-xl'>
                <option>يومين</option>
                <option>ايام 3 </option>
                <option>4 ايام</option>
              </select>
              <input type='text' className='border-2 text-right border-black sm:w-1/3 px-3 py-1 text-xl' placeholder='اسم النادي'/>
            </div>
            </div>
          <div className='flex sm:flex-row flex-col-reverse sm:gap-x-5'>
            <div className='flex flex-col justify-center items-end'>
              <span className='text-xl text-right'>مواعيد العمل</span>
              <div className='flex justify-around gap-x-5'>
                <div>
                  <input type='time'/>
                  <span className='text-lg ml-1'>الي</span>
                </div>
                <div>
                  <input type='time' />
                  <span className='text-lg ml-1'>من</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xl text-right'>شعار النادي</span>
                <input type='file' className=' text-sm w-full' />
            </div>
            </div>

          <div className='w-full justify-center items-end flex flex-col'>
            <span className='text-xl'>عنوان النادي</span>
            <img src='/assets/map.png' alt='map'/>
          </div>
          <div className='flex flex-col w-full'>
            <span className='text-xl text-right'>عن النادي</span>
            <span className='text-md text-right text-gray-500'>أدخل وصف النادي</span>
            <textarea className='w-full  resize-none border-2 border-black min-h-52 text-right'></textarea>
          </div>
          <div className='flex flex-col w-full'>
            <span className='text-xl text-right'>صور النادي</span>      
            {/* if no Imgs*/}
            {/* <span>قم باضافه صور النادي</span> */}
            {/*if imgs*/}
            <div className='flex gap-x-3 justify-center items-center'>
            <img src='/assets/club1.jpg' alt='club img' className='w-1/4'/>
            <img src='/assets/club2.jpg' alt='club img' className='w-1/4'/>
            <img src='/assets/club3.jpg' alt='club img' className='w-1/4'/>
              <div className='w-1/4 h-full flex justify-center items-center' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover", border: "2px solid black" }} >
                <span className='text-white text-sm'>4 صور اخرين</span>
              </div>
            </div>
            <button className='text-white bg-green-600 text-xl my-5 px-5 py-2 w-fit rounded-lg'>حفظ</button>

          </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default EditClub