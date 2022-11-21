import React from "react";
import { Form } from "../components/Form";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";

export const Contact = () => {
  return (
    <Section id="contact" screen={`h-[50vh]`}>
      <div className="py-5 text-center">
        <SectionTitle title={`Get in touch`} />
        <h3 className="text-center text-lg md:text-xl font-normal text-slate-400 py-6 md:w-3/12 mx-auto">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h3>
        <a
          href="mailto:markan2nypascual@gmail.com"
          className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white mx-auto"
        >
          Say Hello 👋
        </a>
      </div>
    </Section>
  );
};
