import React,{useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import logo from "../imgs/Logo.png"
import {AiOutlineClose} from "react-icons/ai"
import Cookies from 'universal-cookie'
const Navbar = ({bar,setBar,setActiveBar,setActive,active,activeBar, rules}) => {
  const navigate = useNavigate();
  const cookies = new Cookies()
  const [img, setImg] = useState();

  useEffect(() => {
    if (rules) rules.filter(r => r.type === "main_img" && setImg(r))
  }, [rules])
  const checkActive = () => {
    if (window.location.pathname === "/auth/login") setActive("login")
    else if (window.location.pathname === "/auth/reg") setActive("reg")
    else if (window.location.pathname === "/") setActiveBar("home")
    else if (window.location.pathname === "/clubs") setActiveBar("clubs")
    else if (window.location.pathname==="/about_us") setActiveBar("aboutUs")
    else if (window.location.pathname==="/contact_us") setActiveBar("contactUs")
  }
const [activeMenu,setActiveMenu] = useState(false)

  useEffect(() => {
    checkActive();
  }, [])
  const handleLogOut = () => {
    cookies.remove('_auth_token', { path: '/' });
    cookies.remove('_auth_role', { path: '/' });
    cookies.remove("_auth_club", { path: '/' });
    cookies.remove("_auth_name", { path: '/' });
    window.location.pathname = '/auth/login';
    // Additional actions or redirection after removing cookies
    setActiveMenu(false);
    checkActive();
  };
  return (
    <>
               
      {active ?
        <div className=' flex justify-between p-3 h-18 '>

               
      <div className='flex border border-black rounded mx-2' >
        <Link to="/auth/login" id={active === "login" ? "activePage" : undefined} className='p-2 text-lg' onClick={() => setActive
        ("login")}>دخول</Link>
        <Link to="/auth/reg" id={active === "reg" ? "activePage":undefined } className='p-2 text-lg'  onClick={() => setActive
        ("reg")} >تسجيل</Link>
      </div>
          <div>
            <img src={img ? img.main_img : logo} alt="logo" className='w-50 h-11 cursor-pointer' onClick={() => {
              navigate("/")
              setActive("")
              setActiveBar("home")
            }} />
          </div>
          </div> :
        <>
          <div className='hidden md:flex justify-between items-center p-3 h-18 pt-8'>
            {cookies.get("_auth_token") ?
              <div className='flex flex-col relative w-fit'>
                <img src='/assets/pic.png' alt='profile' className='w-16 cursor-pointer' onClick={() => setActiveMenu(!activeMenu)} />
                {activeMenu && <div className={`flex-col flex absolute bg-slate-100 ${cookies.get("_auth_role") === "65100109105110" ? "-bottom-24 " :"-bottom-16 "}  left-6  w-32 rounded-lg`}>
                  {cookies.get("_auth_role") === "65100109105110" ?
                    <>
                      <span className='text-xl w-full text-center  hover:bg-neutral-700 transition-all hover:text-white cursor-pointer p-2' onClick={() => {
                    setActiveMenu(false)
                    setActiveBar("")
                    navigate("/admin/clubs")
                    checkActive()
                  }} >لوحه التحكم</span>
                                    <span className='text-xl w-full text-center hover:bg-neutral-700 transition-all hover:text-white cursor-pointer p-2' onClick={handleLogOut} >تسجيل الخروج</span>
</> :                   <span className='text-xl w-full text-center hover:bg-neutral-700 transition-all hover:text-white cursor-pointer p-2' onClick={handleLogOut} >تسجيل الخروج</span> }
                 

                </div>}
                
              </div> : <span className='text-2xl ml-3 cursor-pointer hover:text-gray-500 text-white bg-black rounded-md px-5 py-2' onClick={() => {
              navigate("/auth/reg")
              checkActive()
            }}>انضم لنا</span>} 

          <ul className='flex gap-x-10 flex-col sm:flex-row'>
            <li className='cursor-pointer text-2xl text-gray-500 hover:text-black' id={activeBar==="contactUs" ? "activeNav":undefined}  onClick={() => {navigate("/contact_us"); checkActive()}}>تواصل معنا</li>
            <li className='cursor-pointer  text-2xl text-gray-500 hover:text-black' id={activeBar==="aboutUs" ? "activeNav":undefined}  onClick={() => {navigate("/about_us"); checkActive()}}>نبذه عنا</li>
            <li className='cursor-pointer  text-2xl text-gray-500 hover:text-black' id={activeBar==="clubs" ? "activeNav":undefined} onClick={() => {navigate("/clubs"); checkActive()}}>جميع النوادي</li>
            <li className='cursor-pointer  text-2xl text-gray-500 hover:text-black' id={activeBar==="home" ? "activeNav":undefined} onClick={() => {navigate("/"); checkActive()}}>الرئيسيه</li>
            
          </ul>
               
            <div ><img src={img ? img.main_img : logo} alt="logo" className='w-50 h-11 cursor-pointer' onClick={() => {navigate("/");checkActive()}}/></div>
          </div>
          <div className='md:hidden flex justify-between p-3 h-18'>
          <img src={img ? img.main_img : logo} alt="logo" className='w-50 h-11 cursor-pointer' onClick={() => {navigate("/");checkActive()}}/>
          <img src='/assets/menu.png' alt="bar" className='w-30 h-10' onClick={()=>setBar(true)}/>
          </div>
          {bar &&
            <div className='fixed top-0 right-0 w-64 h-screen bg-gray-600 transition-opacity duration-500 flex flex-col justify-start items-end text-right z-50'>
              <AiOutlineClose className='text-white w-20 h-10 self-start mt-3' onClick={()=>setBar(false)}/>
            <ul className='flex gap-y-10 flex-col w-full mt-10'>
                {!cookies.get("_auth_token") && <li className={`cursor-pointer text-xl  text-white  p-3 `} onClick={() => {
                  navigate("/auth/reg")
                  setBar(false)
                  checkActive()
                }}>انضم لنا</li>}
                <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "home" ? "bg-white text-black " : "text-white"} `} onClick={() => {
                  navigate("/")
                  setBar(false)
                  checkActive()
                }}>الرئيسيه</li>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "clubs" ? "bg-white text-black " : "text-white"}`}   onClick={() => {
                  navigate("/clubs")
                  setBar(false)
              checkActive()
                }}>جميع النوادي</li>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "aboutUs" ? "bg-white text-black " : "text-white"}`} onClick={() => {
              navigate("/about_us")
              setBar(false)
              checkActive()
                }} >نبذه عنا</li>
            <li className={`cursor-pointer text-xl  hover:bg-white hover:text-black  p-3 ${activeBar === "contactUs" ? "bg-white text-black " : "text-white"}`} onClick={() => {
                  navigate("/contact_us")
                  setBar(false)
              checkActive()
                }}>تواصل معنا</li>
                {cookies.get("_auth_token") &&
                  <li className={`cursor-pointer text-xl  text-white  p-3 `} onClick={() => {
                  handleLogOut()
                  navigate("/")
                  setBar(false)
                  checkActive()
                }}>تسجيل الخروج</li> }

          </ul>
            </div>}
          
      </>
      
      }

      </>
    
  )
    
}

export default Navbar