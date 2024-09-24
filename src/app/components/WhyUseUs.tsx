"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUseUs = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section) => {
      if (section) {
        const paragraphs = section.querySelectorAll("p");

        paragraphs.forEach((paragraph) => {
          gsap.fromTo(
            paragraph,
            {
              opacity: 0,
              y: 50, // Starting below the view
            },
            {
              opacity: 1,
              y: 0, // Moving to center
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph,
                start: "top center", // Pin starts when the paragraph hits the center
                end: "+=250", // Adjust the end to avoid overlapping
                pin: true, // Pin the paragraph
                scrub: true, // Smooth pinning effect
                markers: false, // Set to true if you want to debug
                immediateRender: false,
              },
            }
          );
        });
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <section className="flex flex-col justify-center items-center">
        {/* Full-screen section 1 */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
          className="h-screen w-full flex flex-col justify-center items-center text-center mb-32" // Add margin-bottom to ensure space
        >
          <div className="p-10">
            {/* <p className="text-3xl md:text-5xl font-semibold text-gray-900"></p> */}
            <p className="flex flex-col text-xl md:text-3xl mt-4 max-w-2xl mx-auto">
              <strong className="text-3xl md:text-5xl font-semibold text-gray-900">
                Do You Find...
              </strong>
              Managing multiple newsletters, analytics tracking, and content
              planning is overwhelming. Different platforms, varying analytics,
              and lack of streamlined creation can eat up your time.
            </p>
          </div>
        </div>

        {/* Full-screen section 2 */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
          className="h-screen w-full flex flex-col justify-center items-center text-center mb-32" // Add margin-bottom to ensure space
        >
          <div className="p-10">
            {/* <p className="text-3xl md:text-5xl font-semibold text-gray-900"></p> */}
            <p className="flex flex-col text-xl md:text-3xl mt-4 max-w-2xl mx-auto">
              <strong className="text-3xl md:text-5xl font-semibold text-gray-900">
                As Content Consumer
              </strong>
              Finding quality newsletters across niches and tracking what you’ve
              already read feels like a full-time job.
            </p>
          </div>
        </div>

        {/* Full-screen section 3 */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
          className="h-screen w-full flex flex-col justify-center items-center text-center mb-32" // Add margin-bottom to ensure space
        >
          <div className="p-10">
            {/* <p className="text-3xl md:text-5xl font-semibold text-gray-900"></p> */}
            <p className="flex flex-col text-xl md:text-3xl mt-4 max-w-2xl mx-auto">
              <strong className="text-3xl md:text-5xl font-semibold text-gray-900">
                {" "}
                Here Comes Neuzify
              </strong>
              A unified solution that allows creators to easily manage
              newsletters, while offering readers a single place to discover and
              read high-quality content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUseUs;
