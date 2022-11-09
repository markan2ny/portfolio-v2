import React from "react";
import * as Fa from "react-icons/fa";

export const Card = ({ category, image, title, url }) => {
  return (
    <div className="group/item relative overflow-hidden rounded-xl shadow-xl">
      <div>
        <img src={image} alt="" />
        <div className="bg-gradient-to-tl from-cyan-500 to-teal-500 absolute left-0 top-0 h-full w-full opacity-0 group-hover/item:opacity-[0.9] transition ease-in"></div>
      </div>

      <span
        className="text-white text-sm group-hover:text-black absolute top-0 left-[1rem] rounded-bl-lg rounded-br-lg bg-red-400 py-1 px-1 md:px-3 inline-block translate-y-[-42px] group-hover/item:translate-y-0
      transition-all ease-in"
      >
        {category}
      </span>

      <h3 className="invisible text-white text-sm md:text-xl absolute md:top-[3.75rem] top-[2rem] text-center translate-y-[30px]  px-[1.25rem] group-hover/item:visible group-hover/item:translate-y-[0] transition-all ease-in-out">
        {title}
      </h3>

      <a
        href={url}
        target="__blank"
        className="absolute text-white bottom-[1rem] md:left-[1.5rem] md:translate-x-0 left-[50%] translate-x-[-50%]  text-md bg-cyan-500 h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full flex items-center justify-center invisible group-hover/item:visible transition ease-in"
      >
        <Fa.FaLink />
      </a>
    </div>
  );
};
