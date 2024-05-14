import { blogs } from "@/utils/blogs";
import React from "react";
import BlogCard from "./BlogCard";

const OurBlogs = () => {
  return (
    <div className="dark:bg-black ">
      <div className=" p-[40px] lg:p-[68px] flex flex-col items-center">
        <h1 className=" text-[25px] font-medium tracking-wider dark:text-white text-center">
          OUR BLOGS
        </h1>
        <div className=" w-[75px] h-[4px] bg-gradient-to-r from-[#0896FF] via-[#3AB9FF] to-[#93F7FF] rounded-full"></div>
      </div>
      <p className="dark:text-[#fff] text-center text-[30px] tracking-wider font-semibold md:text-[58px] px-20 ">
        Inhouse Mindscape
      </p>
      <div className=" flex justify-center ">
        <div className=" md:grid justify-items-center items-center grid-cols-2 w-[60%] z-50">
          {blogs.map((ele, i) => (
            <div key={i}>
              <BlogCard {...ele} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
