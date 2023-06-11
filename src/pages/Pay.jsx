import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BsPaypal } from "react-icons/bs"
import {SiVisa,SiMastercard} from "react-icons/si"
const Pay = ({clubData}) => {
    const { id } = useParams()
    const [price,setPrice] = useState()
  return (
      <div className='w-full flex sm:flex-row flex-col items-center justify-around bg-stone-100 rounded-3xl sm:h-screen h-full sm:p-0 p-5'>
          <div className='flex flex-col flex-1 rounded-3xl h-fit ml-2 pt-5 w-5/6' style={{backgroundImage:"url('/assets/main-img-blured.jpg","backgroundPosition":"center","backgroundSize":"cover"}}>
              <div className='flex justify-center items-center '>
                  <div className='flex w-full justify-evenly items-center'>
                      <img src='/assets/club_gym.png' alt='gym_img' className='w-1/4' />
                      <span className='md:text-5xl text-xl text-white'>اختر باقه الاشتراك</span>
                  </div>
              </div>
              <div className='flex md:gap-x-5 gap-x-1 justify-center items-center w-full sm:px-10 border-b-2 border-gray-400 py-10 px-2 '>
                          <div onClick={()=>setPrice(340)} className='w-1/3 rounded-lg flex flex-col items-center justify-center px-2 py-1 sm:p-5 hover:cursor-pointer transition-all border-2 border-black hover:border-amber-300' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover"  }}>
                          <span className='md:text-2xl text-lg text-white '>شهريا</span>
                          <span className='md:text-2xl text-lg text-white  text-center'>$ 340</span>
                          </div>
                          <div onClick={()=>setPrice(85)} className='w-1/3 rounded-lg flex flex-col items-center justify-center px-2 py-1 sm:p-5   hover:cursor-pointer transition-all border-2 border-black hover:border-amber-300'style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
                              <span className='md:text-2xl text-lg text-white'>اسبوعيا</span>
                          <span className='md:text-2xl text-lg text-white w-full text-center'>$ 85</span>
                            </div>
                          <div onClick={()=>setPrice(15)} className='w-1/3 rounded-lg flex flex-col items-center justify-center px-2 py-1 sm:p-5   hover:cursor-pointer transition-all border-2 border-black hover:border-amber-300' style={{ backgroundImage: "url('/assets/main-img-blured.jpg')", backgroundPosition: "center", backgroundSize: "cover" }}>
                              <span className='md:text-2xl text-lg text-white text-right'>يوميا</span>
                              <span className='md:text-2xl text-lg text-white w-full text-center'>$ 15</span>
                          </div>
              </div>
              <div className='w-full justify-around items-center flex py-10'>
                  {price ?  <span className='md:text-3xl text-xl text-white'>اجمالي مبلغ الدفع : <span>$ { price}</span></span>:<span className='md:text-3xl text-xl text-white'>برجاء اختيار باقه الاشتراك </span> } 
              </div>
              <button className='opacity-50 text-white md:text-3xl text-xl py-2 mt-5 hover:opacity-100 transition-all' style={{backgroundColor:"#ffffff47"}} onClick={()=>window.location.pathname ="/"}>الغاء عمليه الدفع</button>
              <div>
              </div>
          </div>
          <div className='w-full flex-1 flex justify-center items-center flex-col gap-y-10 my-5'>
              <button style={{ "backgroundColor": "#fdc43a" }} className='text-2xl  flex items-center gap-x-3 justify-around py-3 px-5 rounded-md text-white hover  transition-all hover:scale-105' onClick={()=>window.location.pathname="/subscribe/1"}>
                  <BsPaypal style={{ color: "#009cd3" }} />
                  <span>الدفع عن طريق </span>
              </button>
              <button style={{ "backgroundColor": "#1331c1" }} className='text-2xl  flex items-center gap-x-3  justify-around py-3 px-5 rounded-md text-white hover  transition-all hover:scale-105'>
                  <SiVisa className='text-white text-3xl'/>
                  <span>الدفع عن طريق </span>
              </button>
              <button style={{ "backgroundColor": "red" }} className='text-2xl  flex items-center gap-x-3    justify-around py-3 px-5 rounded-md text-white hover  transition-all hover:scale-105'>
                  <SiMastercard style={{color:"#eaad00"}} className='text-3xl'/>
                  <span>الدفع عن طريق </span>
              </button>
              
          </div>
      </div>
  )
}

export default Pay