import React from "react";
import * as Ai from "react-icons/ai";

export const Desktop = () => {
  return (
    <aside className="w-[110px] h-screen fixed left-0 top-0 border-r-2">
      <div className="flex flex-col py-20 items-center w-full justify-between h-full">
        <a
          href="#home"
          className="font-extrabold uppercase text-2xl bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text"
        >
          Mark
        </a>
        <nav className="flex w-full flex-col items-center">
          <ul className="flex flex-col items-center text-2xl gap-y-10 text-slate-500">
            <li className="hover:text-cyan-500">
              <a href="#home">
                <Ai.AiOutlineHome />
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-500">
                <Ai.AiOutlinePushpin />
              </a>
            </li>
            <li className="hover:text-cyan-500">
              <a href="#work">
                <Ai.AiOutlineExperiment />
              </a>
            </li>
            <li className="hover:text-cyan-500">
              <a href="#contact">
                <Ai.AiOutlineCreditCard />
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-slate-500">&copy; / 2022</div>
      </div>
    </aside>
  );
};
