import { Hero, Navbar, About, Projects, Experiences } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
    </div>
  );
};

export default Home;
