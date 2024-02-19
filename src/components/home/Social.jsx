import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com/chaudhury_19" className="home__social-icon" target="_blank">
                <FiTwitter/>
            </a>
            <a href="https://leetcode.com/nagato19/" className="home__social-icon" target="_blank">
                <SiLeetcode/>
            </a>
            <a href="https://github.com/prakash-cmd" className="home__social-icon" target="_blank">
                <FiGithub/>
            </a>
            <a href="https://www.linkedin.com/in/prakash-cmd/" className="home__social-icon" target="_blank">
                <FiLinkedin/>
            </a>
        </div>
    );
}

export default Social;