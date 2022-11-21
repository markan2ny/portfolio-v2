import React, { useState } from "react";
import * as Fa from "react-icons/fa";

export const Toggle = ({ showSidebar }) => {
  return (
    <div className="fixed top-3 left-3 z-30 md:hidden">
      <Fa.FaBars
        className="text-2xl cursor-pointer"
        onClick={() => showSidebar((prev) => !prev)}
      />
      <span className="text-[8px] absolute -bottom-3 left-0">MENU</span>
    </div>
  );
};
