import React, { useEffect, useState } from 'react';
import { projectsData } from "./Data";
import { projectsNav } from './Data';
import ProjectItems from "./ProjectItems";
import {HiOutlineCheckCircle, HiX} from "react-icons/hi";

const Projects = () => {
    const [item, setItem] =  useState({ name: "All" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [isModalActive, setModalVisibility] = useState(false)
    const [selectedProject, setProject] = useState(null)

    useEffect(() => {
         // if(item.name === "All") {
         //    setProjects(projectsData);
         // }
         // else{
         //    const newProjects = projectsData.filter((project) => {
         //        return project.category === item.name;
         //    });
            setProjects(projectsData);
         // }
    },[item]);

    // const handleClick  = (e, index) => {
    //     setItem({ name: e.target.textContent });
    //     setActive(index);
    // };

    return (
        <div>
            {/*<div className="project__filters">*/}
            {/*    {projectsNav.map((item, index) => {*/}
            {/*        return (*/}
            {/*            <span onClick={(e) => {*/}
            {/*                handleClick(e, index);*/}
            {/*            }}*/}
            {/*                  className={`${active === index ? 'active-project' : ''} project__item`}*/}
            {/*                  key={index}>{item.name}</span>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
            <div className="project__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id} click={() => {
                        setModalVisibility(!isModalActive)
                        setProject(item)
                    }}/>
                })}
            </div>
            {selectedProject && <div className={isModalActive ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <HiX onClick={() => setModalVisibility(!isModalActive)} className="services__modal-close"/>
                    <h3 className="services__modal-title">{selectedProject.title}</h3>
                    <p className="services__modal-description">{selectedProject.data.date}</p>
                    <ul className="services__modal-services grid">
                        {selectedProject.data.details.map((e) => {
                            return <>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon"/>
                                    <p className="services__modal-info">
                                        {e}
                                    </p>
                                </li>
                            </>
                        })}
                    </ul>
                </div>
            </div>}

        </div>
    );
}

export default Projects;