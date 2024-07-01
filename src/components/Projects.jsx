import React from "react";
import FF2 from "../assets/projects/FF2.png";
import FF1 from "../assets/projects/FF1 (1).png";
import FF3FEBRUARY from "../assets/projects/FF3FEBRUARY.png";
import XI from "../assets/projects/XI.png";
import XII from "../assets/projects/XII.png";
import triangle from "../assets/projects/triangle.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: triangle,
      title: "Workout To-Do List",
      desc: "CRUD Application that the user can make a list of works with the ability to update and delete with pagination.  ",
    },
    {
      id: 2,
      src: FF2,
    },
    {
      id: 3,
      src: FF3FEBRUARY,
    },
    {
      id: 4,
      src: XI,
    },
    {
      id: 5,
      src: XII,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">checkout some work g</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-flow-cols-3 gap-10
        px-12 sm:px-0 "
        >
          {portfolios.map(({ id, src, title, desc }) => (
            <div
              key={id}
              className="container border border-gray-500 overflow-hidden object-center items-center shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
            >
              <div className="left-div items-center pt-4 pb-7 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[20rem]">
                <h3 className=" pb-7 font-bold">{title}</h3>
                <p className="sm:text-xs md:text-base">{desc}</p>
              </div>

              <div className="right-div flex justify-end justify-self-center">
                <img
                  src={src}
                  alt=""
                  width={230}
                  className="rounded-md hover:scale-105 duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
