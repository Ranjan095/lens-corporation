"use client";
import { serviceList } from "@/utils/serviceList";
import React, { useState } from "react";
import ServideCard from "./ServideCard";

const Services = () => {
  return (
    <div className="dark:bg-black">
      <div className=" p-[68px] flex flex-col items-center">
        <h1 className=" text-[20px] font-medium dark:text-white text-center">
          SERVICES
        </h1>
        <div className=" w-[75px] h-[4px] bg-gradient-to-r from-[#0896FF] via-[#3AB9FF] to-[#93F7FF] rounded-full"></div>
      </div>
      <h1 className="dark:text-[#fff] text-center text-[58px] px-20 ">
        We provide Artificial Intelligence Services
      </h1>
      <div className="lg:grid grid-cols-2 lg:m-[100px] justify-items-center items-center ">
        {serviceList?.map((ele) => (
          <ServideCard key={ele.id} {...ele} />
        ))}
      </div>
      {/*Start Creating MEET Tru-AI */}
      <div className=" relative border-l-[98vw] border-transparent border-solid border-b-[13.9vw] border-b-[#272E5C] dark:border-b-[#242424]"></div>
      <div className=" h-[400px] w-full bg-[#272E5C] dark:bg-[#242424]">
        <div>
          <div className=" flex h-full w-full ">
            <div className=" relative">
              <img
                className=" ml-[50px]"
                src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=750&q=75"
                alt=""
              />
            </div>
            <div className="">
              <div className=" flex">
                <h1 className=" text-[70px] font-semibold text-white">Meet </h1>
                <h1 className=" text-[70px] font-semibold text-blue-500">
                  Tru-AI
                </h1>
              </div>
              <h1 className=" text-[30px] font-semibold text-white">
                Design. Create. Deploy.
              </h1>
              <h1 className=" text-[30px] font-semibold text-blue-500">
                the Future of AI | Power to EDIT
              </h1>
              <h1 className=" text-[20px] font-semibold text-white">
                Based On Your Website & Traffic Trends, Tru-AI Optimises Your
                Website
              </h1>
            </div>
            <div className=" relative flex justify-center items-center">
              <div className=" flex items-center justify-center h-[200px] w-[300px] ">
                <video
                  muted
                  autoPlay
                  loop
                  className="z-0 h-[100%] w-[100%] object-cover rounded-l-full"
                >
                  <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <button className=" text-lg px-10 py-3 font-semibold text-white border-white border rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/*end Creating MEET Tru-AI */}
    </div>
  );
};

export default Services;
