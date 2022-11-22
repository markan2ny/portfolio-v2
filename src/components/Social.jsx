import React from "react";
import * as Fa from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex flex-row text-2xl text-slate-500 gap-3 my-10">
      <a
        href="https://www.facebook.com/mhackypascual11/"
        target="__blank"
        className="hover:text-cyan-500 hover:scale-110"
      >
        <Fa.FaFacebookSquare />
      </a>
      <a
        href="https://github.com/markan2ny"
        target="__blank"
        className="hover:text-cyan-500 hover:scale-110"
      >
        <Fa.FaGithub />
      </a>
      <a href="#" className="hover:text-cyan-500 hover:scale-110">
        <Fa.FaInstagramSquare />
      </a>
      <a href="#" className="hover:text-cyan-500 hover:scale-110">
        <Fa.FaLinkedin />
      </a>
    </div>
  );
};
