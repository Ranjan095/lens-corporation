import React from "react";

const GetInTouch = () => {
  return (
    <div className=" dark:bg-black pt-[100px] lg:flex justify-center text-center">
      <div className=" lg:w-[50%] h-[600px]  dark:bg-[#242424] flex justify-items-center">
        <div>
          <div className=" flex justify-center items-center">
            <h1 className=" text-[64px] my-[50px] dark:text-white px-[100px]">
              Get in touch with us
            </h1>
          </div>
          <div>
            <h1 className=" text-[20px] font-bold tracking-widest dark:text-white">
              Send your enquiry now!
            </h1>
          </div>
          <div className=" flex justify-center">
            <div className=" flex justify-center items-center p-[2px] w-[350px] h-[100px] rounded-3xl bg-[#EDEDED] dark:bg-[#0B0B0B] mt-[60px]">
              <input
                type="text"
                className="bg-[#EDEDED] text-center dark:bg-[#0B0B0B]  m-[5px] h-[90%] focus:outline-none dark:text-white "
                placeholder="Enter Email"
              />
              <button className=" text-white font-semibold bg-[#272E5C] rounded-3xl h-[90%] pl-[10px] mr-[5px]">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] h-[600px] dark:border-t-2 border-[#242424] flex justify-items-center">
        <img
          className=" p-[10px]"
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMap.1a735ef7.png&w=1920&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default GetInTouch;
