import React from 'react';
import { SiLeetcode } from "react-icons/si";
import { FaUserGraduate, FaHome } from "react-icons/fa";
import {HiOutlineArrowSmUp} from "react-icons/hi";


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
            <SiLeetcode className="about__icon"/>
            <h3 className="about__title">Leetcode</h3>
            <span className="about__subtitle">
                <a href="https://leetcode.com/nagato19/" className="about__leetcode" target={"_blank"}>
                    prakash-cmd</a>
            </span>
        </div>
    </div>
  );
}

export default Info;