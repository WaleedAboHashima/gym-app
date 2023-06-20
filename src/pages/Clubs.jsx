import React, { useEffect } from "react";
import { FaLocationArrow, FaArrowDown, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetClubsHandler } from "../apis/user/GetClubs";
const Clubs = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.GetClubs);
  useEffect(() => {
    dispatch(GetClubsHandler());
  }, [dispatch]);
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
          <FaLocationArrow className="text-4xl border-2 border-gray-500  text-black p-1 rounded-xl cursor-pointer hidden sm:flex" />
        </div>
        <div className="flex-1 flex justify-start">
          <button className="md:text-2xl text-md border-2 border-black  text-black  px-2 rounded-xl cursor-pointer mx-1  transition-all hover:bg-black hover:text-white">
            <FaSearch />
          </button>
          <input
            placeholder="... ابحث عن"
            className="border-2 border-black rounded-md px-3 py-2 md:text-xl text-md md:w-3/4 w-full text-right"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 items-center justify-items-center mt-10 mb-5 h-full overflow-hidden p-5 bg-slate-100">
        {state.data.Clubs ? (
          state.data.Clubs.map((club) => {
            return (
              <div
                className="flex flex-col border-solid  justify-center items-center w-full   rounded-md bg-white shadow-lg "
                key={club._id}
              >
                <img
                  src="/assets/main-img.jpg"
                  alt="img"
                  className="w-full h-auto p-5  "
                />
                <span className="text-2xl text-black p-2">{club.name}</span>
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
          <div className="flex border-solid  justify-center items-center w-full text-red-500 rounded-md bg-stone-100 shadow-stone-100 shadow-lg">
            لا توجد نوادي.
          </div>
        )}
      </div>
    </>
  );
};

export default Clubs;
