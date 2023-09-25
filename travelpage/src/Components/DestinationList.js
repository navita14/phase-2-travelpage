import React,{useState} from "react";

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
            <div>
            <button onClick={toggleFacts}>Fun Fact</button>
            {isFunFact ? (
                <img className="pics" src={image} alt={city} />
            ) : (
                <p>{funfact}</p>
            )}
            </div>
            <button>More Info</button>
        </div>
    )
}