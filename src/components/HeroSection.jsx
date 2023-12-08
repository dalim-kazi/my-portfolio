"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import image from '../../public/images/me.png'
import Link from 'next/link';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const HeroSection = () => {
    return (
        <section className="lg:py-5">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center md:text-left justify-self-start  md:pr-12"
          >
            <h1 className="text-white mb-4 text-3xl md:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "MD Masuk kabir dalim",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base md:text-lg mb-6 lg:text-xl">
              Hello there! I&apos;m Masuk Kabir Dalim, a passionate and innovative web developer dedicated to bringing your digital dreams to life. With a keen eye for design and a knack for coding wizardry, I transform concepts into visually stunning and functionally robust websites.  
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-10 md:mt-0 pr-3"
          >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <div className=" w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] relative   delay-200 duration-150 cursor-pointer">
              <Image
                src={image}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
              />
            </div>
                </div>}
            </TrackVisibility>
          </motion.div>
        </div>
      </section>
    );
};

export default HeroSection;