import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item, click}) => {
  return (
      <div className="project__card" key={item.id}>
          <img className="project__img" src={item.image} alt=""/>
          <h3 className="project__title">{item.title}</h3>
          <div class="project__button-container">
              <span className="project__details_button" onClick={() => click()}>
                  View More <HiOutlineArrowSmRight className="project__details_button-icon"/>
              </span>
              <a href={item.link} className="project__link_button" target="_blank">
                  GitHub <HiOutlineArrowSmRight className="project__link_button-icon"/>
              </a>
          </div>
      </div>
  );
}

export default ProjectItems;