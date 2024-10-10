import React from "react";
import { ReactNode } from "react";

interface PricingFeatureProps {
  heading: string;
  icon: ReactNode;
}

const PricingFeatureCard = ({ heading, icon }: PricingFeatureProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="-mb-4">{icon}</div>
      </div>
      <div className="flex flex-col justify-center w-56 h-32 items-center bg-gray-950/50 backdrop:blur-xl p-5 rounded-xl text-white">
        <div className="flex items-center justify-center">
          <p className="font-bold text-xl  text-center">{heading}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingFeatureCard;
