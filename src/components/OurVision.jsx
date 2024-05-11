import React from "react";

const OurVision = () => {
  return (
    <div className="dark:bg-black">
      <div className=" p-[68px] flex flex-col items-center">
        <h1 className=" text-[25px] font-medium dark:text-white text-center">
          OUR VISION
        </h1>

        <div className=" w-[75px] h-[4px] bg-gradient-to-r from-[#0896FF] via-[#3AB9FF] to-[#93F7FF] rounded-full"></div>
        <h1 className="dark:text-[#fff] text-center text-[30px] lg:text-[58px] my-[30px] lg:px-20 ">
          AI for Social Good
        </h1>
        <h1 className=" text-gray-500 font-semibold text-[20px] text-center  lg:tracking-wide lg:w-[60%]">
            Every piece of AI technology shipped from LENS is thoroughly
            benchmarked via rigorous evaluations. With a global network of
            experts and academicians, we guarantee the most accurate and robust
            solutions in the market.
          </h1>
          
      </div>
    </div>
  );
};

export default OurVision;
