import React from 'react'
import {Link} from 'react-scroll'

import Typed from 'react-typed';

import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#27083b]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aline Rivieri
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Typed strings={["I'm a Frontend Developer"]} typeSpeed={60}/>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a frontend developer specializing in building exceptional digital
          experiencer. Currently, I'm focused on building responsive web
          applications
        </p>
        <div>
          <button className="text-white group border-2 px-2 py-2 my-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home