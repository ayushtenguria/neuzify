"use client"
import React, { useEffect, useRef } from "react";
import logo from "../../../public/assets/Investments.png";
import Image from "next/image";
import { gsap } from "gsap";

const Hero = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="flex md:flex-row flex-col p-32 space-x-5 justify-center opacity-0 items-center"
      >
        <div>
          <p className="text-4xl font-medium">
            Simplify Newsletter Management, Amplify Your Reach.
          </p>
          <p className="text-xl">
            One platform to create, manage, and discover newsletters effortlessly
          </p>
          <button className="mt-6 px-6 py-2 w-60 font-semibold bg-blue-950 text-white rounded-lg shadow hover:bg-blue-900 hover:scale-105 transform transition-transform duration-300">
            Add to Waitlist
          </button>
        </div>
        <div>
          <Image
            className="drop-shadow-2xl"
            src={logo}
            alt="HeaderImage"
            height={1000}
            width={1000}
          />
        </div>
      </header>
    </>
  );
};

export default Hero;
