import React from "react";
import { Section } from "../components/Section";

export const Footer = () => {
  return (
    <Section>
      <div className="text-center text-slate-400 text-md">
        <p>
          Visit my{" "}
          <a
            href="https://pensive-kepler-9723c7.netlify.app/"
            className="hover:text-red-500"
            target="__blank"
          >
            old website
          </a>
        </p>
        <p>
          Made with 💖 by{" "}
          <a href="#home" className="hover:text-red-500">
            Mark
          </a>
        </p>
      </div>
    </Section>
  );
};
