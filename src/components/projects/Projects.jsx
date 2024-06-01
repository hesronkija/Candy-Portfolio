import { PROJECTS } from "../../constant";

const Projects = () => {
  return (
    <section>
      <div className="mb-8 text-center text-4xl">Projects</div>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full flex flex-col md:w-1/2">
            <h2 className="text-lg font-bold text-center md:text-start">{project.heading}</h2>
            <p className="md:pr-16 text-sm text-orange-400/70 text-center md:text-start">{project.intro}</p>
            <ul>
              {project.titles.map((title, idx) => (
                <li
                  key={idx}
                  className="mb-2 pl-4 text-center md:text-start text-sm text-neutral-100/70"
                >
                  <a
                    className="underline md:no-underline hover:underline hover:cursor-pointer"
                    href={project.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              className="w-5/6 rounded shadow-lg shadow-orange-500/15"
              src={project.photo}
              alt={project.heading}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
