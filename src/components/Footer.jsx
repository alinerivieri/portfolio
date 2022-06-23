import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div
      name="social"
      className="w-full bg-[#27083b] flex flex-col justify-center items-center p-4"
    >
        <div className="w-full flex-wrap max-w-[1000px] flex justify-between items-center border-t-2 border-pink-400">

      <div className="mt-2 w-full sm:max-w-[280px] p-7 sm:text-left text-center">
        <p className="text-gray-300">
          Aline Rivieri
        </p>
        <p className="text-gray-300">
          Hortolândia/SP - Brazil
        </p>
        <p className="text-gray-300">
          alinerrivieri@gmail.com
        </p>
      </div>
      <div className="flex justify-between w-full p-7 sm:max-w-[280px] mb-6 text-gray-300">
          <a href="https://www.instagram.com/thelinecode/" target="blank"><FaInstagram className="text-3xl hover:text-pink-500" /></a> 
          <a href="https://www.linkedin.com/in/alinelrivieri/" target="blank"><FaLinkedin className="text-3xl hover:text-pink-500" /></a> 
          <a href="https://github.com/alinerivieri" target="blank"><FaGithub className="text-3xl hover:text-pink-500" /></a> 
          <a href="mailto:alinerrivieri@gmail.com" target="blank"><HiOutlineMail className="text-3xl hover:text-pink-500" /></a> 
      </div>
        </div>
    </div>
  );
};

export default Footer;
