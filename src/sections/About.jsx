import React from "react";
import { Section } from "../components/Section";
import { Skill } from "../components/Skill";
import * as Fa from "react-icons/fa";
import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
  return (
    <Section id={`about`} screen={`xl:h-screen`}>
      <SectionTitle title={`About Me`} />
      <div className="xl:grid grid-cols-2 gap-20 mt-5 xl:mt-10">
        <div className="text-lg xl:text-xl text-slate-700 xl:m-auto xl:pl-11">
          <p className="leading-[1.7]">
            I'm a Frontend Web Developer and {" "}
            <span className="bg-gradient-to-tr bg-clip-text text-transparent from-cyan-500 to-pink-500 ">
              focusing on Fullstack Development.
            </span>
          </p>
          <br />

          <p className="leading-[1.7]">
            I'm open to{" "}
            <span className="bg-gradient-to-tr bg-clip-text text-transparent from-cyan-500 to-pink-500">
              Job
            </span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
        </div>

        <div className="mt-10 xl:mt-0 xl:pr-11">
          <h2 className="text-lg xl:text-xl text-slate-400 text-left font-bold mb-5">
            Here's my tech skill's:
          </h2>
          <div className="flex flex-wrap gap-3 ">
            <Skill icon={<Fa.FaReact className="text-2xl" />} text=" Reactjs" />
            <Skill icon={<Fa.FaNodeJs className="text-2xl" />} text="Nodejs" />
            <Skill icon={<Fa.FaVuejs className="text-2xl" />} text="Vuejs" />
            <Skill icon={<Fa.FaPhp className="text-2xl" />} text="PHP" />
            <Skill
              icon={<Fa.FaLaravel className="text-2xl" />}
              text="Laravel"
            />
            <Skill
              icon={<Fa.FaWordpress className="text-2xl" />}
              text="Wordpress"
            />
            <Skill icon={<Fa.FaHtml5 className="text-2xl" />} text="HTML" />
            <Skill icon={<Fa.FaCss3 className="text-2xl" />} text="CSS" />
            <Skill icon={<Fa.FaJs className="text-2xl" />} text="JavaScript" />
            <Skill
              icon={<Fa.FaBootstrap className="text-2xl" />}
              text="Bootstrap"
            />
            <Skill icon={<Fa.FaSass className="text-2xl" />} text="Sass" />
            <Skill icon={<Fa.FaGitAlt className="text-2xl" />} text="Git" />
            <Skill
              icon={<Fa.FaGithubAlt className="text-2xl" />}
              text="Github"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
