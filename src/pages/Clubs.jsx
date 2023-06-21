import React, { useEffect, useState } from "react";
import { FaLocationArrow, FaArrowDown, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetClubsHandler } from "../apis/user/GetClubs";
import { SearchClubHandler } from "../apis/user/SearchByName";
import { FilterClubsHandler } from "../apis/user/FilterClubs";
import { Backdrop, CircularProgress } from '@mui/material';
const Clubs = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const [searchStatus,setSearchStatus] = useState(false)
  const stateClubs = useSelector((state) => state.GetClubs);
  const stateSearch = useSelector((state) => state.SearchName);
  // const stateFilter = useSelector((state) => state.FilterClubs);
// const [ clubs,setClubs] = useState([])
  useEffect(() => {
    dispatch(GetClubsHandler())
  }, [dispatch,search]);

  useEffect(() => {
  search === ""&& setSearchStatus(false)
  },[search])
  const handleSearch = () => {
    setSearchStatus(true)
    dispatch(SearchClubHandler({ search }))
    console.log(stateSearch.data)
  }

  const handleLocation = () => {
    setSearchStatus(false)
    dispatch(FilterClubsHandler({filter:"nearby"}))
  }

  return (
    <>
      <div className="flex flex-row p-5 md:justify-around justify-between items-center">
        <div className=" md:flex-1 flex-2 flex gap-5 items-center justify-center">
          <select className="text-xl border-2 border-gray-500  text-black px-3 py-1 rounded-xl flex items-center text-right ">
            <option>الاحدث</option>
            <option>الاقدم</option>
            <option>سنوي</option>
            <option>شهري</option>
            <option>اسبوعي</option>
          </select>
          <FaLocationArrow className="text-4xl border-2 border-gray-500  text-black p-1 rounded-xl cursor-pointer hidden sm:flex" onClick={()=>handleLocation}/>
        </div>
        {stateClubs.loading ? <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={stateClubs.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop> :
          <div className="flex-1 flex justify-start">
            <button className="md:text-2xl text-md border-2 border-black  text-black  px-2 rounded-xl cursor-pointer mx-1  transition-all hover:bg-black hover:text-white">
              <FaSearch />
            </button>
            <input
              placeholder="... ابحث عن"
              className="border-2 border-black rounded-md px-3 py-2 md:text-xl text-md md:w-3/4 w-full text-right"
              onChange={(e) => {
                setSearch(e.target.value)
                handleSearch()
              }}
            />
          </div>}
      </div>
      <div className="grid relative lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 items-center justify-items-center mt-10 mb-5 h-full overflow-hidden p-5 bg-slate-100 min-h-screen">
        {
          searchStatus ?
            stateSearch.data.Clubs  && stateSearch.data.Clubs.length  ?
              stateSearch.data.Clubs.map((club) => {
            return (
              <div
                className="flex flex-col border-solid  justify-between items-center w-full h-full   rounded-md bg-white shadow-lg "
                key={club._id}
              >
                <div className="h-1/2">
                <img
                  src={club.logo}
                  alt="img"
                  className="w-full h-full p-5 "
                />
                </div>
                <span className="text-2xl text-black p-2 h-fit">{club.name}</span>
                <span className="text-2xl text-gray-600 p-2 w-full break-words text-right">
                  {club.description}
                </span>
                <button
                  className="text-xl text-white border-2 border-white bg-black px-7 py-2 w-full hover:bg-white hover:text-black hover:border-2 hover:border-black  transition-all"
                  onClick={() =>
                    (window.location.pathname = `/clubs/${club._id}`)
                  }
                >
                  قم بزيارته
                </button>
              </div>
            );
          })
          :<div className="absolute text-2xl text-red-700 ">لا توجد نتائج </div>
          :
          stateClubs.data.Clubs ? (
          stateClubs.data.Clubs.map((club) => {
            return (
              <div
                className="flex flex-col border-solid  justify-between items-center w-full h-full   rounded-md bg-white shadow-lg "
                key={club._id}
              >
                <div className="h-1/2">
                <img
                  src={club.logo}
                  alt="img"
                  className="w-full h-full p-5 "
                />
                </div>
                <span className="text-2xl text-black p-2 h-fit">{club.name}</span>
                <span className="text-2xl text-gray-600 p-2 w-full break-words text-right">
                  {club.description}
                </span>
                <button
                  className="text-xl text-white border-2 border-white bg-black px-7 py-2 w-full hover:bg-white hover:text-black hover:border-2 hover:border-black  transition-all"
                  onClick={() =>
                    (window.location.pathname = `/clubs/${club._id}`)
                  }
                >
                  قم بزيارته
                </button>
              </div>
            );
          })
        ) : (
          <div className="absolute text-2xl text-red-700 ">لا توجد نوادي الان </div>
        )}
      </div>
    </>
  );
};

export default Clubs;
