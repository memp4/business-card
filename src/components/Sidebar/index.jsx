import React from 'react';
import "./index.scss";
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
    return (
        //TODO: logo
        <nav className="nav-bar">
            <NavLink exact="true" to="/" activeclassname="active" className="nav-link">
                <FaHome />
            </NavLink>
            <NavLink exact="true" to="/about" activeclassname="active" className="nav-link">
                <FaUser />
            </NavLink>
            <NavLink exact="true" to="/contacts" activeclassname="active" className="nav-link">
                <FaEnvelope />
            </NavLink>
        </nav>
        // TODO: Links for social media
    );
};

export default Sidebar;