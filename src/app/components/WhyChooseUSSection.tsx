import Image from "next/image";
import React from "react";

interface SectionContentProps {
    title: string;
    items: string[];
    imageSrc: string;
    imageAlt: string;
    isReversed?: boolean;
  }

const SectionContent = ({ title, items, imageSrc, imageAlt, isReversed } : SectionContentProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } justify-around items-center my-20`}
    >
      <div className="md:w-1/2">
        <p className="text-4xl mb-8 font-medium text-gray-700 text-opacity-90 w-fit">
          {title}
        </p>
        <ul className="space-y-4 custom-list">
          {items.map((item, index) => (
            <li key={index} className="text-2xl custom-list">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          className=""
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          priority={true}
        />
      </div>
    </div>
  );
};

export default SectionContent;
