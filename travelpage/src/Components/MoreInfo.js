import React from "react"
import { Switch, Route } from 'react-router-dom';

export default function MoreInfo({ destination }){
    return (
        <div class="text-center">
            <h1 class="text-xl font-bold">{destination.city}</h1>
            <p>Welcome to {destination.city}, the capital of {destination.state}!</p>
        <div class="w-96 h-96">
          <img
            src={destination.imageOne}
            alt={destination.city}
          />
          <img
            src={destination.imageTwo}
            alt={destination.city}
          />
          <img
            src={destination.imageThree}
            alt={destination.city}
          />
          <ul>{destination.funfact}</ul>
        </div>
      </div>
    )
}

