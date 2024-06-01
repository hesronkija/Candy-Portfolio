import { EXPERIENCES } from "../../constant";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <section>
      <div className="mb-8 text-center text-4xl">Professional Experiences</div>
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-4 flex flex-col gap-2 md:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg font-bold text-center md:text-start">{experience.position}</h2>
            <p className="flex flex-col text-sm text-orange-400/70 md:flex-row lg:justify-between mb-2 text-center md:text-start">
              <span>{experience.organization}</span>
              <span className="font-thin text-neutral-400 pr-4">{experience.duration}</span>
            </p>
          </div>
          <div className="w-full text-center md:text-start md:w-1/2">
            <ul>
              {experience.roles.map((role, roleIndex) => (
                <li key={roleIndex} className="mb-4 text-sm text-neutral-100/70">
                  <p className="font-extralight">{role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
