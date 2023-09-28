
import React,{useState} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
// import Destination from "./src/Destination"

export default function DestionationList({city,image,funfact}){
    const [isFunFact,setFunFact]= useState((true))
    
    function toggleFacts(){
        setFunFact(!isFunFact);
    }
    
    // const pages = 
    //     city === "London" ? `/Destination/newLondon` :
    //     city === "Los Angeles" ? `/Destination/newAngeles` : 
    //     city === "Florence" ? `/Destination/newFlorence` : 
    //     city === "Tokyo" ? `/Destination/newTokyo` : 
    //     city === "Bogota" ? `/Destination/newBogota` : `./Destination/${city}`



    return (
    <div class="flex justify-center">
        <div class="flex flex-wrap justify-center">
            <div class="max-w-xs rounded overflow-hidden shadow-lg justify-center">
                <div class="text-center">
                    <h2 class="text-xl font-bold font-serif">{city}</h2>
                </div>
                <div>
                <img class="w-full" src={image} alt={city} />
                    <NavLink 
                    exact 
                    to={`/destination/${city}`}>
                        <div class="px-6 py-4 flex items-center justify-center">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50">More Info</button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    )
}