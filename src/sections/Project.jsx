import React from "react";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import project1 from "../asset/project1.jpg";
import * as Fa from "react-icons/fa";

export const Project = () => {
  return (
    <Section id={`project`} screen={`xl:h-screen`}>
      <div>
        <SectionTitle title={`Projects`} />
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-x-4">
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-6">
              <div>
                <img
                  src={project1}
                  alt=""
                  className="hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl md:text-2xl tracking-wide font-squada text-slate-500">
                Avenfashion Manufacturing Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3">
                  <span className="text-orange-400">REACT</span>
                  <span className="text-blue-400">TAILWIND</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="#">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a href="#">
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                recusandae a doloremque atque, aperiam doloribus.
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-6">
              <div>
                <img
                  src={project1}
                  alt=""
                  className="hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl md:text-2xl tracking-wide font-squada text-slate-500">
                Avenfashion Manufacturing Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3">
                  <span className="text-orange-400">REACT</span>
                  <span className="text-blue-400">TAILWIND</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="#">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a href="#">
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                recusandae a doloremque atque, aperiam doloribus.
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-6">
              <div>
                <img
                  src={project1}
                  alt=""
                  className="hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl md:text-2xl tracking-wide font-squada text-slate-500">
                Avenfashion Manufacturing Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3">
                  <span className="text-orange-400">REACT</span>
                  <span className="text-blue-400">TAILWIND</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="#">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a href="#">
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                recusandae a doloremque atque, aperiam doloribus.
              </p>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/markan2ny"
            target="__blank"
            className="inline-flex items-center gap-x-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-white rounded-3xl"
          >
            <Fa.FaEye /> View All
          </a>
        </div>
      </div>
    </Section>
  );
};
