import React from "react";
import personal from "../assets/projects/personal_site.PNG";
import Workout from "../assets/projects/Workout website.PNG";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Workout,
      title: "Workout To-Do List",
      desc: "MERN Application that the user can make a list of workouts with the ability to update and delete with pagination. Hosted with Vercel",
      size: "scale-200",
      href: "https://workout-app-xi.vercel.app/",
      frameWorks: [
        "React",
        "Javascript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "BuildKite",
      ],
    },
    {
      id: 2,
      src: personal,
      title: "Personal Website",
      desc: "My portfolio website using tailwind and can be viewed on mobile. Hosted with Netilify",
      frameWorks: ["React", "Javascript", "Tailwind"],
      size: "scale-200",
      href: "https://tim-li-portfolio.netlify.app/",
    },
    {
      id: 3,

      title: "coming soon",
      desc: "coming soon",
      size: "scale-200",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-center font-bold sm:pb-8 text-4xl sm:text-6xl pt-10">
            Projects
          </p>
          <p className="text-center py-3">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-10 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, desc, frameWorks, href }) => (
            <div
              key={id}
              className="justify-self-center sm:w-5/6 container border border-gray-500 overflow-hidden object-center items-center shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
            >
              <div className="left-div pt-4 pb-7 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[20rem]">
                <h3 className="pb-7 font-bold">{title}</h3>
                <p className="sm:text-xs md:text-base py-1 pb-5">{desc}</p>
                <a
                  href={href}
                  className="sm:text-xs md:text-base py-1 pb-5 text-gray-500 hover:text-white duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {href}
                </a>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {frameWorks &&
                    frameWorks.map((framework, index) => (
                      <li
                        key={index}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      >
                        {framework}
                      </li>
                    ))}
                </ul>
              </div>

              {src && (
                <div className="w-1/2 gap-2 right-div justify-center justify-self-center hidden md:flex ">
                  <img
                    src={src}
                    alt={title}
                    className="rounded-md hover:scale-105 duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
