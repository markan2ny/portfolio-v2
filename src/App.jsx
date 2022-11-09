import React, { useEffect, useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Toggle } from "./components/Toggle";
import { Work } from "./components/Work/Work";

export const App = () => {
  const [isMobile, setIsMobile] = useState(undefined);
  const [toggle, setToggle] = useState(undefined);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 767) {
        console.log("Desktop sized");
      } else {
        console.log("Mobile sized");
      }

      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <>
      <Sidebar showSidebar={toggle} />
      <main className="w-full md:w-[calc(_100%_-_110px)] ml-auto relative">
        <Toggle showSidebar={setToggle} />
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
};
