import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-4 text-white"
    >
      <div className="text-center flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-center text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Please contact me directly
            <a className="underline mx-1" href="mailto:tim.li170901@gmail.com">
              tim.li170901@gmail.com
            </a>
            or through this form.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/paqggdza"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 
            px-6 py-3 my-8 mx-auto lex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
