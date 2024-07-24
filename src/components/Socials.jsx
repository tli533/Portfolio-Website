import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/tim-li-209362209/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/tli533",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMailOpen size={30} />
        </>
      ),
      href: "mailto:tim.li200109@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Draft CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-slate-500" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
