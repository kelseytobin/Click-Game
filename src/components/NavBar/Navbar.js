import React from "react";
import "./style.css";

function NavBar({game, message, score, topScore}) {
    return (
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                    <li className="brand-logo left">{game}</li>
                    <li className="brand-logo center">{message}</li>
                    <li className="brand-logo right">Score: {score} | High Score: {topScore}</li>
                </div>
            </nav>
        );
    };

export default NavBar;