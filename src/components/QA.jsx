"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const QA = ({ title, content }) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" cursor-pointer rounded-md border border-gray-400 transition-all duration-300 w-[350px] md:w-[600px]">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
          className="flex w-full items-start  justify-between px-4 py-5 sm:p-6 md:items-center"
        >
          <span className="flex text-start text-lg font-semibold  dark:text-white">
            {title}
          </span>
          {!isOpen ? (
            <ChevronDown className=" h-5 w-5 dark:text-white " />
          ) : (
            <ChevronUp className=" h-5 w-5 dark:text-white " />
          )}
        </button>
      </div>
      <p
        className={` ${
          !isOpen && "hidden"
        } transition-opacity duration-500 mt-4 max-w-xl text-base leading-relaxed text-[#999999] font-semibold lg:mx-auto`}
      >
        {content}
      </p>
    </div>
  );
};

export default QA;
