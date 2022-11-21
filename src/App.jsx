import React, { useEffect, useState } from "react";
import { Desktop } from "./components/Sidebar/Desktop";
import { Sidebar } from "./components/Sidebar/Mobile";
import { Toggle } from "./components/Toggle";
import useWindowDimensions from "./components/useWindowDimensions";
import { About } from "./sections/About";
import { Home } from "./sections/Home";

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
      </main>
    </>
  );
};
