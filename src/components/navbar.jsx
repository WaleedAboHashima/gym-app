import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import logo from "../imgs/Logo.png"
import {AiOutlineClose} from "react-icons/ai"
const Navbar = ({bar,setBar}) => {
  const [active, setActive] = useState("")
  const [activeBar, setActiveBar] = useState("")

  useEffect(() => {
  if (window.location.pathname === "/auth/login") setActive("login")
    else if (window.location.pathname === "/auth/reg") setActive("reg")
    else if (window.location.pathname === "/") setActiveBar("home")
    else if (window.location.pathname === "/clubs") setActiveBar("clubs")
    else if (window.location.pathname==="/about_us") setActiveBar("aboutUs")
    else if (window.location.pathname==="/contact_us") setActiveBar("contactUs")
    else setActive("") && setActiveBar("")
    console.log(activeBar)
  },[])
  return (
    <>
      {active ?
        <div className=' flex justify-between p-3 h-18 '>
      {/* User Not Auth  */}
      <div className='flex border border-black rounded mx-2' >
        <Link to="/auth/login" id={active === "login" ? "activePage" : undefined} className='p-2 text-lg' onClick={() => setActive
        ("login")}>دخول</Link>
        <Link to="/auth/reg" id={active === "reg" ? "activePage":undefined } className='p-2 text-lg'  onClick={() => setActive
        ("reg")} >تسجيل</Link>
      </div>
      {/* User Auth*/}
      <div ><img src={logo} alt="logo" className='w-50 h-11 cursor-pointer' onClick={() => window.location.pathname="/"} /></div>
      </div> :
        <>
        <div className='hidden md:flex justify-between items-center p-3 h-18 pt-8'>
          <span className='text-2xl ml-3 cursor-pointer hover:text-gray-500 text-white bg-black rounded-md px-5 py-2'onClick={() => window.location.pathname="/auth/reg"}>انضم لنا</span>
          <ul className='flex gap-x-10 flex-col sm:flex-row'>
            <li className='cursor-pointer text-2xl text-gray-500 hover:text-black' id={activeBar==="contactUs" ? "activeNav":undefined}  onClick={() => window.location.pathname="/contact_us"}>تواصل معنا</li>
            <li className='cursor-pointer  text-2xl text-gray-500 hover:text-black' id={activeBar==="aboutUs" ? "activeNav":undefined}  onClick={() => window.location.pathname="/about_us"}>نبذه عنا</li>
            <li className='cursor-pointer  text-2xl text-gray-500 hover:text-black' id={activeBar==="clubs" ? "activeNav":undefined} onClick={() => window.location.pathname="/clubs"}>جميع النوادي</li>
            <li className='cursor-pointer  text-2xl text-gray-500 hover:text-black' id={activeBar==="home" ? "activeNav":undefined} onClick={() => window.location.pathname="/"}>الرئيسيه</li>
          </ul>
          <div ><img src={logo} alt="logo" className='w-50 h-11 cursor-pointer' onClick={() => window.location.pathname="/"}/></div>
          </div>
          <div className='md:hidden flex justify-between p-3 h-18'>
          <img src={logo} alt="logo" className='w-50 h-11 cursor-pointer' onClick={() => window.location.pathname="/"}/>
          <img src='/assets/menu.png' alt="bar" className='w-30 h-10' onClick={()=>setBar(true)}/>
          </div>
          {bar &&
            <div className='fixed top-0 right-0 w-64 h-screen bg-gray-600 transition-opacity duration-500 flex flex-col justify-start items-end text-right z-50'>
              <AiOutlineClose className='text-white w-20 h-10 self-start mt-3' onClick={()=>setBar(false)}/>
            <ul className='flex gap-y-10 flex-col w-full mt-10'>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "home" ? "bg-white text-black " : "text-white"} `}  onClick={() => window.location.pathname="/"}>الرئيسيه</li>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "clubs" ? "bg-white text-black " : "text-white"}`}   onClick={() => window.location.pathname="/clubs"}>جميع النوادي</li>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "aboutUs" ? "bg-white text-black " : "text-white"}`} onClick={() => window.location.pathname="/about_us"} >نبذه عنا</li>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "contactUs" ? "bg-white text-black " : "text-white"}`} onClick={() => window.location.pathname="/contact_us"}>تواصل معنا</li>
          </ul>
          </div>}
      </>
      }
    
      </>
  )
}

export default Navbar