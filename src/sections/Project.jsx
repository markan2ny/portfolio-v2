import React from "react";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import project1 from "../asset/project1.jpg";
import * as Fa from "react-icons/fa";

export const Project = () => {
  return (
    <Section id={`project`} screen={`md:h-screen`}>
      <div>
        <SectionTitle title={`Projects`} />
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-x-8">
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden w-75% bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 md:p-8">
              <div>
                <img
                  src={project1}
                  alt=""
                  className="hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="px-3 md:px-8 py-6">
              <h2 className="font-extrabold text-xl tracking-wide font-squada text-slate-500">
                Avenfashion Manufacturing Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3">
                  <span className="text-orange-400">REACT</span>
                  <span className="text-blue-400">TAILWIND</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="#">
                    <Fa.FaLink className="text-slate-500" />
                  </a>
                  <a href="#">
                    <Fa.FaGithub className="text-slate-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                recusandae a doloremque atque, aperiam doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
