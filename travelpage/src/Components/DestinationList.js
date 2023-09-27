import { Route, Switch } from "react-router-dom";
import React,{useState} from "react";
import MoreInfo from "./MoreInfo";
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
        <div className="desList">
            <div>
                <h2 class="text-center text-xl font-bold font-serif ">{city}</h2>
            </div>
            <div className="boxx">
                <NavLink 
                exact 
                to={`/destination/${city}`}>
                    <button class="text-sm font-semibold py-2 px-3 rounded-full" >More Info</button>
                </NavLink>
                <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 " onClick={toggleFacts}>Fun Fact</button>
                {isFunFact ? (
                    <img className="pics" src={image} alt={city} />
                ) : (
                    <p>{funfact}</p>
                )}
            </div>
        </div>
    )
}