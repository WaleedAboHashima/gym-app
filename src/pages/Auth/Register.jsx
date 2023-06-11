import React, { useEffect } from "react";
import {AiOutlineMail,AiFillLock,AiOutlineUser} from "react-icons/ai"
import {IoLocation,IoPhonePortraitOutline} from "react-icons/io5"
function Register() {
  return (
    <>
      <div className="w-100 flex md:flex-row flex-col justify-center items-center  px-8 gap-x-5 h-screen" >
        <form  className="flex sm:w-1/3 w-full flex-col relative pt-5 px-5  gap-10" onSubmit={(e)=>e.preventDefault()} style={{height:"calc(100vh - 15vh)"}}>
          <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/assets/main-img.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(10px)",
      zIndex: -1,
          }}></div>
          <div className="flex flex-col text-right  text-white ">
            <span className="text-3xl">تسجيل </span>
            <span className="text-l pt-2"> تصفح النوادي الموجودة وقم بالتسجيل بها</span>
          </div>
  
          <div className="inputs w-100 flex flex-col justify-center gap-2" >
            <div className="flex flex-row items-center justify-center">
              <input type="text" placeholder="اسم المستخدم" className="text-white border-b-2 border-white px-1 py-3  w-10/12 text-right outline-none bg-inherit placeholder:text-white md:text-lg" /><AiOutlineUser className="text-white text-2xl"/>
            </div>
            <div className="flex flex-row items-center justify-center">
              <input type="text" placeholder=" مكان السكن" className="text-white border-b-2 border-white px-1 py-3  w-10/12 text-right outline-none bg-inherit placeholder:text-white text-lg" /><IoLocation className="text-white text-2xl"/>
            </div>
            <div className="flex flex-row items-center justify-center">
              <input type="phone" placeholder="رقم الهاتف" className="text-white border-b-2 border-white px-1 py-3  w-10/12 text-right outline-none bg-inherit placeholder:text-white text-lg" /><IoPhonePortraitOutline className="text-white text-2xl"/>
            </div>
            <div className="flex flex-row items-center justify-center">
              <input type="email" placeholder=" البريد الإلكتروني" className="text-white border-b-2 border-white px-1 py-3  w-10/12 text-right outline-none bg-inherit placeholder:text-white text-lg" /><AiOutlineMail className="text-white text-2xl"/>
            </div>
            <div className="flex flex-row items-center justify-center">
              <input type="password" placeholder="  كلمه المرور" className="text-white border-b-2 border-white px-1 py-3  w-10/12 text-right outline-none bg-inherit  placeholder:text-white text-lg" /><AiFillLock className="text-white text-2xl"/>
            </div>
          </div>
            <button id="submit"><span>دخول</span></button>
        </form>
        <div className="sm:flex flex-col sm:w-1/2 items-end justify-center hidden">
                <div className="flex">
            <span className=" sm:text-2xl lg:text-4xl text-lg">قم بالتسجيل وأبدأ معنا</span>
            <img src="/assets/arrow.png" alt="arrow" className="w-20 md:w-32"/>
          </div>
          <div className="flex">
          <span className=" sm:text-2xl lg:text-4xl text-lg">رحلة تطور</span>
            <img src="/assets/arrow.png" alt="arrow"className="w-20 md:w-32"/>
          </div>
          <div className="flex items-center mr-10">
            <img src="/assets/Arm.png" alt="arrow" className="transform scale-x-[-1]  md:w-20 lg:w-28 w-0"/>
            <span className=" sm:text-2xl lg:text-4xl text-lg"> بنيتك العضليه</span>
            <img src="/assets/Arm.png" alt="arrow" className="w-20 md:w-20 lg:w-28"/>
          </div>
      </div>
      </div>
    </>
  );
}
export default Register;
