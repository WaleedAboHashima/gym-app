import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";
const AddClub = () => {
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

  // const handleMap = () => {
  //   mapboxgl.accessToken =
  //     "pk.eyJ1Ijoia3VzaGlybzIiLCJhIjoiY2xpdWY2aHN2MGk3NjNobXlpY3l1aTlyZCJ9.sqUTG9jXnKN1uTZRFZPuBg";
  //   const newMap = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/kushiro2/cliwz039n016h01pfbfa18ltk",
  //     zoom: 16,
  //   });
  //   newMap.on("load", () => {
  //     newMap.setCenter([31.17931, 30.46616]);
  //     const checkInMarker = new mapboxgl.Marker()
  //       .setLngLat(
  //         [31.179310, 30.466160]
  //       )
  //       .addTo(newMap);
  //   });

  //   setMap(newMap);

  //   return () => {
  //     newMap.remove();
  //     setMap(null);
  //     setMarker(null);
  //   };
  // };

  useEffect(() => {
    handleMap();
  }, []);
  return (
    <div className="flex min:h-screen ">
      <div className="flex-1 flex flex-col bg-stone-100 items-end gap-y-5 rounded-lg w-screen">
        <span className="text-2xl text-center  bg-neutral-700 px-5 py-3  text-white  w-full ">
          اضافه نادي
        </span>
        <div className="flex flex-col w-3/5   px-5">
          <span className="text-2xl text-right">اضف نادي</span>
          <span className="text-md text-right text-gray-500">
            اكتب بيانات النادي حتي تتم اضافتها
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
                <span className="text-lg ml-1">الي</span>
              </div>
              <div>
                <input type="time" />
                <span className="text-lg ml-1">من</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl text-right">شعار النادي</span>
            <input type="file" className=" text-sm w-full" />
          </div>
        </div>

        <div className="w-full justify-center items-end flex flex-col  px-5">
          <span className="text-xl">عنوان النادي</span>
          {/* Map */}

          <div id="map" className="h-screen w-full relative">
            {map && marker && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full  px-5">
          <span className="text-xl text-right">عن النادي</span>
          <span className="text-md text-right text-gray-500">
            أدخل وصف النادي
          </span>
          <textarea className="w-full  resize-none border-2 border-black min-h-52 text-right"></textarea>
        </div>
        <div className="flex flex-col w-full  px-5">
          <span className="text-xl text-right">صور النادي</span>
          {/* if no Imgs*/}
          {/* <span>قم باضافه صور النادي</span> */}
          {/*if imgs*/}
          <div className="flex gap-x-3 justify-center items-center ">
            <img src="/assets/club1.jpg" alt="club img" className="w-1/4" />
            <img src="/assets/club2.jpg" alt="club img" className="w-1/4" />
            <img src="/assets/club3.jpg" alt="club img" className="w-1/4" />
            <div
              className="w-1/4 h-full flex justify-center items-center  px-5"
              style={{
                backgroundImage: "url('/assets/main-img-blured.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                border: "2px solid black",
              }}
            >
              <span className="text-white text-sm">4 صور اخرين</span>
            </div>
          </div>
          <button className="text-white bg-green-600 text-xl my-5 px-5 py-2 w-fit rounded-lg">
            اضافه
          </button>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default AddClub;
