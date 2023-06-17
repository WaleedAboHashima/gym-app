import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ClubSub = ({clubsData}) => {
    const { club_id } = useParams()
        const [club, setClub] = useState("")
    useEffect(() => {
        setClub(clubsData.filter(club => club.id === Number(club_id))[0])
    }, [clubsData,club_id])
  return (
      <div className='flex justify-center items-center md:my-10  '>
        <div className='flex flex-row-reverse   bg-gray-50 shadow-xl rounded-3xl sm:p-5 p-3 md:w-9/12 w-full'>
          <div className='flex flex-col flex-1 gap-y-10  items-end  py-5' >
                    <div className='flex  justify-between text-right'>
                        <div className='flex-1'>
                            <img src='/assets/club-gym2.png' alt='النادي' className='w-full ' /></div>
                      <div className='flex flex-col gap-y-2 flex-1 justify-evenly'>
                          <div className='flex flex-col'>
                              <span className='md:text-4xl text-xl'>النادي الحالي</span>
                              <span className='text-gray-500 md:text-lg text-sm'>     انتا مشترك بنادي ( {club.name} )</span>
                          </div>
                          <div className='flex flex-col  items-end'>
                                <span className='md:text-4xl text-xl mb-2'>بطاقه التعريف</span>
                            <div className='text-gray-500 text-lg flex flex-col justify-center items-center gap-y-10 py-5 rounded-xl w-2/3' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
                                <span className='md:text-3xl text-lg text-white '>{/*username*/  } عامر محسن النخال</span>
                                <span className='md:text-3xl text-lg text-white'>{/*userId*/  } 521xa4</span>
                                </div>
                    </div>
                       
                    </div>
                  </div>
                  <div className='flex flex-col items-end text-right w-full '>
                      <div className='flex sm:flex-row flex-col-reverse justify-between w-full'>
                          <div className=' flex-1 flex flex-col justify-center items-center w-full sm:mt-0 mt-5 '>
                              <span className='md:text-4xl text-xl'>:العنوان</span>
                              <span className='md:text-xl text-lg text-gray-500'>جده-السعوديه</span>
                            <button className='bg-red-700 text-white rounded-md md:text-xl text-lg px-5 py-3 hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all mt-10' onClick={()=>window.location.pathname=`/pay/${club.id}`}>تجديد الاشتراك</button>
                          </div>
                          <div className='flex flex-row flex-2 w-fit mt-10 sm:-mr-4 rounded-md px-10 py-5' style={{backgroundImage:"url('/assets/main-img-blured.jpg')",backgroundPosition:"center","backgroundSize":"cover"}} >
                                <div className='flex gap-x-5  '>
                                    <div className='flex-1 w-fit px-5 py-2 flex flex-col  justify-center items-center rounded-md border-white border-4' style={{backgroundImage:"url('/assets/main-img-blured.jpg')","backgroundSize":"cover"}}>
                                        <span className='md:text-xl text-sm text-white w-full text-center'>باقه الاشتراك</span>
                                        <span className='md:text-xl text-sm text-white w-full text-center'>شهريا</span>
                                        <span className='md:text-xl text-sm text-white w-full text-center'>$ 340</span>
                                    </div>
                                    <div className='grid grid-cols-2 justify-center items-stretch ' >
                                            
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'>عامر حسن النخال</span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'> الاسم </span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'>x123ab</span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'> رقم الاشتراك </span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'>2023-6-15</span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'>تاريخ الاشتراك</span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'>2023-7-15</span>
                                                <span className='text-white md:text-xl text-sm  border-2 border-white px-2 py-1'>تاريخ الانتهاء</span>
                                           
                                         
                                </div>
                            </div>
                        </div>
                        <span className='md:text-4xl text-xl mb-2 ml-2'>بيانات الاشتراك</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default ClubSub



//  <div className='flex justify-between items-center'>
//                       <div className='flex justify-center items-center flex-1 text-center'>
//                           <button className='bg-red-700 text-white rounded-md text-xl px-5 py-3 hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all' onClick={()=>window.location.pathname=`/pay/${club.id}`}>تجديد الاشتراك</button>
//                       </div>
//                       <div className='flex flex-col mt-10  items-end flex-1'>
//                             <span className='text-4xl mb-3'>: صور داخل النادي</span>
//                             <div className='flex gap-x-5 items-start justify-end '>
//                                 <img src='/assets/club1.jpg' alt='النادي' className='w-1/3'/>
//                                 <img src='/assets/club2.jpg' alt='النادي' className='w-1/3'/>
//                                 <img src='/assets/club3.jpg' alt='النادي' className='w-1/3'/>
//                             </div>
//                       </div>
//                   </div>