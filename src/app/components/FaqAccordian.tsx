"use client";

import { useState } from "react";
import faqData from "../Data/Faq.json";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="my-10">
      {faqData.map((item: FAQItem, index: number) => (
        <div key={item.number} className="">
          <input
            type="checkbox"
            className="hidden"
            id={`faq-${item.number}`}
            checked={openIndex === index}
            onChange={() => toggleAccordion(index)}
          />
          <label className=" flex justify-between md:space-y-12" htmlFor={`faq-${item.number}`}>
             <div className=" flex p-3 md:w-[35rem] xl:[w-45rem] text-left space-x-3 md:space-x-24">
              <div className="">
                <p className="text-blue-950 text-lg md:text-2xl font-semibold">
                  {item.number}
                </p>
              </div>
              <div className="text-left text-black">
                <p className="text-left md:w-[20rem] ">{item.question}</p>
                <div
                  className={` ${
                    openIndex === index ? "block" : "hidden"
                  } transition-all mt-5 ease-in-out duration-300`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">{openIndex === index ? "-" : "+"}</div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
