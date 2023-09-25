import React from "react";

export default function DestionationList({city,image}){
    return (
        <div className="desList">
            <div>
                <h2>{city}</h2>
            </div>
            <div>
                <img className="pics" src={image} alt={city} />
            </div>
            <button>More Info</button>
        </div>
    )
}