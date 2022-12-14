import React from "react";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import image from "../asset/project1.jpg";
import image1 from "../asset/hris.jpg";
import image2 from "../asset/aven.jpg";
import image3 from "../asset/ecfi.jpg";
import * as Fa from "react-icons/fa";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <Section id={`project`} screen={`xl:h-screen`}>
      <div>
        <SectionTitle title={`Recent Project's`} />
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-x-4">
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-0 ">
              <div>
                <img src={image1} className="hover:scale-105 transition" />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl xl:text-3xl tracking-wide font-squada text-slate-500">
                Human Resources Information System
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="text-sm xl:text-md flex gap-x-2 uppercase">
                  <span className="text-orange-400 font-bold">Laravel</span>
                  <span className="text-green-500 font-bold">VUE</span>
                  <span className="text-red-400 font-bold">api</span>
                  <span className="text-blue-400 font-bold">MYSQL</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  {/* <a href="#">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a> */}
                  {/* <a
                    // href="#"
                    onClick={() => alert("Sorry, private repositories")}
                  >
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a> */}
                </div>
              </div>
              <p className="py-3 text-md text-slate-500 xl:text-xl">
                A human resources information system {"(HRIS)"} is a web
                application that maintains, manages, and processes detailed
                employee information and human resources-related policies and
                procedures.
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-0">
              <div>
                <img src={image2} className="hover:scale-105 transition" />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl xl:text-3xl tracking-wide font-squada text-slate-500">
                Avenfashion Manufacturing Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="text-sm xl:text-md flex gap-x-2 uppercase">
                  <span className="text-orange-400 font-bold">WORDPRESS</span>
                  <span className="text-purple-400 font-bold">WEBSITE</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="https://avenfashion.com" target="__blank">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a
                    href="https://github.com/markan2ny/aven-website"
                    target="__blank"
                  >
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500 xl:text-xl">
                A CMS website. I built this website to help the management for
                their job posting, news, activities and provides a company
                information.
              </p>
            </div>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="rounded-md mb-5 shadow-lg overflow-hidden block md:w-[85%] md:mx-auto bg-gradient-to-br from-cyan-200 to-pink-200">
            {/* Image wrapper */}
            <div className="w-full p-1 xl:p-0">
              <div>
                <img
                  src={image3}
                  alt=""
                  className="hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="px-3 xl:px-6 py-3">
              <h2 className="font-extrabold text-2xl xl:text-3xl tracking-wide font-squada text-slate-500">
                Eliahu Cedars Foundation Inc.
              </h2>
              <div className="flex justify-between items-center my-2">
                <div className="text-sm xl:text-md flex gap-x-2 uppercase">
                  <span className="text-orange-400 font-bold">WORDPRESS</span>
                  <span className="text-purple-400 font-bold">WEBSITE</span>
                </div>
                <div className="flex items-center  gap-x-3 text-lg">
                  <a href="https://ecfi.org.ph" target="__blank">
                    <Fa.FaExternalLinkAlt className="text-slate-500 hover:text-cyan-500" />
                  </a>
                  <a
                    href="https://github.com/markan2ny/wp-eliahu-theme"
                    target="__blank"
                  >
                    <Fa.FaGithub className="text-slate-500 hover:text-cyan-500" />
                  </a>
                </div>
              </div>
              <p className="py-3 text-md text-slate-500 xl:text-xl">
                Eliahu is a foundation website for scholarship student. I
                developed this website, to help the foundation for their posting
                activities.
              </p>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* View All */}
        <div className="text-center mt-10">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/markan2ny"
            target="__blank"
            className="inline-flex font-light items-center gap-x-1 px-6 py-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-white rounded-3xl xl:text-lg"
          >
            <Fa.FaGithub className="text-xl" /> See More
          </motion.a>
        </div>
      </div>
    </Section>
  );
};
