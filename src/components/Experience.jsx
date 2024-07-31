import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="sm:pb-40 bg-gradient-to-b from-black to-gray-900 w-full h-full
       text-white flex flex-col justify-center items-center"
    >
      <div className="pb-8">
        <p className="text-center text-4xl font-bold pb-4">Education</p>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-300">
            2020
          </time>
          <h3 className="text-lg font-semibold text-white">Education</h3>
          <p className="mb-4 text-base font-normal text-white pt-2">
            University of Auckland
          </p>
          <p className="mb-4 text-base font-normal text-gray-400">
            <b>Bachelor of Engineering (Honours)</b> in Computer Systems
            Engineering
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
