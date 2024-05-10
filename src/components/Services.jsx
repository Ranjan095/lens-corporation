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
    </div>
  );
};

export default Services;
