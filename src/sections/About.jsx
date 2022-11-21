import React from "react";
import { Section } from "../components/Section";
import { Skill } from "../components/Skill";

export const About = () => {
  return (
    <Section id={`about`}>
      <h2 className="text-3xl md:text-5xl uppercase tracking-wider font-semibold text-teal-500 md:mb-10 mb-5 text-center md:text-left">
        About Me
      </h2>
      <div className="md:grid grid-cols-2 gap-20 mt-5 md:mt-10">
        <div>
          <p className="text-slate-700 text-justify leading-[1.7] tracking-wider font-normal text-[18px]">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <br />

          <p className="text-slate-700 text-justify text-[18px] leading-[1.7] tracking-wider font-normal ">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl font-bold mb-10 text-center md:text-center">
            Here's my tech skill's
          </h2>
          <div className="flex flex-wrap gap-3 ">
            <Skill text={`Reactjs`} />
            <Skill text={`Nodejs`} />
            <Skill text={`Express`} />
            <Skill text={`Mongodb`} />
            <Skill text={`PHP`} />
            <Skill text={`Laravel`} />
            <Skill text={`Html`} />
            <Skill text={`Css`} />
            <Skill text={`JavaScript`} />
            <Skill text={`Git`} />
            <Skill text={`Github`} />
            <Skill text={`Wordpress`} />
            <Skill text={`MySql`} />
          </div>
        </div>
      </div>
    </Section>
  );
};
