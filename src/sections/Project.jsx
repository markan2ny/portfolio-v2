import React from "react";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";

export const Project = () => {
  return (
    <Section id={`project`} screen={`h-screen`}>
      <div>
        <SectionTitle title={`Projects`} />
      </div>
    </Section>
  );
};
