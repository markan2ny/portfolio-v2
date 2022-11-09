import React from "react";

export const Section = ({ children, id, css }) => {
  return (
    <section id={id} className={`flex flex-col py-10 px-16 ${css}`}>
      {children}
    </section>
  );
};
