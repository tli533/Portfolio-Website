import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="text-center max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="sm:pb-8">
          <p className="sm:text-6xl text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="sm:text-2xl mt-20 text-l text-gray-300">
          My journey into programming began during my undergraduate studies in
          Computer Systems Engineering, where I was first introduced to C. This
          foundational experience led me to explore other languages such as
          JavaScript and Python.
        </p>

        <br />

        <p className="sm:text-2xl text-l text-gray-300">
          I really enjoyed learning Javascript and since then I delved into tech
          stacks to hone my full-stack web development skills. The current tools
          I use is React, Javascript, and Node.js. I am constantly improving my
          skills and finding unique ways to solve problems. I am actively
          seeking a full-time role as a software developer, where I can apply my
          skills and grow professionally.
        </p>

        <br />
        <p className="sm:text-2xl text-l text-gray-300">
          Outside of coding, I enjoy playing games, creating art, and
          bouldering. I am always eager to connect with those with similar
          interests. Let's connect and collaborate!
        </p>
      </div>
    </div>
  );
};

export default About;
