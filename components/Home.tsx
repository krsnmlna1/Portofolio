import Hero from './Hero';
import Projects from './Projects';
import Agency from './Agency';
import Roadmap from './Roadmap';
import TechStack from './TechStack';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Agency />
      <Projects />
      <Roadmap />
      <TechStack />
      <Contact />
    </>
  );
};

export default Home;
