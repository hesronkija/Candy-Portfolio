import { Hero, Navbar, About, Projects, Experiences, Contact } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
