import React, { useEffect, useState } from "react";
import * as Ai from "react-icons/ai";

export const Sidebar = ({ showSidebar, style }) => {
  return (
    <aside
      className={`fixed flex left-0 top-0 flex-1 md:border md:border-r-slate-200 w-[50px] md:w-[110px] min-h-screen z-10 transition-all ease-in-out ${!showSidebar ? "left-[-110px] duration-500" : "left-0"
        }`}
    >
      <div className="flex justify-between flex-col items-center w-full h-[70vh] md:h-[100vh] my-auto rounded-tr-xl rounded-br-xl shadow-xl md:shadow-sm md:rounded-none md:bg-white md:py-10 bg-gradient-to-br from-cyan-500 to-teal-500">
        <div className="pt-5 animate-pulse">
          <a
            href="#home"
            className="font-bold text-2xl text-white md:text-3xl"
          >
            M
          </a>
        </div>
        <nav>
          <ul className="flex flex-col gap-10 text-2xl font-bold text-slate-500">
            <li>
              <a href="#home">
                <Ai.AiOutlineHome className="text-white hover:text-slate-300 transition ease-in-out" />
              </a>
            </li>
            <li>
              <a href="#about">
                <Ai.AiOutlinePushpin className="text-white hover:text-slate-300 transition ease-in-out" />
              </a>
            </li>
            <li>
              <a href="#work">
                <Ai.AiOutlineExperiment className="text-white hover:text-slate-300 transition ease-in-out" />
              </a>
            </li>
            <li>
              <a href="#contact">
                <Ai.AiOutlineCreditCard className="text-white hover:text-slate-300 transition ease-in-out" />
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <span
            className="text-sm md:text-lg origin-center rotate-180 text-white"
            style={{ writingMode: "vertical-lr" }}
          >
            &copy; / 2022
          </span>
        </div>
      </div>
    </aside>
  );
};
