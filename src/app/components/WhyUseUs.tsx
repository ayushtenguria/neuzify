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
        // Ensure section is not null
        const paragraphs = section.querySelectorAll("p");

        paragraphs.forEach((paragraph) => {
          gsap.fromTo(
            paragraph,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: paragraph,
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none none none",
                markers: false,
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
