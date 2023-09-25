import React from "react";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <div id="header">
            <h1>Header</h1>
            <NavLink
            exact
            to="/"
            >TravelPage</NavLink>
            <NavLink
            exact
            to="/flights">Flights</NavLink>
            <NavLink
            exact
            to="/destinations">Destinations</NavLink>
        </div>
    )
}