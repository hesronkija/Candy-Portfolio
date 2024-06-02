import React from "react";
import { motion } from "framer-motion";
import { socialMedia } from "../nav/Navbar.jsx";

const currentYear = new Date().getFullYear();

const Contact = () => {
  return (
    <motion.div
      className=" p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="mb-8 w-full text-center text-4xl">
        Contact Me
      </motion.h2>
      <div className="flex flex-col text-sm md:text-md items-center justify-between text-emerald-50 md:flex-row">
        <p className="italic">
          Email:{" "}
          <motion.a
            href="mailto:candyzillale@gmail.com"
            className=" text-md font-thin tracking-wide text-orange-400/70 underline md:text-lg"
            whileHover={{ scale: 1.05, color: "rgb(245 245 245 / 0.7)" }}
            transition={{ duration: 0.3 }}
          >
            candyzillale@gmail.com
          </motion.a>
        </p>
        <div className="flex-col">
          <p className="mb-2">Follow me on Social Media</p> {socialMedia()}
        </div>
      </div>
      <div className="mt-8 text-center text-[10px] font-thin md:text-sm">
        <p>© {currentYear} Candy Zillale</p>
        <p>All rights reserved. Created by Hesron Kija</p>
      </div>
    </motion.div>
  );
};

export default Contact;
