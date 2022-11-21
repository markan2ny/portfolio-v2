import React from "react";
import { Form } from "../Form";
import { Section } from "../Section";

export const Contact = () => {
  return (
    <Section id="contact" css="h-screen justify-center text-center">
      <div>
        <h2 className="text-3xl md:text-5xl text-center md:text-center uppercase tracking-wider font-extrabold text-teal-500">
          GET IN TOUCH
        </h2>
        <div className="md:grid col-span-2">
          <h3 className="text-center text-lg md:text-xl font-normal text-slate-400 my-10 md:w-3/12 mx-auto">
            Got a question or proposal, or just want to say hello? Go ahead.
          </h3>
          <a href="mailto:markan2nypascual@gmail.com">
            <button className="text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-600 text-white tracking-wide rounded-2xl text-md md:text-lg font-light hover:scale-110 transition">
              Say Hello 👋
            </button>
          </a>
        </div>
      </div>
    </Section>
  );
};
