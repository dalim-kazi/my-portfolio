"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { ImGithub } from "react-icons/im";
import { FaFacebookMessenger, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const EmailSection = () => {
  const form = useRef();    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e3efgw5', 'template_od2hmf4', form.current, '7_SsEagLiVmQgT__q')
      .then((result) => {
        if (result.text === "OK") {
            toast.success('successful your information!')
          }
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
    return (
        <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:mx-8 lg:mx-20 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10 mb-10 md:mb-0 md:pr-10 lg:pr-1">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m  currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-5 mt-5">
            <Link href="github.com">
             <ImGithub className='text-white text-xl'/>
            </Link>
            <Link href="linkedin.com">
             <FaLinkedinIn className='text-white text-xl'/>
             </Link>
                <Link href="linkedin.com">
                <FaFacebook
                className='text-white text-xl'/>
                    </Link>
                    <Link href="linkedin.com">
                    <FaFacebookMessenger
                    className='text-white text-xl'/>
                  </Link>
          </div>
        </div>
        <div>
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                 Your Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  id="name"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="enter your email"
                />
                </div>
                <div className="mb-6">
                <label
                 htmlFor="email"
                  className="text-white block text-sm mb-2 font-medium"
                >
                 Subject
                 </label>
                 <input
                  name="subject"
                 type="text"
                  id="subject"
                 required
                 className="bg-[#18191E] border border-[#33353F] placeholder-
               [#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="enter your subjects"
                 />
                </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="please enter your message"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 w-full mx-auto rounded-full 
                bg-transparent hover:bg-slate-800 text-white border
                border-white mt-2"
              >
                Send Message
              </button>
            </form>
        </div>
      </section>
    );
};

export default EmailSection;