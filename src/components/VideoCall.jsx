import React from "react";

export default function VideoCall() {
  return (
    <>
      <div className=" flex justify-between items-center w-full px-4 my-3">
        <div className=" flex justify-center items-center gap-2">
          <i
            className="fa-solid fa-record-vinyl fa-lg"
            style={{ color: "#ff0000" }}
          ></i>
          <h1 className=" font-bold text-[#D6D6D6]">
            Record <span> 13:02</span>
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <i
            className="fa-solid fa-user-plus fa-md"
            style={{ color: "#D6D6D6" }}
          ></i>
          <h1 className=" font-medium text-[#D6D6D6]">Add user</h1>
        </div>
      </div>
      <div className=" grid grid-cols-12 justify-center items-center gap-5 w-full h-[425px] px-20">
        <div className=" col-span-6 h-52 relative">
          <i
            className="fa-solid fa-microphone-slash absolute text-white top-3 left-3 fa-md"
            style={{ color: "#ffffff" }}
          ></i>
          <img className="rounded-2xl w-full h-52" src="4.png" alt="" />
        </div>
        <div className=" relative flex justify-center items-center  col-span-6 h-52 rounded-2xl">
          <img
            className="rounded-2xl absolute top-0 w-full h-52 filter blur-[1px]"
            src="2.png"
            alt=""
          />
          <i className="fa-solid fa-video-slash fa-md text-white absolute top-3 left-3 "></i>
          <div className=" z-30 w-28 h-28 bg-white rounded-full">
            <img className="rounded-full w-28 h-28" src="2.png" alt="" />
          </div>
        </div>
        <div className="relative flex justify-center items-center col-span-6 h-52 rounded-2xl border border-gray-200 overflow-hidden">
          <div className="absolute inset-0 bg-gray-100 bg-opacity-25 filter blur-[5px]"></div>

          <i className="fa-solid fa-video-slash fa-md text-white absolute top-3 left-3 z-10"></i>
          <div className="relative p-6 z-10">
            <div className="w-32 h-32 rounded-full border-2 border-[#FF00A6]"></div>
            <div className="flex justify-center items-center absolute top-8 left-8 w-28 h-28 bg-white bg-opacity-30 rounded-full">
              <h1 className="text-3xl font-semibold text-white">MO</h1>
            </div>
          </div>
        </div>
        <div className=" relative flex justify-center items-center col-span-6 h-52 rounded-2xl bg-green-600">
          <i
            className="fa-solid fa-microphone-slash absolute text-white top-3 left-3 fa-md z-20"
            style={{ color: "#ffffff" }}
          ></i>
          <img
            className="rounded-2xl absolute top-0 w-full h-52"
            src="3.png"
            alt=""
          />
        </div>
      </div>
      <div className=" flex justify-center items-center gap-10 mt-5">
        <div className=" py-2 px-2.5 rounded-md bg-black bg-opacity-40">
          <i
            className="fa-solid fa-video fa-md"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <div className=" py-2 px-2.5 rounded-md bg-black bg-opacity-40">
          <i
            className="fa-solid fa-microphone-slash"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <div className=" py-2 px-4 rounded-md bg-[#ff0000]">
          <i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i>
        </div>
        <div className=" py-2 px-2.5 rounded-md bg-black bg-opacity-40">
          <i
            className="fa-solid fa-record-vinyl fa-lg"
            style={{ color: "#ff0000" }}
          ></i>
        </div>
      </div>
    </>
  );
}
