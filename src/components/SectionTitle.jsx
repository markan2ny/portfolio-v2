import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <h2 className="font-squada text-3xl text-center font-black xl:text-6xl bg-gradient-to-tr from-cyan-500 to-pink-500 text-transparent bg-clip-text md:mb-10 mb-5">
      {title}
    </h2>
  );
};
