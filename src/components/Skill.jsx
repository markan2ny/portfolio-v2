import React from "react";

export const Skill = ({ text }) => {
  return (
    <div className="inline text-sm md:text-lg text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-1 md:px-4 md:py-2 rounded-xl hover:scale-110 transition-all">
      {text}
    </div>
  );
};
