import React from "react"
import DestinationList from "./DestinationList"


export default function Destinations({destinations}){
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pl-1">
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