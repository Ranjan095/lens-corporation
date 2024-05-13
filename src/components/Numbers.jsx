import React from "react";

const Numbers = () => {
  return (
    <div className=" flex justify-center md:p-[50px] h-[400px] bg-[#242424]">
      <div className="  ">
        <h1 className=" text-center text-white text-[32px] pb-[20px]">
          By the numbers
        </h1>
        <div className=" md:flex justify-center text-center text-white font-semibold">
          <div className=" md:border-r md:w-[200px] mx-[20px]  p-[20px]">
            <div className=" flex justify-center text-center text-[30px] md:text-[40px]">
              <h1 className=" ">15</h1>
              <h1 className=" text-[#585858]">+</h1>
            </div>
            <h1 className=" text-[18px]">Solutions for Global crises</h1>
          </div>
          <div className=" md:border-r md:w-[200px]  mx-[20px]  p-[20px]">
            <div className=" flex justify-center text-center text-[30px] md:text-[40px]">
              <h1 className=" ">10</h1>
              <h1 className=" text-[#585858]">+</h1>
            </div>
            <h1 className=" text-[18px]">University Collaborations</h1>
          </div>{" "}
          <div className=" md:w-[200px]  mx-[20px]  p-[20px] ">
            <div className=" flex justify-center text-center text-[30px] md:text-[40px]">
              <h1 className=" ">25</h1>
              <h1 className=" text-[#585858]">+</h1>
            </div>
            <h1 className=" text-[18px]">Employees Worldwide</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
