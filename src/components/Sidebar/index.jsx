import React from 'react';
import "./index.scss";
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <nav className="nav-bar">
            <NavLink exact="true" to="business-card/" activeclassname="active" className="nav-link">
                <FaHome />
            </NavLink>
            <NavLink exact="true" to="business-card/about" activeclassname="active" className="nav-link">
                <FaUser />
            </NavLink>
            <NavLink exact="true" to="business-card/contact" activeclassname="active" className="nav-link">
                <FaEnvelope />
            </NavLink>
            <ul className="nav-contacts">
                <li className="nav-link"><a href="https://www.linkedin.com/in/sultan-mamyrov-027ba2223/"><FaLinkedin /></a></li>
                <li className="nav-link"><a href="https://github.com/memp4"><FaGithub /></a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;