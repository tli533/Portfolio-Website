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
    <div>
      <div>
        <div>
          <div>
            <p>Skills</p>
            <p>Framworks and tools I've worked with</p>
          </div>

          <div>
            <div>
              <img src={html} alt="" />
              <p>HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
