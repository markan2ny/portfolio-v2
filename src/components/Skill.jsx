import React from "react";
import { Icon } from "./Icon";

export const Skill = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-1 text-md md:text-lg text-white bg-gradient-to-r from-cyan-400 to-pink-400 px-3 py-2 md:px-4 md:py-2 rounded-xl hover:scale-110 transition-all">
      {icon}
      {text}
    </div>
  );
};
