import React, { useEffect, useState } from "react";
import { Desktop } from "./components/Sidebar/Desktop";
import { Sidebar } from "./components/Sidebar/Mobile";
import { Switch } from "./components/Switch";
import { Toggle } from "./components/Toggle";
import useWindowDimensions from "./components/useWindowDimensions";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Home } from "./sections/Home";
import { Project } from "./sections/Project";

export const App = () => {
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = useState(undefined);
  useEffect(() => {
    width > 767 && setToggle(undefined);
  }, [width]);
  return (
    <>
      {width > 767 ? <Desktop /> : <Sidebar showSidebar={toggle} />}
      <main className="w-full md:w-[calc(_100%_-_110px)] ml-auto relative">
        <Switch />
        <Toggle showSidebar={setToggle} />
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  );
};
