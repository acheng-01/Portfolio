import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
    return (
        <div className="header-container">
            <div className="inner-header-container">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/images/logo-1.png"} alt="logo" />
                </div>
                <ul className="sections">
                    <li key="1"><Link to="landing" smooth={true} duration={1000}>Home</Link></li>
                    <li key="2"><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
                    <li key="3"><Link to="bio" smooth={true} duration={1000}>Bio</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;