import React from "react";

export const Section = ({ children, id, screen }) => {
  return (
    <section
      id={id}
      className={`flex flex-col py-10 px-10 justify-center ${screen}`}
    >
      {children}
    </section>
  );
};
