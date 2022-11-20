import React, { useEffect, useState } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Home } from "./components/Home/Home";
import { Desktop } from "./components/Sidebar/Desktop";
import { Sidebar } from "./components/Sidebar/Mobile";
import { Toggle } from "./components/Toggle";
import useWindowDimensions from "./components/useWindowDimensions";
import { Work } from "./components/Work/Work";

export const App = () => {
  const { width } = useWindowDimensions();
  const [toggle, setToggle] = useState(undefined);

  console.log(width);
  return (
    <>
      {width > 767 ? <Desktop /> : <Sidebar showSidebar={toggle} />}
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
