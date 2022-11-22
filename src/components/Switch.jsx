import React, { useState } from "react";

export const Switch = () => {
  const [toggleDark, setToggleDark] = useState(undefined);

  console.log(toggleDark);

  return (
    <div
      onClick={() => setToggleDark((toggle) => !toggle)}
      className="fixed top-2 right-4 w-[30px] h-[30px] bg-slate-200 p-1 rounded-full grid place-content-center shadow-lg cursor-pointer "
    >
      {toggleDark && toggleDark ? "🌞" : "🌙"}
    </div>
  );
};
