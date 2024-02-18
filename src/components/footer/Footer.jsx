import React from 'react';
import "./footer.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Prakash</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://twitter.com/chaudhury_19" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a href="https://github.com/prakash-cmd" className="footer__social-icon" target="_blank" rel="noreferrer">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/prakash-cmd/" className="footer__social-icon" target="_blank" rel="noreferrer" >
                    <FaLinkedin />
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;