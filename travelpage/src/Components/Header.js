import React from "react";
import { NavLink } from "react-router-dom";


export default function Header () {
    
    return (
        <div className='flex justify-between items-center h-24 max-w-[1400px] mx-auto px-9 bg-cyan-50'>
<<<<<<< HEAD
            <h1 className='w-full text-3xl font-bold m-4'>TravelEx</h1>
            <div className='flex '>
=======
            <h1 className='w-full uppercase text-3xl font-bold m-4'>TravelEx</h1>
            <div className='no-underline hover:underline flex-row-reverse font-bold '>
>>>>>>> navi-branch
                
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
