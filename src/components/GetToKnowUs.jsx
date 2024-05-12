import { questions } from "@/utils/questions";
import React from "react";
import QA from "./QA";

const GetToKnowUs = () => {
  return (
    <div className="dark:bg-black">
      <div className=" p-[58px] flex flex-col items-center font-semibold">
        <h1 className=" text-[25px] font-medium dark:text-white text-center">
          GET TO KNOW US
        </h1>

        <div className=" w-[75px] h-[4px] bg-gradient-to-r from-[#0896FF] via-[#3AB9FF] to-[#93F7FF] rounded-full"></div>
        <h1 className="dark:text-[#fff] text-center text-[30px] lg:text-[58px] my-[30px] lg:px-20 ">
          Frequently Asked Questions
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start text-left gap-5">
        {questions?.map((que, i) => (
          <div key={i} className="">
            <QA {...que} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetToKnowUs;
