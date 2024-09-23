"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUseUs = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section) => {
      const paragraphs = section.querySelectorAll("p");

      paragraphs.forEach((paragraph) => {
        gsap.fromTo(
          paragraph,
          {
            opacity: 0, // Start fully hidden
            y: 50, // Start slightly below its position
          },
          {
            opacity: 1, // End fully visible
            y: 0, // End at original position
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 80%", // Trigger when top of paragraph reaches 80% of the viewport
              end: "top 60%", // End when it scrolls to 60% of the viewport
              toggleActions: "play none none none", // Play the animation once
              markers: false, // Disable debug markers
            },
          }
        );
      });
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
          className="h-screen w-full flex flex-col justify-center items-center text-center"
        >
          <p className="text-5xl font-semibold text-gray-900">Do You Find...</p>
          <p className="text-3xl mt-4 max-w-2xl mx-auto">
            Managing multiple newsletters, analytics tracking, and content
            planning is overwhelming. Different platforms, varying analytics,
            and lack of streamlined creation can eat up your time.
          </p>
        </div>

        {/* Full-screen section 2 */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
          className="h-screen w-full flex flex-col justify-center items-center text-center"
        >
          <p className="text-5xl font-semibold text-gray-900">
            As Content Consumer
          </p>
          <p className="text-3xl mt-4 max-w-2xl mx-auto">
            Finding quality newsletters across niches and tracking what you’ve
            already read feels like a full-time job.
          </p>
        </div>

        {/* Full-screen section 3 */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
          className="h-screen w-full flex flex-col justify-center items-center text-center"
        >
          <p className="text-5xl font-semibold text-gray-900">
            Here Comes Neuzify
          </p>
          <p className="text-3xl mt-4 max-w-2xl mx-auto">
            We provide a unified solution that allows creators to easily manage
            newsletters, while offering readers a single place to discover and
            read high-quality content.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyUseUs;
