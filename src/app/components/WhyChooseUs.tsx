import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center my-32 px-20">
        <p className="text-5xl font-semibold mb-20 textgray-900">Why Use Neuzify</p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="">
            <p className="text-4xl mb-16 font-medium text-gray-700 text-opacity-90 w-fit shadow-2xl">
              For Creators
            </p>
            <ul className="custom-list space-y-4">
              <li className="text-2xl">
                Save time by managing all newsletters from a single dashboard.
              </li>
              <li className="text-2xl">
                Effortless analytics tracking across all platforms.
              </li>
              <li className="text-2xl">
                Real-time performance insights to grow your audience faster.
              </li>
              <li className="text-2xl">
                Implement it on your own website through our SDK
              </li>
            </ul>
          </div>
          <div>
            <Image
              className="shadow-xl mr-20"
              src={"/assets/creator.svg"}
              alt="creator"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-20 justify-around items-center">
          <div>
            <p className="text-4xl mb-16 font-medium text-gray-700 text-opacity-90 w-fit shadow-2xl">
              For Readers{" "}
            </p>
            <ul className="custom-list space-y-4">
              <li className="text-2xl">
                Find quality newsletters from a single hub
              </li>
              <li className="text-2xl">
                Personalized recommendations based on your reading interests.
              </li>
              <li className="text-2xl">
                Save time discovering niche content that matches your
                preferences.
              </li>
              <li className="text-2xl">
                Track your reading habits and learn about your content
                consumption patterns.
              </li>
            </ul>
          </div>
          <div>
            <Image
              className="shadow-xl mr-20"
              src={"/assets/Bibliophile.svg"}
              alt="reador"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
