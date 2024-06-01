import { EXPERIENCES } from "../../constant";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <section>
      <motion.div
        className="mb-8 text-center text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Professional Experiences
      </motion.div>
      {EXPERIENCES.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-4 flex flex-col gap-2 md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold text-center md:text-start">{experience.position}</h2>
            <p className="flex flex-col text-sm text-orange-400/70 md:flex-row md:justify-between mb-2 text-center md:text-start">
              <span>{experience.organization}</span>
              <span className="font-thin text-neutral-400 pr-4">{experience.duration}</span>
            </p>
          </div>
          <div className="w-full text-center md:text-start md:w-2/3">
            <ul>
              {experience.roles.map((role, roleIndex) => (
                <motion.li
                  key={roleIndex}
                  className="mb-4 text-sm text-neutral-100/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: roleIndex * 0.1 }}
                >
                  <p className="font-extralight">{role}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Experiences;
