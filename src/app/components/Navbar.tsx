"use client";

// import Image from "next/image";
// import logo from "../../../public/logo.png";
// import { ContactButton } from "./ContactUsButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <>
      <div className="z-20 sticky top-5 mx-32 rounded-full text-black">
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
                <Link href={"#pricing"} className="font-medium">
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
          {/* <div>
            <ContactButton />
          </div> */}
        </nav>

        {/* Mobile Navbar */}
        {/* <nav className="md:hidden py-3 px-3 backdrop-blur-lg bg-gradient-to-r from-gray-800/50 via-gray-700/30 to-gray-800/50 border border-gray-200 bg-opacity-40 shadow-xl">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center space-x-2">
              <Image
                className="rounded-full"
                src={logo}
                alt="logo"
                height={30}
              />
              <p className="font-semibold text-black">HackTiger Labs</p>
            </div>
            <div onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <CloseIcon className="text-black" />
              ) : (
                <MenuIcon className="text-black" />
              )}
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="flex flex-col mt-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link href={"/about"} className="text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/career"} className="text-black">
                    Career
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <ContactButton />
              </div>
            </div>
          )}
        </nav> */}
      </div>
    </>
  );
};
