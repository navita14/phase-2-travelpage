import React from "react"
import { Switch, Route } from 'react-router-dom';

export default function MoreInfo({ destination }){
    return (

      <div>
        <div class="text-center space-y-10  ">
            <h1 class="text-4xl mx-10 font-bold">{destination.city}</h1>
            <p class="text-xl font-bold">Welcome to {destination.city}, the capital of {destination.state}!</p>
        </div>

    <div className='w-full py-[6rem] px-4 max-w-[1240px] mx-auto'>
    <div className='max-w-[1240px] '>
    <div className='w-full shadow-lx flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-400 bg-white'></div>

    <div class="flex justify-center max h-screen">
        
        <div class=" mx-10  grid md:grid-cols-2">
          <div class="grid justify-center max-w-2xl shadow-xl gap-8">
            <div >
              <img
                class="object-fill h-56 w-96 "
                src={destination.imageOne}
                alt={destination.city}
              />
            </div>
            <div>
              <img
                class="object-fill h-56 w-96 "
                src={destination.imageTwo}
                alt={destination.city}
              />
            </div>
            <div>
              <img
                class="object-fill h-56 w-96 "
                src={destination.imageThree}
                alt={destination.city}
              />
            </div>
          </div >
            <div className="max-w-2xl grid content-center pl-6 font-serif shadow-xl ">
              <ul >{destination.funfact}</ul>
            </div>
        </div>
      </div>
    
    </div>
    </div>
    </div>
    
    )
}

