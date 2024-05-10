import React from "react";

const WclCard = ({ id, color, title, avatar, content }) => {
  return (
    <div
      className={`w-[400px] hover:bg-gradient-to-b ${
        id === 1
          ? ` dark:from-[#001D16] via-[#00140F] to-[#000604] from-[#AFEADD] via-[#CDF0EA] to-[#ECF7F1]`
          : id === 2
          ? `dark:from-[#012230] via-[#01141C] to-[#00080B] from-[#A8E3F9] via-[#C7EAF2] to-[#EAEDE7]`
          : id === 3
          ? `dark:from-[#321514] via-[#1D0C0C] to-[#060202] from-[#E3D6DA] via-[#E1E3E5] to-[#F1E4DD]`
          : `dark:from-[#251707] via-[#130C04] to-[#090602] from-[#F9E9D2] via-[#FCF3E2] to-[#FCFAF2]`
      } hover:border border-[${color}] h-[500px] rounded-2xl dark:bg-[#1B1C1E] bg-[#FFFEFC]`}
    >
      <div>
        <h1 className=" mt-[10%] text-[27px] font-bold dark:text-white">
          {title}
        </h1>
      </div>{" "}
      <div className=" flex justify-center my-[50px] h-[40%] items-center">
        <img src={avatar} alt="" />
      </div>
      <p className=" font-semibold text-[16px] tracking-wide text-[#6D7578]">
        {content}
      </p>
    </div>
  );
};

export default WclCard;
