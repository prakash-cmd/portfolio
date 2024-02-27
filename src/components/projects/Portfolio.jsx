import React from 'react';
import Projects from './Projects';
import "./projects.css";
import {HiOutlineCheckCircle, HiX} from "react-icons/hi";

const Portfolio = () => {
  return (
      <section className="portfolio section" id="projects">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">Recent Projects</span>

          <Projects/>

      </section>
  );
}

export default Portfolio;