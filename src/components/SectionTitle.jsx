import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-3xl font-black md:text-5xl tracking-wider bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text md:mb-10 mb-5 text-center md:text-left">
      {title}
    </h2>
  );
};
