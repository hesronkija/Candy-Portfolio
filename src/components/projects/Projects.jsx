import { PROJECTS } from "../../constant";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section>
      <motion.div
        className="mb-8 text-center text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.div>
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-col gap-4 md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex w-full flex-col md:w-1/3">
            <h2 className="text-center text-lg font-bold md:text-start">
              {project.heading}
            </h2>
            <p className="text-center text-sm text-orange-400/70 md:pr-16 md:text-start">
              {project.intro}
            </p>
            <ul>
              {project.titles.map((title, idx) => (
                <motion.li
                  key={idx}
                  className="mb-2 pl-4 text-center text-sm text-neutral-100/70 md:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <a
                    className="underline hover:cursor-pointer hover:underline md:no-underline"
                    href={project.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex w-full justify-center md:w-2/3 md:justify-center">
            <motion.img
              className="w-3/6 rounded shadow-lg shadow-orange-500/15"
              src={project.photo}
              alt={project.heading}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
