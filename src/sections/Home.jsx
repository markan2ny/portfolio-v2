import React from "react";
import * as Fa from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Social } from "../components/Social";
import { Scroll } from "../components/Scroll";
import { Section } from "../components/Section";
export const Home = () => {
  return (
    <Section id="home" screen={`h-screen`}>
      <div className="flex items-center justify-center flex-col h-[100%] relative">
        <h1 className="leading-[1.2] px-3 md:leading-[1.5] font-dancingScript text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
          Mark Anthony Pascual
        </h1>
        <span className="text-slate-600 text-xl md:text-2xl my-5">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ["Web Developer", "Front End Developer"],
            }}
          />
        </span>
        <p className="md:max-w-md leading-[1.7] tracking-wide text-slate-500 text-center text-lg md:text-xl">
          Graduated of Bachelor of Science in Information Technology. And I
          design and code beautifully simple things, and I love what I do.
        </p>
        <Social />

        <a
          href="#"
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
