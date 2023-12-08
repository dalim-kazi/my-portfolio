import React from "react";
import { ImGithub } from "react-icons/im";
import { FaFacebookMessenger, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 border border-t-[#33353F] text-white">
    <nav>
      <h1 className="text-2xl md:text-4xl  font-bold"> MY PORTFOLIO</h1>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <header className="footer-title">Social</header> 
      <div className="grid grid-flow-col gap-4">
          <FaFacebook className="w-5 h-5" />
          <FaFacebookMessenger className="w-5 h-5" />
          <FaYoutube className="w-5 h-5"/>
          <FaLinkedinIn className="w-5 h-5"/>
          <ImGithub className="w-5 h-5"/>
      </div>
    </nav>
  </footer>
  );
};
export default Footer