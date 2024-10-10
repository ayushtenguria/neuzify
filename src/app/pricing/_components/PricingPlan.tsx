import React from "react";
import PricingFeatureCard from "./PricingFeatureCard";
import ReceiptIcon from "@mui/icons-material/Receipt";

const PricingPlan = () => {
  return (
    <section className="text-white bg-blue-950 px-10 md:px-36 py-24 flex flex-col justify-center items-center  my-10">
      <p className="text-4xl font-bold ">
        Our Pricing Plans Will Be Published Soon!
      </p>
      <p className="text-xl mb-28 mt-5 ">
        Stay tuned for more details on our pricing model!
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <PricingFeatureCard
          icon={<ReceiptIcon className="text-4xl" />}
          heading="Monthly plans"
        />
        <PricingFeatureCard
          icon={<ReceiptIcon className="text-4xl" />}
          heading="No commitment"
        />
        <PricingFeatureCard
          icon={<ReceiptIcon className="text-4xl" />}
          heading="No hidden costs, control your budget"
        />
      </div>
    </section>
  );
};

export default PricingPlan;
