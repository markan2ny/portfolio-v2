import React from "react";
import { Form } from "../components/Form";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <Section id="contact" screen={`h-screen`}>
      <SectionTitle title={`Get in touch`} />
      <h3 className="text-center text-lg xl:text-2xl font-normal text-slate-400 py-6 md:w-3/12 mx-auto">
        Got a question or proposal, or just want to say hello? Go ahead.
      </h3>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="mailto:markan2nypascual@gmail.com"
        className="px-4 py-3 rounded-3xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white mx-auto"
      >
        Say Hello 👋
      </motion.a>
    </Section>
  );
};
