import React, { useState } from "react";

export const Switch = () => {
  const [toggleDark, setToggleDark] = useState(undefined);

  console.log(toggleDark);

  return (
    <div
      onClick={() => setToggleDark((toggle) => !toggle)}
      className="fixed top-2 right-3 w-[35px] h-[35px] bg-gradient-to-r from-cyan-400 to-pink-400 text-xl p-1 rounded-full grid place-content-center shadow-md cursor-pointer "
    >
      {toggleDark && toggleDark ? "🌞" : "🌛1"}
    </div>
  );
};
