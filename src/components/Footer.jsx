import { Facebook, Github, Instagram, Linkedin, X } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div>
      <section className="relative overflow-hidden py-10 dark:bg-black dark:text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <img
                    className="rounded-full w-[100px]"
                    src={
                      "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
                    }
                    alt="Logo"
                  />
                </div>

                <div>
                  <p className="mb-4  text-base font-medium">
                    Tomorrow&apos;s Vision, Today!
                  </p>
                </div>
                <div className=" flex gap-4">
                  <Facebook size={30} />
                  <Instagram />
                  <Linkedin />
                  <Github />
                  <X />
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-[48] tracking-widest font-semibold uppercase ">
                  SITEMAP
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium  hover:text-blue-400"
                      href="#"
                    >
                      MakeMyWeb.
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium  hover:text-blue-400"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium  hover:text-blue-400"
                      href="#"
                    >
                      Products
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium hover:text-blue-400"
                      href="#"
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium hover:text-blue-400"
                      href="#"
                    >
                      Life at LENS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-[48] tracking-widest font-semibold uppercase ">
                  CONNECT
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium  hover:text-blue-400"
                      href="#"
                    >
                      +1-517-9300-792
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium  hover:text-blue-400"
                      href="#"
                    >
                      +91-9990-736-796
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium  hover:text-blue-400"
                      href="#"
                    >
                      solutions@lenscorp.ai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" dark:bg-[#242424] bg-[#272E5C] h-[100px] flex justify-between items-center px-[10%] text-white">
        <h1 className=" text-[15px] font-semibold">
          2023 LENS, Inc. All rights reserved.
        </h1>
        <h1 className=" text-[15px] font-semibold">
          Code of conduct Sustainability Goals
        </h1>
      </div>
    </div>
  );
}
export default Footer;
