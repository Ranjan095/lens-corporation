import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="dark:bg-black">
      <div className="  p-10">
        <h1 className=" text-6xl dark:text-white text-center">About Us</h1>
      </div>
      <div className="  flex justify-center items-center">
        <section className=" rounded-2xl transition ease-in-out delay-15 duration-500 hover:scale-110 w-[80%] lg:h-[500px] bg-[#E2F2FF] dark:bg-[#1B1C1E]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-centerfdasfa justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md px-5">
                <h2 className="text-3xl dark:text-white py-5 font-bold leading-tight text-[#000000] sm:text-4xl">
                  Welcome To LENS
                </h2>
                <p className="mt-2 text-base dark:text-[#ABABAB] text-[#686C70]">
                  We put our hearts, souls and sweat into designing and
                  developing custom AI - powered solutions for your business so
                  you don&apos;t have to.
                </p>
                <button className=" text-lg px-6 mt-8 dark:text-white dark:border-white border border-[#000000] text-[#000000] rounded-md py-2">
                  Learn More
                </button>
                <div className="mt-3 space-y-3"></div>
              </div>
            </div>
            <div className="h-full w-full p-6 ">
              <img
                className=" rounded-xl transition duration-500 hover:scale-105  mx-auto h-[450px] object-cover w-full rounded-md border border-spacing-4 border-8 hover:border-0 border-white "
                src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=828&q=75"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
