/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services, overview, certifications } from "../constans";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {overview}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
        
        <div className="mt-10 flex flex-col gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              className="bg-tertiary/40 backdrop-blur-md border border-white/10 shadow-xl p-5 rounded-2xl flex justify-between items-center sm:flex-row flex-col gap-4"
            >
              <div>
                <h3 className="text-white text-[18px] font-bold">{cert.name}</h3>
                <p className="text-secondary text-[14px]">{cert.organization}</p>
              </div>
              <p className="text-[#f2657d] font-semibold text-[14px] whitespace-nowrap">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
