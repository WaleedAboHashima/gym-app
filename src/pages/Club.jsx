import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Club = ({clubsData}) => {
    const { id } = useParams()
    const [club, setClub] = useState("")
    useEffect(() => {
        setClub(clubsData.filter(club => club.id === Number(id))[0])
    }, [clubsData,id])
    
  return (
      <div className='flex justify-center items-center md:my-10  '>
        <div className='flex flex-row-reverse   bg-gray-50 shadow-xl rounded-3xl p-5 md:w-9/12 w-full'>
          <div className='flex flex-col flex-1 gap-y-10  items-end  py-5' >
                    <div className='flex w-full justify-between text-right'>
                        <div className='flex-1'>
                            <img src='/assets/club-gym2.png' alt='النادي' className='w-full ' /></div>
                      <div className='flex flex-col gap-y-2 flex-1 justify-evenly'>
                          <div className='flex flex-col'>
                              <span className='md:text-4xl text-xl'>{club.name}</span>
                              <span className='text-gray-500 md:text-lg text-sm'>جيم للشباب يحتوي على أحدث الأجهزة</span>
                          </div>
                          <div className='flex flex-col mt-2'>
                                   <span className='md:text-4xl text-xl mb-2'>:عن النادي</span>
                    <span className='text-gray-500 md:text-lg text-sm'>جيم البطولة، جيم للشباب يحتوي على أحدث الأجهزة والمعدات المجهزة 
لبناء بنية عضلية سليمة، ويملك أمهر وأفضل المدربين ومختصي التغذية، 
حتى يتم بناء جسمك بشكل صحي ورياضي صحيح</span>
                    </div>
                       
                    </div>
                  </div>
                  <div className='flex flex-col items-end text-right w-full '>
                      <div className='flex justify-between w-full sm:flex-row flex-col'>
                          <div className=' flex-1 flex flex-col justify-center w-full items-center sm:mb-0 mb-5 '>
                              <span className='md:text-3xl text-xl sm:text-center text-right w-full '>:العنوان</span>
                              <span className='md:text-xl text-md text-gray-500 sm:text-center text-right w-full'>جده-السعوديه</span>
                          </div>
                          <div className='flex flex-col flex-1'>
                            <span className='md:text-4xl text-xl mb-2'>:باقات الاشتراك</span>
                      <div className='flex gap-x-5 w-full '>
                          <div className='w-full rounded-lg flex flex-col items-center justify-center p-5' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover", border: "2px solid black" }}>
                          <span className='md:text-2xl text-md text-white '>شهريا</span>
                          <span className='md:text-2xl text-md text-white text-center'>$ 340</span>
                          </div>
                          <div className='w-full rounded-lg flex flex-col items-center justify-center p-5' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover", border: "2px solid black" }}>
                              <span className='md:text-2xl text-md text-white'>اسبوعيا</span>
                          <span className='md:text-2xl text-md  text-white  text-center'>$ 85</span>
                            </div>
                          <div className='w-full rounded-lg flex flex-col items-center justify-center p-5' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover", border: "2px solid black" }}>
                              <span className='md:text-2xl text-md text-white'>يوميا </span>
                          <span className='md:text-2xl text-md  text-white  text-center w-full '>$ 15</span>
                          </div>
                      </div>
                          </div>
                      </div>
                  
                  </div>
                  <div className='flex justify-between items-center'>
                      <div className='flex justify-center items-center sm:flex-1 text-center'>
                          <button className='bg-red-700 text-white rounded-md sm:text-xl text-md sm:px-5 px-2 sm:py-3 sm:mt-0 mt-10 mr-20 sm:mr-0 py-1 hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all' onClick={()=>window.location.pathname=`/pay/${club.id}`}>اشترك</button>
                      </div>
                      <div className='flex flex-col sm:mt-10 mt-0  items-end flex-1 '>
                            <span className='sm:text-4xl mb-3 text-lg'>: صور داخل النادي</span>
                            <div className='flex gap-x-5 items-start justify-end '>
                                <img src='/assets/club1.jpg' alt='النادي' className='w-1/3'/>
                                <img src='/assets/club2.jpg' alt='النادي' className='w-1/3'/>
                                <img src='/assets/club3.jpg' alt='النادي' className='w-1/3'/>
                            </div>
                      </div>
                  </div> 
            </div>
          </div>
        </div>
  )
}

export default Club