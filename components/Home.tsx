import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Roadmap from './Roadmap';
import TechStack from './TechStack';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Roadmap />
      <TechStack />
      <Contact />
    </>
  );
};

export default Home;
