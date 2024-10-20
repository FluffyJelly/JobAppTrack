import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                
            </div>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/" className="nav-link">
                            Admin
                        </Link>
                    </li>
                    <li>
                        <Link to="/view" className="nav-link">
                            Organization
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="nav-link">
                            Volunteer
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="nav-link">
                            Overview
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
