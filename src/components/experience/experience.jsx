import React, { useState } from 'react';
import './experience.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Experience = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">FullTime + Internship</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title"><b>Amazon - </b><br/> System Development Engineer Intern </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Amazon - System Development Engineer Intern</h3>
                        <p className="services__modal-description"> Gurugram, Haryana [ January 2023 – June 2023 ]</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Worked with the Payments Secure Zone (Payments Services) team.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Developed a package for automated ticket categorization, saving 3 weekly work hours
                                    (2 SysDev and 1 SysDM).
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Automated WBR and weekly OpEx report, saving 1 hour/week for an on-call SysDev
                                    engineer and 4 hours/week
                                    for SysDM respectively.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Created a fast automation script to fix a serious dnsmasq vulnerability on 162+
                                    hosts, cutting resolution time from
                                    months to hours.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Resolved 85+ Severity-3 (Partner Connectivity) tickets.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon"/>
                    <h3 className="services__title"><b> Daphnis Labs - </b><br/>iOS Developer Intern</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Daphnis Labs - iOS Developer Intern</h3>
                        <p className="services__modal-description">
                            New Delhi, India [ Oct 2021 – Feb 2022 ]
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Designed native iOS app UI using UIKit and Storyboard and published 3 Flutter apps
                                    on App Store.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Got familiar with App Store Connect and Apple Developer account services as
                                    Certificates, Identifiers, Profiles, and
                                    TestFlight testing.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Experience in Backend Development with Node.js, Express.js, and MongoDB as a
                                    database.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon"/>
                                <p className="services__modal-info">
                                    Deploying and maintaining scalable applications with the help of AWS and Nginx as a load balancer.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </section>
    );
}

export default Experience;