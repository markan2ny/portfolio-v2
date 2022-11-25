import React from "react";
import { Form } from "../components/Form";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";

export const Contact = () => {
  return (
    <Section id="contact" screen={`xl:h-screen h-[70vh]`}>
      <div className="text-center">
        <SectionTitle title={`Get in touch`} />
        <h3 className="text-center text-lg md:text-xl font-normal text-slate-400 py-6 md:w-3/12 mx-auto">
          Got a question or proposal, or just want to say hello? Go ahead.
        </h3>
        <a
          href="mailto:markan2nypascual@gmail.com"
          className="px-4 py-3 rounded-3xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white mx-auto xl:hover:scale-110 transition"
        >
          Say Hello 👋
        </a>
      </div>
    </Section>
  );
};
