import React from "react";
import { NavLink } from "react-router-dom";


export default function Header () {

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
            <h1 className='uppercase w-full text-3xl font-bold m-4'>TravelEx</h1>
            <div className='no-underline hover:underline flex-row-reverse font-bold '>

                <NavLink
                exact
                to="/Map"
                className='p-4'
                >Map</NavLink>

                <NavLink
                exact
                to="/Flights"
                className="p-4"
                >Flights</NavLink>

                <NavLink
                exact
                to="/Destinations"
                className='p-4'
                >Destinations</NavLink>
            </div>

        </div>
    )
}
