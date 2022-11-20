import React from "react";
import { Form } from "../Form";
import { Section } from "../Section";

export const Contact = () => {
  return (
    <Section id="contact" css="md:h-screen md:justify-center">
      <div>
        <h2 className="text-2xl md:text-5xl text-center md:text-left uppercase tracking-wider font-semibold text-teal-500 mb-10 ">
          GET IN TOUCH
        </h2>
        <div className="md:grid col-span-2">
          <h3 className="text-center text-xl font-bold text-slate-600 my-10">
            Let's talk everything
          </h3>
          <Form />
        </div>
      </div>
    </Section>
  );
};
