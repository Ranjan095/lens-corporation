"use client";
import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import logo from "../../public/logo.png";

import Image from "next/image";
const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Company",
    href: "/company",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // console.log(theme);

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(
        currentScrollPos <= 10 || currentScrollPos < prevScrollPos
      );
      setPrevScrollPos(currentScrollPos);
    };
    
    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, theme]);

  let handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-10 w-full bg-white dark:bg-gray-800 p-5 transition-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-20">
        <div className="inline-flex items-center space-x-2">
          <Link href={"/"}>
            <span>
              <img
                width={50}
                height={50}
                className="rounded-full"
                src={
                  "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
                }
                alt="Logo"
              />
            </span>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <Link
              href="https://makemyweb.ai/en"
              target="new"
              className="text-md font-medium text-black dark:text-white hover:text-gray-900"
            >
              MakeMyWeb
            </Link>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-md font-medium text-black dark:text-white hover:text-gray-900`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <ul>
              {theme === "dark" ? (
                <Sun
                  size={26}
                  className=" text-yellow-400"
                  onClick={handleTheme}
                />
              ) : (
                <Moon className=" text-blacks" onClick={handleTheme} />
              )}
            </ul>
          </ul>
        </div>

        <div className="lg:hidden flex justify-center items-center">
          <button
            className="  p-2 rounded-full  mr-4 "
            onClick={() => {
              handleTheme();
            }}
          >
            {theme === "dark" ? (
              <Sun size={26} className=" text-yellow-400" />
            ) : (
              <Moon className=" text-blacks" onClick={handleTheme} />
            )}
          </button>
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        width={50}
                        height={50}
                        className="rounded-full"
                        src={
                          "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
                        }
                        alt="Logo"
                      />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        onClick={toggleMenu}
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
