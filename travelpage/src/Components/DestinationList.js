import React,{useState} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function DestionationList({city,image,funfact}){
    const [isFunFact,setFunFact]= useState((true))
    
    function toggleFacts(){
        setFunFact(!isFunFact);
    }

    return (
        <div className="desList">
            <div>
                <h2>{city}</h2>
            </div>
            <div className="boxx">
                <NavLink to={`/Destinations/${city}`}>More Info</NavLink>
                <button className="btnOne" onClick={toggleFacts}>Fun Fact</button>
                {isFunFact ? (
                    <img className="pics" src={image} alt={city} />
                ) : (
                    <p>{funfact}</p>
                )}
            </div>
        </div>
    )
}