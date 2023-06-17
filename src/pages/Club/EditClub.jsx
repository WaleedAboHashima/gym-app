import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/AdminSidebar";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";
import {AiOutlineClose} from "react-icons/ai"
import { useParams } from 'react-router-dom'
import ClubSidebar from "../../components/ClubSidebar";

const EditPersonalClub = ({clubsData}) => {
    const { id } = useParams()
    const [club, setClub] = useState({})
    useEffect(() => {
        setClub(clubsData.filter(club => club.id === Number(id))[0])
    }, [clubsData,id])
  const [map, setMap] = useState(null);
  const [selection, setSelection] = useState(null);
  const [marker, setMarker] = useState(null);
  mapboxgl.workrClass = MapboxWorker;

  const handleMapClick = (e, newMap) => {
    console.log(e)
    setSelection({ lat: e.lngLat.lat, lng: e.lngLat.lng });
    const checkInMarker = new mapboxgl.Marker()
      .setLngLat([e.lngLat.lng, e.lngLat.lat])
      .addTo(newMap);
  };

  const handleMapLoad = (newMap) => {
    if (selection) {
      newMap.setCenter([selection.lng, selection.lat]);
      const checkInMarker = new mapboxgl.Marker()
        .setLngLat([selection.lng, selection.lat])
        .addTo(newMap);
    } else {
      newMap.setCenter([31.17931, 30.46616]);
    }
  };

  const handleMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia3VzaGlybzIiLCJhIjoiY2xpdWY2aHN2MGk3NjNobXlpY3l1aTlyZCJ9.sqUTG9jXnKN1uTZRFZPuBg";
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/kushiro2/cliwz039n016h01pfbfa18ltk",
      zoom: 16,
    });
    newMap.on("click", (e) => handleMapClick(e, newMap));
    newMap.on("load", () => handleMapLoad(newMap));

    setMap(newMap);
  };

  useEffect(() => {
    handleMap();
  }, []);
  const imgfiles = useRef()
  const [imgs, setImgs] = useState([])
  const handleImgChange = (imgs) => {
    let fileNames=[]
    for (let i = 0; i < imgs.length; i++) {
    const file = imgs[i];
    fileNames.push(file.name);
    }
    setImgs(fileNames)
  }
  return (
    <div className="flex min:h-screen ">
      <div className="flex-1 flex flex-col bg-stone-100 items-end gap-y-5 rounded-lg w-screen">
        <span className="text-2xl text-center  bg-neutral-700 px-5 py-3  text-white  w-full ">
          تعديل النادي
        </span>
        <div className="flex flex-col w-3/5   px-5">
          <span className="text-2xl text-right">تعديل اسم النادي</span>
          <span className="text-md text-right text-gray-500">
            عدل بيانات النادي حتي تتم اضافتها
          </span>
          <div className="flex justify-end gap-x-3 flex-wrap-reverse gap-y-2">
            <select
              type="text"
              className="border-2 text-right border-black  px-3 py-1 text-xl"
            >
              <option>ذكور</option>
              <option>اناث</option>
              <option>مشترك</option>
            </select>
            <select
              type="text"
              className="border-2 text-right border-black  px-3 py-1 text-xl"
            >
              <option>يومين</option>
              <option>ايام 3 </option>
              <option>4 ايام</option>
            </select>
            <input
              type="text"
              className="border-2 text-right border-black sm:w-1/3 px-3 py-1 text-xl rounded-md"
              placeholder="اسم النادي"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse sm:gap-x-5  px-5">
          <div className="flex flex-col justify-center items-end">
            <span className="text-xl text-right">مواعيد العمل</span>
            <div className="flex justify-around gap-x-5">
              <div>
                <input type="time" />
                <span className="text-lg ml-1 ">الي</span>
              </div>
              <div>
                <input type="time" />
                <span className="text-lg ml-1">من</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-2">
            <span className="text-xl text-right">لوجو النادي</span>
            <input type="file" className=" text-sm w-full text-white bg-neutral-700 border-2 border-black rounded-md p-2" />
          </div>
        </div>

        <div className="flex flex-col w-full  px-5">
          <span className="text-xl text-right">عن النادي</span>
          <span className="text-md text-right text-gray-500">
            عدل وصف النادي
          </span>
          <textarea className="w-full  resize-none border-2 border-black min-h-52 text-right"></textarea>
        </div>
        <div className="flex flex-col w-full  px-5 items-end">
          <span className="text-xl text-right">عموله الموقع</span>
          <span className="text-md text-right text-gray-500">
            عدل عموله الموقع من اشتراك العملاء من النادي
          </span>
          <input type="number" className="w-52  resize-none border-2 border-black py-2 text-lg "/>
        </div>
        <div className="flex flex-col w-full  px-5">
          <span className="text-xl text-right">صور النادي</span>
          {/* if no Imgs*/}
          {/* <span>قم باضافه صور النادي</span> */}
          {/*if imgs*/}
          <div className="flex flex-col  gap-x-3 justify-center items-center ">
            <input type="file" multiple className=" text-sm w/fit text-white bg-neutral-700 border-2 border-black rounded-md p-2" ref={imgfiles}  onChange={(e)=>handleImgChange(e.target.files)}/>
            <div className="flex flex-col justify-center  items-center my-3">
              {imgs.length ?imgs.map((name) => {
                return (
              <div className="flex  items-center w-full justify-evenly gap-x-5">
                <AiOutlineClose className="text-red-500" onClick={()=>setImgs(imgs.filter((filename)=> filename !== name))}/>
                <span className="text-lg ">{name }</span>
              </div>
            )
          }):<span className="text-xl text-red-500">فم باضافه صور النادي</span>}
          </div>
          </div>
          
        <div className="w-full justify-center items-end flex flex-col  px-5">
          <span className="text-xl">عنوان النادي</span>
          {/* Map */}

          <div id="map" className="h-screen w-full relative">
            {/* {map && marker && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            )} */}
          </div>
          </div>
          <div className="flex w-full items-center justify-center ">
            <button className="text-white bg-green-600 text-2xl my-5 px-5 py-2 w-1/4 hover:scale-125 transition-all  rounded-lg " >
            تعديل
          </button>
          </div>
        </div>
      </div>
      <ClubSidebar/>
    </div>
  );
}

export default EditPersonalClub