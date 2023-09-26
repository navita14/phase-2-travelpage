import React from "react";
import { NavLink } from "react-router-dom";
import Map from "./Map"

export default function Header () {
    return (
        <div id="header">
            <h1>TravelEx</h1>
            <div className="header-links">
                
                <NavLink
                exact
                to="/Map"
                className="nav-link"
                >Map</NavLink>
                
                <NavLink
                exact
                to="/Flights"
                className="nav-link"
                >Flights</NavLink>
                
                <NavLink
                exact
                to="/Destinations"
                className="nav-link"
                >Destinations</NavLink>
            </div>
        </div>
    )
}
