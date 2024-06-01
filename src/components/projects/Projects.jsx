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
          className="mb-4 flex flex-col gap-4 md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="w-full flex flex-col md:w-1/2">
            <h2 className="text-lg font-bold text-center md:text-start">{project.heading}</h2>
            <p className="md:pr-16 text-sm text-orange-400/70 text-center md:text-start">{project.intro}</p>
            <ul>
              {project.titles.map((title, idx) => (
                <motion.li
                  key={idx}
                  className="mb-2 pl-4 text-center md:text-start text-sm text-neutral-100/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <a
                    className="underline md:no-underline hover:underline hover:cursor-pointer"
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

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.img
              className="w-5/6 rounded shadow-lg shadow-orange-500/15"
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