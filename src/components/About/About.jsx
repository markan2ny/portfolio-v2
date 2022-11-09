import React from "react";
import { Cta } from "../Button/cta";
import { Section } from "../Section";
import { Skill } from "../Skill";

export const About = () => {
  return (
    <Section id={`about`} css="md:h-screen md:justify-center">
      <h2 className="text-2xl md:text-5xl uppercase tracking-wider font-semibold text-teal-500 md:mb-10 mb-5 text-center md:text-left">
        About Me
      </h2>
      <p className="text-slate-600 text-center md:text-left text-sm md:text-xl font-light mb-5 md:max-w-[70%] leading-[1.7]">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className="md:grid grid-cols-2 gap-20 mt-5 md:mt-10">
        <div>
          <h2 className="text-md md:text-xl font-bold mb-10 text-center md:text-center">
            GET TO KNOW ME
          </h2>
          <p className="text-slate-600 text-justify leading-[1.7] tracking-wider font-light text-sm md:text-lg">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <br />

          <p className="text-slate-600 text-justify text-sm leading-[1.7] tracking-wider font-light md:text-lg">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl font-bold mb-10 text-center md:text-center">
            SKILLS
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
