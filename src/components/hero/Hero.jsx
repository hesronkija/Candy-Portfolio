import React from "react";
import CandyPic from "../../assets/Candy.jpeg";
import { INTO_SUMMARY } from "../../constant";
import { animate, motion } from "framer-motion";

const Motion = (duration, delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: duration,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <section className="mb-16 flex flex-wrap">
      <div className="flex-col lg:w-1/2">
        <motion.h1
          className="pb-10 text-6xl font-thin tracking-wide lg:pb-16"
          variants={Motion(0.7, 0.1)}
          initial="hidden"
          whileInView="animate"
        >
          Candy Zillale
        </motion.h1>
        <motion.h1
          className="mb-8 bg-gradient-to-r from-pink-800 to-slate-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent"
          variants={Motion(0.7, 0.3)}
          initial="hidden"
          whileInView="animate"
        >
          JOURNALIST
        </motion.h1>
        <motion.p
          className="mb-8 text-sm font-thin tracking-wide lg:pr-8 lg:text-lg "
          variants={Motion(0.7, 0.7)}
          initial="hidden"
          whileInView="animate"
        >
          {INTO_SUMMARY}
        </motion.p>
      </div>
      <motion.div
        className="flex justify-center lg:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.3 },
        }}
      >
        <img
          src={CandyPic}
          alt="Profile Picture"
          className="rounded-xl shadow-lg shadow-zinc-300/40"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
