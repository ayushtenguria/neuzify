import React from "react";
import SectionContent from "./WhyChooseUSSection";

const WhyChooseUs = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center my-32 px-10 md:px-20">
        <p className="text-5xl font-semibold mb-20 text-gray-900">
          Why Use Neuzify
        </p>

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
      </section>
    </>
  );
};

export default WhyChooseUs;
