import React from "react";
import * as Fa from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Social } from "../components/Social";
import { Scroll } from "../components/Scroll";
import { Section } from "../components/Section";
import resume from "../asset/Mark Anthony Pascual.pdf";

import { motion } from "framer-motion";

export const Home = () => {
  return (
    <Section id="home" screen={`h-screen`}>
      <div className="flex items-center justify-center flex-col h-[100%] relative">
        <h1 className="leading-[1.2] px-3 xl:leading-[1.7] font-dancing text-3xl xl:text-7xl font-extrabold bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
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
          Graduated of BS in Information Technology. I code and design
          beautifully.
        </p>
        <Social />

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={resume && resume}
          download
          className="text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-2xl text-md font-light flex items-center gap-x-2"
        >
          <Fa.FaFileDownload />
          Download CV
        </motion.a>

        <Scroll />
      </div>
    </Section>
  );
};
