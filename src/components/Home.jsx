import React from "react";
import avatar from "../assets/avatar.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className='="h-full w-full pt-40 bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pr-40">
            Hello I'm Tim
          </h2>
          <h1 className="text-gray-400 py-4 max-w-md mt-20 text-2xl font-medium sm:text-xl">
            <span className="font-bold text-white">
              I am a full-stack developer{" "}
            </span>{" "}
            from New Zealand, currently located in Melbourne, Australia.
          </h1>

          <div className="pb-3 sm:pb-0">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold"
            >
              Projects
              <span className="group-hover:rotate-90 duration-500">
                <MdKeyboardArrowRight size={30} className="m1-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={avatar}
            alt="profile dp"
            className="pl-4 rounded-full w-96 h-96 mx-auto md:w-full opacity-95"
          />
        </div>
      </div>
      <div className=" pt-20 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-l sm:text-xl font-medium text-white">
        <a
          className="gap-2 sm:gap-3 flex items-center font-bold px-3 py-1 sm:py-2 sm:px-4 uppercase tracking-wider rounded-full border"
          href="contact"
        >
          Contact me here
          <span>
            <IoMdMail size={30} />
          </span>
        </a>
        <a
          className="gap-2 sm:gap-3 flex items-center font-bold px-3 py-1 sm:py-2 sm:px-4 uppercase tracking-wider rounded-full border"
          href="/Draft CV.pdf"
          target="_blank"
        >
          Download CV
          <span>
            <BsFillPersonLinesFill size={30} />
          </span>
        </a>
        <a
          className=" flex items-center font-bold px-3 py-3 uppercase tracking-wider"
          href="https://www.linkedin.com/in/tim-li-209362209/"
          target="_blank"
        >
          <span>
            <FaLinkedin size={40} />
          </span>
        </a>
        <a
          className="flex items-center font-bold px-3 py-3 uppercase tracking-wider"
          href="https://github.com/tli533"
          target="_blank"
        >
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default Home;
