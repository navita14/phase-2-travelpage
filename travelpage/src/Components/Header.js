import React from "react";
import { NavLink } from "react-router-dom";


export default function Header () {
    
    return (
        <div className='flex justify-between items-center h-24 max-w-[1400px] mx-auto px-9 bg-cyan-50'>
            <h1 className='w-full text-3xl font-bold m-4'>TravelEx</h1>
            <div className='flex '>
                
                <NavLink
                exact
                to="/Map"
                className='p-4 font-bold '
                >Map</NavLink>
                
                <NavLink
                exact
                to="/Flights"
                className="p-4 font-bold"
                >Flights</NavLink>
                
                <NavLink
                exact
                to="/Destinations"
                className='p-4 font-bold'
                >Destinations</NavLink>
            </div>
            
        </div>
    )
}
