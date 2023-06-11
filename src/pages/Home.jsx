import React,{useRef, useState} from 'react'
import { FaAngleLeft } from "react-icons/fa"
const Home = ({ bar }) => {
    const [visible, setVisible] = useState(0)
    const [data,setData]=useState({gender:"",country:"",city:"",club:""})
    const countryInput = useRef()
    const clubsData = [
        {
            id:1,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:2,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:3,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:4,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:5,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:6,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:7,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:8,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:9,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:10,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:11,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
        {
            id:12,
            name: "حسن جسمك",
            des: "وصف النادي وصف النادي وصف النادي",
        },
    ]
    return (
        <>
            <div className={`flex sm:flex-row flex-col  p-6 sm:h-screen items-center justify-around sm:w-full w-screen ${bar && 'blur-lg'} `}>
                <div className='sm:flex gap-x-4 items-center hidden w-1/2'>
                    <img src='/assets/left-img.jpg' alt='left-img' className='home-img ' />
                    <img src='/assets/main-img.jpg' alt='left-img' className=' middle' />
                    <img src='/assets/right-img.jpg' alt='left-img' className='home-img ' />
                </div>
                <div className="flex flex-col sm:w-1/2  items-center justify-center  lg:pr-10 relative sm:h-full h-screen ">
                    <div className="flex w-full  justify-end ">
                        <span className="  sm:text-2xl lg:text-4xl md:text-3xl text-3xl xl:text-5xl">تابع تقدمك وطريقك في</span>
                        <img src="/assets/arrow.png" alt="arrow" className="w-20 md:w-36" />
                    </div>
                    <div className="flex w-full  justify-end">
                        <span className=" sm:text-2xl lg:text-4xl md:text-3xl text-3xl xl:text-5xl">رحلة تطور</span>
                        <img src="/assets/arrow.png" alt="arrow" className="w-20 md:w-36" />
                    </div>
                    <div className="flex  mr-10 w-full items-center justify-end">
                        <img src="/assets/Arm.png" alt="arrow" className="transform scale-x-[-1]  xl:w-28 md:w-20 lg:w-25 w-20" />
                        <span className=" sm:text-2xl lg:text-4xl md:text-3xl text-3xl xl:text-5xl"> بنيتك العضليه</span>
                        <img src="/assets/Arm.png" alt="arrow" className="w-20 xl:w-28 md:w-20 lg:w-25" />
                    </div>
                    <div className='flex items-start w-full justify-center mb-8'>
                        <img src="/assets/Arrow-down.png" alt="arrow" className="xl:w-25 md:w-20 lg:w-15 w-1/4   mt-20 animate-bounce " />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <ul className='flex justify-around text-gray-500 text-sm sm:text-2xl lg:text-3xl  py-5 border-dashed border-y-2 border-gray-400 mb-3'>
                    <li>اختر النادي وحدد باقة الاشتراك المناسبة لك</li>
                    <li><FaAngleLeft/></li>
                    <li>حدد مدينتك</li>
                    <li><FaAngleLeft /></li>
                    <li>قم باختيار الجنس</li>
                </ul>
                <div className='relative   overflow-auto h-screen flex flex-col pb-2' style={{backgroundImage: "url('/assets/main-img-blured.jpg')",backgroundSize: "cover",backgroundPosition: "center",}}>
                    <div className='flex justify-around items-start mt-10'>
                        <div className='flex items-center'>
                            <div className='flex flex-col items-end '>
                                <span className='text-white lg:text-5xl md:text-4xl sm:text-3xl text-md flex items-center'>{data.club && <span className='text-white md:text-3xl text-sm mr-1'> ( { data.club} ) </span> }النادي</span>
                                {visible === 2 &&  <span className='text-gray-400 sm:text-2xl text-md'>اختر الباقة التي تناسبك</span>}
                            </div>
                            {visible === 2 && <span className='md:w-10 md:h-10 w-5 h-5 bg-white rounded-full ml-2'></span>}
                        </div>
                        <div className='flex items-start'>
                            <div className='flex flex-col items-end'>
                                <span className='text-white lg:text-5xl md:text-4xl sm:text-3xl text-md flex items-center'>{data.city && <span className='text-white md:text-3xl text-sm mr-1'> ( {data.city} ) </span>}المدينه</span>
                                {visible === 1 && <span className='text-gray-400 sm:text-2xl text-md'>الرجاء تحديد مدينتك</span>}
                            </div>
                            {visible === 1 && <span className='md:w-10 md:h-10 w-5 h-5 bg-white rounded-full ml-2'></span>}
                        </div>
                        <div className='flex items-start'>
                            <div className='flex flex-col items-end'>
                                <span className='text-white lg:text-5xl md:text-4xl sm:text-3xl text-md flex items-center'>{data.gender && <span className='text-white md:text-3xl text-sm mr-1'>( {data.gender} )</span>}الجنس</span>
                                {visible === 0 && <span className='text-gray-400 sm:text-2xl text-md'>الرجاء اختيار الجنس</span>}
                            </div>
                            {visible === 0 && <span className='md:w-10 md:h-10 w-5 h-5 bg-white rounded-full ml-2'></span>}
                        </div>
                    </div>
                    <div className='self-center h-full'>
                        {visible === 0 ?
                            <div className='flex justify-evenly items-center h-full'>
                                <img src='/assets/Women.png' alt="Women" className='hover:transform hover:scale-125 cursor-pointer sm:w-1/4 w-1/3' onClick={() => {
                                    setData({ ...data, gender: 'انثي' })
                                    setVisible(1)
                                }}/>
                                <img src='/assets/Men.png' alt="Men" className='hover:transform hover:scale-125 cursor-pointer sm:w-1/4 w-1/3' onClick={() => {
                                    setData({ ...data, gender: 'ذكر' })
                                    setVisible(1)
                                }} />

                            </div>
                            : visible === 1 ?
                                <div className='flex flex-col items-center justify-center w-full h-80 gap-y-10 mt-20'>
                                    <input type='text' placeholder='الدوله' className='text-right md:w-96 px-2 py-3 md:text-xl rounded-md' />
                                    <input type='text' placeholder='المدينه' className='text-right md:w-96 px-2 py-3 md:text-xl rounded-md' ref={countryInput} />
                                    <button className='bg-white text-xl px-5 py-3 rounded-sm' onClick={() => {
                                        setData({ ...data, city: countryInput.current.value })
                                        setVisible(2)
                                    }}>اخترالمدينه</button>
                                </div>
                                :
                                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 items-center justify-items-center mt-10  overflow-hidden px-5 py-2'>
                                    {
                                        clubsData.map((club) => {
                                            return (
                                                <div className='flex flex-col border-solid bg-white justify-center items-center w-full rounded-md ' key={club.id}>
                                                    <img src='/assets/main-img.jpg' alt='img' className='w-2/3 pt-5 '/>
                                                    <span className='md:text-2xl sm:text-xl text-md text-black p-2'>{club.name }</span>
                                                    <span className='md:text-2xl sm:text-xl text-md text-gray-600 p-2 text-center '>{club.des}</span>
                                                    <button className='md:text-xl text-lg text-white bg-black px-7 py-2 w-full hover:bg-stone-100 hover:text-black transition-all' onClick={()=>window.location.pathname=`/clubs/${club.id}`}>قم بزيارته</button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home