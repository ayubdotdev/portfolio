
"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return <TypeAnimation sequence={["I Make Cool Websites", 1000, "I Write Backends", 1000,"I Am Learning More",1000]} wrapper="span" speed={40} className="font-bold lg:text-3xl text-cyan-300" repeat={Infinity} />;
};

export default TypingAnimation;
