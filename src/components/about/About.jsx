import React from "react";
import { ABOUT, KEY_COMPETENCES } from "../../constant";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const About = () => {
  return (
    <section className="mb-16 flex-col flex-wrap text-center">
      <div className="mb-8 flex justify-center gap-2 text-4xl">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.5 },
          }}
        >
          About
        </motion.div>
        <motion.div
          className="text-neutral-500"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.5 },
          }}
        >
          Me
        </motion.div>
      </div>
      <div className="mb-8 text-sm font-thin tracking-wide md:text-lg">
        {" "}
        <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: .5, delay: 1 },
        }}>{ABOUT}</motion.p>{" "}
      </div>
      <div className="flex flex-wrap justify-center">
        <motion.h2
          className="mb-4 text-lg font-bold w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, delay: 1 },
          }}
        >
          Key Competences
        </motion.h2>
        <motion.ul
          className="flex flex-wrap gap-2 text-sm h-fit"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {KEY_COMPETENCES.map((competence, index) => (
            <motion.li
              className="rounded bg-neutral-400 px-2 text-orange-900 shadow-md shadow-orange-300/20 hover:cursor-default"
              key={index}
              variants={item}
              whileHover={{
                scale: 1.5,
                y: -5,
                backgroundColor: "rgb(124 45 18)",
                color: "rgb(163 163 163)",
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              {competence}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
