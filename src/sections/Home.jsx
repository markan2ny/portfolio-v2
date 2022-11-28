import React from "react";
import * as Fa from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Social } from "../components/Social";
import { Scroll } from "../components/Scroll";
import { Section } from "../components/Section";
import resume from "../asset/Mark Anthony Pascual.pdf";
export const Home = () => {
  return (
    <Section id="home" screen={`h-screen`}>
      <div className="flex items-center justify-center flex-col h-[100%] relative">
        <h1 className="leading-[1.2] px-3 md:leading-[1.5] font-dancing text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
          Mark Anthony Pascual
        </h1>
        <span className="font-squada text-slate-400 opacity-[.7] text-xl xl:text-3xl my-5">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ["Web Developer", "Fullstack Developer"],
            }}
          />
        </span>
        <p className="md:max-w-md leading-[1.7] tracking-wide text-slate-500 text-center text-lg md:text-xl">
          Graduated of Bachelor of Science in Information Technology. I
          design and code beautifully simple things.
        </p>
        <Social />

        <a
          href={resume && resume}
          download
          className="text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-2xl text-md md:text-lg font-light hover:scale-110 transition flex items-center gap-x-2"
        >
          <Fa.FaFileDownload />
          Download CV
        </a>

        <Scroll />
      </div>
    </Section>
  );
};
