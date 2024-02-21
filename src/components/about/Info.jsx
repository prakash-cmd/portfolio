import React from 'react';
import { FaUserGraduate, FaHome } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa6";


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <FaUserGraduate className="about__icon" />
            <h3 className="about__title">Amity</h3>
            <span className="about__subtitle">2023 Graduate</span>
        </div>
        <div className="about__box">
            <FaHome className="about__icon" />
            <h3 className="about__title">Noida</h3>
            <span className="about__subtitle">Uttar Pradesh</span>
        </div>
        <div className="about__box">
            <FaAmazon className="about__icon"/>
            <h3 className="about__title">Amazon</h3>
            <span className="about__subtitle">Internship</span>
        </div>
    </div>
  );
}

export default Info;