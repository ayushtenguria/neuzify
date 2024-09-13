"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeatureSection() {
  const rightSectionRef = useRef<HTMLDivElement | null>(null); // Add type for TypeScript
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (rightSectionRef.current) {
      const rightSections = rightSectionRef.current.querySelectorAll(
        ".scroll-item"
      );

      rightSections.forEach((section: Element, i: number) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            handleSectionChange(i);
          },
          onEnterBack: () => {
            handleSectionChange(i);
          },
          scrub: true,
        });
      });
    }
  }, []);

  const handleSectionChange = (i: number) => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setActiveSection(i); // Change content after transition starts
      setIsTransitioning(false); // End transition
    }, 500); // Matches transition duration
  };

  const leftContent = [
    {
      title: "One-Click Newsletter Creation",
      description:
        "Easily create new newsletters with customizable templates in just a few clicks.",
    },
    {
      title: "Centralized Dashboard",
      description:
        "Manage all your newsletters from one intuitive dashboard with real-time analytics.",
    },
    {
      title: "Newsletter Discovery Hub",
      description:
        "Users can explore, follow, and receive recommendations from newsletters across various niches.",
    },
    {
      title: "Get Detailed Analytics",
      description:
        "Track opens, clicks, engagement, and learning patterns from both a creator and user perspective.",
    },
  ];

  return (
    <>
      <section className="px-10">
        <div className="flex">
          {/* Left Section: Sticky */}
          <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center ml-20">
            <div
              className={`transition-opacity ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-3xl font-semibold">
                {leftContent[activeSection].title}
              </h1>
              <p className="text-left text-xl w-96">
                {leftContent[activeSection].description}
              </p>
            </div>
          </div>

          {/* Right Section: Scrollable */}
          <div
            className="right-part w-1/2 h-[200vh] overflow-hidden py-72 flex flex-col justify-start items-center"
            ref={rightSectionRef}
          >
            <div className="scroll-item backdrop-blur-lg rounded-2xl bg-gradient-to-r from-blue-50/50 via-blue-300/30 to-blue-100/50 bg-opacity-40 shadow-black drop-shadow-xl w-3/4 h-screen my-10 flex justify-center items-center">
              <Image
                src={"/assets/newsletter.svg"}
                alt="Newsletter"
                width={500}
                height={500}
              />
            </div>
            <div className="scroll-item backdrop-blur-lg rounded-2xl bg-gradient-to-r from-blue-50/50 via-blue-300/30 to-blue-100/50 bg-opacity-40 shadow-black drop-shadow-xl w-3/4 h-screen my-10 flex justify-center items-center">
              <Image
                src={"/assets/dashboard.png"}
                alt="Dashboard"
                width={500}
                height={500}
              />
            </div>
            <div className="scroll-item backdrop-blur-lg rounded-2xl bg-gradient-to-r from-blue-50/50 via-blue-300/30 to-blue-100/50 bg-opacity-40 shadow-black drop-shadow-xl w-3/4 h-screen my-10 flex justify-center items-center">
              <Image
                src={"/assets/discover.svg"}
                alt="Discover"
                width={500}
                height={500}
              />
            </div>
            <div className="scroll-item backdrop-blur-lg rounded-2xl bg-gradient-to-r from-blue-50/50 via-blue-300/30 to-blue-100/50 bg-opacity-40 shadow-black drop-shadow-xl w-3/4 h-screen my-10 flex justify-center items-center">
              <Image
                src={"/assets/analytics.svg"}
                alt="Analytics"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
