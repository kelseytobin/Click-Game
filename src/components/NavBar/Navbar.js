import React from "react";

function NavBar() {
    return (
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper">
                <a href="#!" class="brand-logo left">Click an image to begin</a>
                <a href="#!" class="brand-logo center">Try to click all 18 images to win</a>
                <a href="#!" class="brand-logo right">Be careful not to click the same one twice</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;