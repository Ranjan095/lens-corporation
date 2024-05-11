"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const Client = () => {
  const settings = {
    // dots: true,
    pauseOnHover: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" dark:bg-black">
      <div className=" p-[100px]">
        <h1 className=" text-[32px] font-semibold dark:text-white text-center">
          We Work With Amazing Clients
        </h1>
      </div>
      <div className="slider-container text-white hidden md:block pb-[100px] ">
        <Slider {...settings}>
          <div className="rounded-lg ">
            <Image
              width={200}
              height={200}
              alt=""
              className="max-h-[200px] md:max-h-[300px] lg:max-h-[350px] object-cover"
              src={
                "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_1.ad2ee302.png&w=640&q=75"
              }
              priority={true}
            />
          </div>
          <div className="rounded-lg">
            <Image
              width={200}
              height={200}
              alt=""
              className="max-h-[200px] md:max-h-[300px] lg:max-h-[350px] object-cover"
              src={
                "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=640&q=75"
              }
              priority={true}
            />
          </div>
          <div className="rounded-lg">
            <Image
              width={200}
              height={200}
              alt=""
              className="max-h-[200px] md:max-h-[300px] lg:max-h-[350px] object-cover"
              src={
                "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCo_3.37f82c98.png&w=640&q=75"
              }
              priority={true}
            />
          </div>
          <div className="rounded-lg">
            <Image
              width={200}
              height={200}
              alt=""
              className="max-h-[200px] md:max-h-[300px] lg:max-h-[350px] object-cover"
              src={
                "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=640&q=75"
              }
              priority={true}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Client;
