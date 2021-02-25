import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">Watchdawg</NavLink>
                <ul id="nav-mobild" className="right hide-on-med-and-down">
                    <li><NavLink to="/events">All Events</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;