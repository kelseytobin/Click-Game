import React from "react";
import "./style.css";

function NavBar() {
    return (
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                    <li className="brand-logo left">Clicky Game</li>
                    <li className="brand-logo center">Click an Image to Begin</li>
                    <li className="brand-logo right">Score Placeholder</li>
                </div>
            </nav>
        );
    };

export default NavBar;