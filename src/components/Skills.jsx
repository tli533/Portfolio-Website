import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import c from "../assets/c.png";
import pythonlogo from "../assets/pythonlogo.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: node,
      title: "Node.js",
      style: "shadow-lime-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "tailwind",
      style: "shadow-cyan-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-slate-400",
    },
    {
      id: 8,
      src: c,
      title: "C",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: pythonlogo,
      title: "Python",
      style: "shadow-amber-400",
    },
  ];

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

          <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-xs sm:text-xl">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
