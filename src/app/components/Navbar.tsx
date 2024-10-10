"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar animation with GSAP
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        opacity: 100,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        opacity: 0,
        ease: "power3.in",
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="z-20 sticky md:top-5 md:mx-32 rounded-full text-black">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex md:flex-row flex-col backdrop-blur-lg bg-gradient-to-r from-gray-200/50 via-gray-100/30 to-gray-200/50 bg-opacity-40 shadow-black py-2 rounded-full items-center justify-center space-x-32">
          <a href="/">
            <div className="flex justify-center items-center space-x-2">
              <p className="font-semibold text-3xl">Neuzify</p>
            </div>
          </a>
          <div className="flex flex-row rounded-full backdrop-blur-lg bg-gray-200/10 border border-gray-950 bg-opacity-40">
            <ul className="flex flex-row justify-around space-x-5 px-2 py-2 mx-10 ">
              <li>
                <Link href={"/about"} className="font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/pricing"} className="font-medium">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href={"/career"} className="font-medium">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </nav>



        {/* Mobile Navbar */}
        <nav className="md:hidden py-3 px-3 backdrop-blur-lg from-gray-800/50 via-gray-700/30 to-gray-800/50 border shadow-xl">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center space-x-2">
              <p className="font-semibold text-2xl ">Neuzify</p>              
            </div>
            <div onClick={toggleMobileMenu} className="cursor-pointer">
              <div className="space-y-2">
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
              </div>
            </div>
          </div>

          {/* Sidebar Menu */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 opacity-0 left-0l w-2/3 bg-blue-950 shadow-lg transform -translate-x-full z-50`}
            style={{
              transform: isMobileMenuOpen
                ? "translateX(0)"
                : "translateX(-100%)",
            }}
          >
            <div className="flex justify-between items-center p-5">
              <p className="text-white text-lg font-semibold">Menu</p>
              <button
                onClick={toggleMobileMenu}
                className="text-white font-bold text-lg"
              >
                &times;
              </button>
            </div>
            <div className="bg-blue-950 text-white h-screen">
              <ul className="flex flex-col space-y-4 pl-5">
                <li>
                  <Link href={"/about"} className="text-lg font-semibold">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/pricing"} className="text-lg">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={"/career"} className="text-lg">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
