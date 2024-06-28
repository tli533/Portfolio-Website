import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">Framworks and tools I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
              <img src={html} alt="" className="w-20 mx-auto" />
              <p>HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
