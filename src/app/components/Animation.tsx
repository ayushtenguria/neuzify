"use client";

import React from "react";
import Player from "lottie-react";
import Lottie from "lottie-react";
import animationData from "../../../public/animation/success.json"; // Adjust the path accordingly
import { Loop } from "@mui/icons-material";

const Animation = () => {
  return (
    <div className="mt-10">
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
};

export default Animation;
