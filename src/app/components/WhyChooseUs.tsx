"use client";
import React, { useEffect, useRef } from "react";
import SectionContent from "./WhyChooseUSSection";
import gsap from "gsap";

const WhyChooseUs = () => {
  const headref = useRef(null);

  useEffect(() => {
    const element = headref.current;

    // Create an IntersectionObserver to watch when the component enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger GSAP animation when the component is in view
            gsap.fromTo(
              element,
              { opacity: 0 },
              { opacity: 1, duration: 1, ease: "power3.out" }
            );
            // observer.unobserve(element); // Optional: stop observing after the animation
          }
        });
      },
      { threshold: 0.7 } // Adjust this to control how much of the element must be in view before triggering
    );

    if (element) {
      observer.observe(element); // Start observing the element
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <>
      <section className="flex flex-col  justify-center items-center my-32 px-10 md:px-20">
        <p className="text-5xl font-semibold mb-20 text-gray-900">
          Why Use Neuzify
        </p>
        <div
          ref={headref}
          className="flex opacity-0 flex-col md:flex-row shadow-xl rounded-lg p-5 space-x-3"
        >
          <div className="m-5">
            <SectionContent
              title="For Creators"
              items={[
                "Save time by managing all newsletters from a single dashboard.",
                "Effortless analytics tracking across all platforms.",
                "Real-time performance insights to grow your audience faster.",
                "Implement it on your own website through our SDK.",
              ]}
              imageSrc="/assets/creator.svg"
              imageAlt="creator"
            />
          </div>
          <div className="m-5">
            <SectionContent
              title="For Readers"
              items={[
                "Find quality newsletters from a single hub.",
                "Personalized recommendations based on your reading interests.",
                "Save time discovering niche content that matches your preferences.",
                "Track your reading habits and learn about your content consumption patterns.",
              ]}
              imageSrc="/assets/Bibliophile.svg"
              imageAlt="reader"
              isReversed={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
