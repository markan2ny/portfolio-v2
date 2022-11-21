import React from "react";
import { Section } from "../Section";
import image from "../../asset/sample.png";
import { Card } from "../Card/Card";
export const Work = () => {
  return (
    <Section id={`work`} css="h-screen md:justify-center">
      <h2 className="text-3xl md:text-5xl text-center md:text-left uppercase tracking-wider font-semibold text-teal-500 mb-10">
        Portfolio
      </h2>
      <p className="text-slate-400 text-lg font-light mb-10 md:max-w-[70%] text-center md:text-left leading-[1.7]">
        Here you will find some of the personal and clients projects that I
        created on my previous and present work.
      </p>

      <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
        <Card
          image={image}
          title={`Aven Fashion Manufacturing Inc.`}
          category={`Website`}
        />
        <Card
          image={image}
          title={`Image2`}
          category={`Art`}
          url={`https://avenfashion.com/`}
        />
        <Card image={image} title={`Image3`} category={`Art`} />
      </div>
    </Section>
  );
};
