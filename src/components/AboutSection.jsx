"use client";
import aboutImage from '../../public/images/about-image.png'
import React, { useRef, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion ,useInView} from "framer-motion";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js , .NET</li>
        <li>Javascript , Typescript</li>
        <li>Next.js , React.js</li>
        <li>Mongodb , SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Hero</li>
        <li>Magura Polytechnic Institute, Magura</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Hero</li>
        <li>Fort International Limited, Dhaka</li>
      </ul>
    ),
  },
];
const cardVariants = {
  initial: { y: 55, opacity: 0 },
  animate: { y: 0, opacity: 2 },
};
const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
    return (
        <section className="text-white mt-20" id="about">
        <div ref={ref} className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-2 xl:gap-10 md:py-16 xl:px-16">
          <motion.div
             variants={cardVariants}
             initial="initial"
             animate={isInView ? "animate" : "initial"}
             transition={{ duration: 0.5, delay: 0.5 }}
          >
          <Image className=' rounded-lg mb-10 md:mb-0' src={aboutImage} 
          alt='aboutImage' width={450} height={450} />
         </motion.div>
          <motion.div
           variants={cardVariants}
           initial="initial"
           animate={isInView ? "animate" : "initial"}
           transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript,Typescript, C#, React, Context, Node.js, Express, SQL,
              Next.js,Mongodb, HTML, CSS, and Git. I am a quick learner and I am always
              looking to expand my knowledge and skill set. I am a team player and
              I am excited to work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </motion.div>
        </div>
      </section>
     );
};

export default AboutSection;