import React from "react"
import DestinationList from "./DestinationList"


export default function Destinations({destinations}){
    return (
        <div className="homepage-pics">
        {destinations.map((des) => {
          return (
            <DestinationList
              key={des.id} 
              city={des.city}
              image={des['main-image']} 
              funfact={des.funfact}
            />
          );
        })}
      </div>
    )

}