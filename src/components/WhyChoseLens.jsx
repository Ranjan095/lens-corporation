import { wclList } from "@/utils/wclList";
import { Check } from "lucide-react";
import React from "react";
import WclCard from "./WclCard";

const WhyChoseLens = () => {
  return (
    <div className="dark:bg-black">
      <div className=" p-[68px] flex flex-col items-center">
        <h1 className=" text-[25px] font-medium dark:text-white text-center">
          WHY CHOOSE LENS
        </h1>
        <div className=" w-[75px] h-[4px] bg-gradient-to-r from-[#0896FF] via-[#3AB9FF] to-[#93F7FF] rounded-full"></div>
      </div>
      <div className=" flex justify-center items-center">
        <div className=" text-center  w-[60%]  ">
          <h1 className=" text-[58px] tracking-widest dark:text-white ">
            AI-driven solutions backed by science
          </h1>
          <h1 className=" text-gray-500 font-semibold text-[20px] tracking-widest m-[50px]">
            Every piece of AI technology shipped from LENS is thoroughly
            benchmarked via rigorous evaluations. With a global network of
            experts and academicians, we guarantee the most accurate and robust
            solutions in the market.
          </h1>
          <div className=" flex justify-center items-center tracking-widest gap-[30px]">
            <div className="text-gray-800 text-left  dark:text-white font-bold text-[18px]">
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>State-of-the-art solutions</p>
              </div>
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>Fast & Efficient</p>
              </div>
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>No extra computation fee</p>
              </div>
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>No licensing fee</p>
              </div>
            </div>
            <div className="text-gray-800 text-left dark:text-white font-bold text-[18px] ">
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p> Lifetime support & upgrades</p>
              </div>
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>Lifetime support & upgrades</p>
              </div>
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>24x7 Progress Monitoring</p>
              </div>
              <div className=" flex gap-2">
                {" "}
                <Check />
                <p>Incremental Updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why chose Lens Card */}
      <div className=" grid mt-[70px] grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center text-center gap-4 p-[30px] ">
        {wclList.map((ele) => (
          <WclCard key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default WhyChoseLens;
