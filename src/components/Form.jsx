import React from "react";

export const Form = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Fullname"
        className="w-full border outline-none mb-2 p-3 rounded-xl shadow-sm"
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full border outline-none mb-2 p-3 rounded-xl shadow-sm"
      />
      <input
        type="text"
        placeholder="Subject"
        className="w-full border outline-none mb-2 p-3 rounded-xl shadow-sm"
      />
      <textarea
        cols="30"
        rows="10"
        className="w-full border outline-none mb-2 p-3 rounded-xl shadow-sm"
        placeholder="Say something..."
      ></textarea>

      <button className="hover:scale-[1.1] transition shadow-xl py-2 px-8 text-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white w-full uppercase tracking-wider rounded-full">
        Submit
      </button>
    </form>
  );
};
