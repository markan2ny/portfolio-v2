import React from "react";
import { Section } from "../components/Section";
import { Skill } from "../components/Skill";
import * as Fa from "react-icons/fa";
import { SectionTitle } from "../components/SectionTitle";

export const About = () => {
  return (
    <Section id={`about`} screen={`xl:h-screen`}>
      <SectionTitle title={`About Me`} />
      <div className="md:grid grid-cols-2 gap-20 mt-5 md:mt-10">
        <div>
          <p className="text-slate-700 text-justify tracking-wider font-medium text-[18px]">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
          </p>
          <br />

          <p className="text-slate-700 text-justify text-[18px] tracking-wider font-normal ">
            span where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl text-slate-400 text-left font-bold mb-5">
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
