import React from "react";
import * as Fa from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Section } from "../Section";
import { Scroll } from "./Scroll";
import { Social } from "./Social";

export const Home = () => {
  return (
    <Section id="home" css="h-screen">
      <div className="flex items-center justify-center flex-col h-[100%] relative">
        <h1 className="font-dancingScript text-[28px] md:text-6xl font-bold text-black">
          Mark Anthony Pascual
        </h1>
        <span className="text-slate-600 text-lg md:text-2xl my-5">
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: ["Web Developer", "Front End Developer"],
            }}
          />
        </span>
        <p className="md:max-w-md leading-[1.7] tracking-wide text-slate-500 font-light text-center text-sm md:text-lg">
          Graduated of Bachelor of Science in Information Technology. And I
          design and code beautifully simple things, and I love what I do.{" "}
        </p>
        {/* Social Medias */}
        <Social />

        {/* CTA */}
        <a
          href="#"
          className="text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white tracking-wide rounded-2xl text-sm md:text-lg font-light hover:scale-110 transition"
        >
          DOWNLOAD CV
        </a>

        {/* Scroll Down */}
        <Scroll />
      </div>
    </Section>
  );
};
