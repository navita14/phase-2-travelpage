import React from "react";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <div id="header">
            <h1>TravelEx</h1>
            <div className="header-links">
                <NavLink
                exact
                to="/"
                className="nav-link"
                >Map</NavLink>
                <NavLink
                exact
                to="/flights"
                className="nav-link"
                >Flights</NavLink>
                <NavLink
                exact
                to="/destinations"
                className="nav-link"
                >Destinations</NavLink>
            </div>
        </div>
    )
}
