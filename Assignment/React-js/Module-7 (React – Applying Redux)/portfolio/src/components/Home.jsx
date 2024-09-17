import React from 'react';
import { Link } from "react-scroll";
import me from '../assets/me.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full font-serif"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-xl">
            I have 4 years of experience in graphics design and web development.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next.js and Mongodb.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <i className="bi bi-arrow-right" style={{ fontSize: '25px', marginLeft: '12px' }}></i>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="mx-auto md:w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
