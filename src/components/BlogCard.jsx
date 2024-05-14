"use client";

import React, { useState } from "react";

const BlogCard = ({ id, date, title, content }) => {
  const [dateHover, setDateHover] = useState(false);

  return (
    <div className="z-10  overflow-hidden py-[20px]  px-[10px] relative m-[5px] dark:bg-[#1B1C1E] rounded-2xl hover:bg-[#FFFCF6]">
      <div
        className={`z-0 h-[500px]  p-[10px] relative transition-all duration-300 transform ${
          dateHover ? "-translate-y-[60px]" : "translate-y-0"
        }`}
        onMouseEnter={() => setDateHover(true)}
        onMouseLeave={() => setDateHover(false)}
      >
        <div className="mb-[50px] relative">
          <h1
            className={`${
              date === "New!" ? "text-[#f86360]" : "text-gray-500"
            } text-[20px]`}
          >
            {date}
          </h1>
          <h1 className="text-[28px] pt-[30px] dark:text-white">{title}</h1>
        </div>
        <div
          className={`py-[50px] px-[10px] rounded-2xl dark:bg-[#242424] ${
            id === 1
              ? "bg-[#FFF6CD]"
              : id === 2
              ? "bg-[#E2F2FF]"
              : "bg-[#FFECEB]"
          }`}
        >
          <h1 className="text-[16.5px] text-[#828282] font-semibold">
            {content}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
