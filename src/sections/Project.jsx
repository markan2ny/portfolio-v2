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
              <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide font-squada text-slate-500">
                Human Resources Information System
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3 uppercase">
                  <span className="text-orange-400 font-bold">LARAVEL</span>
                  <span className="text-blue-400 font-bold">MYSQL</span>
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
                A manageble system for human resources that store employee's
                detail and monitoring employee's status.
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-6">
              <div>
                <img src={project1} className="hover:scale-105 transition" />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide font-squada text-slate-500">
                Avenfashion Manufacturing Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3 uppercase">
                  <span className="text-orange-400 font-bold">WORDPRESS</span>
                  <span className="text-blue-400 font-bold">WEBSITE</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="https://avenfashion.com" target="__blank">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a href="#">
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500">
                A website allow the user to view the history of company and
                products. And also help them to find a vacant job in Careers
                Page.
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
              <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide font-squada text-slate-500">
                Eliahu Cedars Foundation Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="flex gap-x-3 uppercase">
                  <span className="text-orange-400 font-bold">Wordpress</span>
                  <span className="text-blue-400 font-bold">Website</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="https://ecfi.org.ph" target="__blank">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a href="#">
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500">
                Eliahu is a foundation website for scholars student. this
                website is built to help the foundation to collect a donation.
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
            className="inline-flex font-light items-center gap-x-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-white rounded-3xl xl:text-lg hover:scale-105 transition"
          >
            <Fa.FaGithub className="text-xl" /> More Project
          </a>
        </div>
      </div>
    </Section>
  );
};
