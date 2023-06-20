import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetClubHandler } from "./../apis/user/GetClub";
import Cookies from "universal-cookie";
const Club = () => {
  const { id } = useParams();
  const [club, setClub] = useState();
  const [sub, setSub] = useState();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  useEffect(() => {
    dispatch(GetClubHandler({ id })).then((res) => {
      if (res.payload.data) {
        setClub(res.payload.data.club);
        setSub(res.payload.data.subscriptions);
      }
    });
  }, [id]);

  return (
    <div className="flex justify-center items-center md:my-10  ">
      <div className="flex flex-row-reverse bg-gray-50 shadow-xl rounded-3xl p-5 md:w-9/12 w-full">
        <div className="flex flex-col flex-1 gap-y-10  items-end  py-5">
          <div className="flex w-full justify-between text-right">
            <div className="flex-1">
              <img src={club && club.logo} alt="النادي" className="w-full " />
            </div>
            <div className="flex flex-col gap-y-2 flex-1 justify-evenly">
              <div className="flex flex-col">
                <span className="md:text-4xl text-xl">{club && club.name}</span>
                <span className="text-gray-500 md:text-lg text-sm">
                  جيم للشباب يحتوي على أحدث الأجهزة
                </span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="md:text-4xl text-xl mb-2">:عن النادي</span>
                <span className="text-gray-500 md:text-lg text-sm">
                  {club && club.description}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end text-right w-full ">
            <div className="flex justify-between w-full sm:flex-row flex-col">
              <div className=" flex-1 flex flex-col justify-center w-full items-center sm:mb-0 mb-5 ">
                <span className="md:text-3xl text-xl sm:text-center text-right w-full ">
                  :العنوان
                </span>
                <span className="md:text-xl text-md text-gray-500 sm:text-center text-right w-full">
                  {club && club.location}
                </span>
              </div>
              <div className="flex flex-col flex-1">
                <span className="md:text-4xl text-xl mb-2">
                  :باقات الاشتراك
                </span>
                <div className="flex gap-x-5 w-full ">
                  {sub ?
                    sub.map((element) => (
                        <div
                          className="w-full rounded-lg flex flex-col items-center justify-center p-5"
                          style={{
                            backgroundImage:
                              "url('/assets/main-img-blured.jpg')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            border: "2px solid black",
                          }}
                        >
                          <span className="md:text-2xl text-md text-white ">
                            {element.name}
                          </span>
                          <span className="md:text-2xl text-md text-white text-center">
                            ${element.price}
                          </span>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center sm:flex-1 text-center">
              <button
                style={!cookies.get("_auth_token") ? {display:"block"} :cookies.get('_auth_role') === "6710811798" ? {display:"block"}:{display:"none"}}
                className="bg-red-700 text-white rounded-md sm:text-xl text-md sm:px-5 px-2 sm:py-3 sm:mt-0 mt-10 mr-20 sm:mr-0 py-1 hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all"
                onClick={() =>
                  (window.location.pathname = `/pay/${club._id}`)
                }
              >
                { !cookies.get("_auth_token") ? <span>انضم لنا</span> :cookies.get('_auth_role') === "6710811798" ? <span>اشترك</span>:<span></span>}
              </button>
            </div>
            <div className="flex flex-col sm:mt-10 mt-0  items-end flex-1 ">
              <span className="sm:text-4xl mb-3 text-lg">
                : صور داخل النادي
              </span>
              <div className="flex gap-x-5 items-start justify-end ">
                {club &&
                  club.images.map((image) => (
                    <img width="40%" src={image} alt="image" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
