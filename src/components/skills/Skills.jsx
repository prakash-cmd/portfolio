import React from 'react';
import "./skills.css";
import Frameworks from './Frameworks';
import Languages from './Languages';
import DeveloperTools from "./DeveloperTools";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Level</span>
        <div className="skills__container container grid">
            <Frameworks />
            <Languages />
            <DeveloperTools />
        </div>
    </section>
  );
}

export default Skills;