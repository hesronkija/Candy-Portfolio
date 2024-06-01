import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" mx-auto mb-20 flex w-full items-center justify-between py-6">
      <div>
        <Link to="/">
          <motion.h1
            className=" text-2xl font-bold italic hover:cursor-pointer md:text-4xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            C<span className="text-neutral-500">z</span>
          </motion.h1>
        </Link>
      </div>
      <div className="flex justify-center gap-4 text-2xl ">
        <a href="https://www.instagram.com/candyzillale/" target="_blank">
          <FaInstagram className="duration-400 text-[#d62976] transition-all hover:scale-105 hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/candy-zillale-695682221/"
          target="_blank"
        >
          <FaLinkedinIn className="text-[#0077b5] transition-all duration-500 hover:scale-105 hover:text-white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
