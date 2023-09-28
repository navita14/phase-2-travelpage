import React,{useState} from "react";

export default function DestionationList({city,image,funfact}){
    const [isFunFact,setFunFact]= useState((true))
    
    function toggleFacts(){
        setFunFact(!isFunFact);
    }

    return (
        <div className='w-full py-[6rem] px-4 max-w-[1240px] mx-auto'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8 '>
            <div className='w-full shadow-lx flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-400 bg-white'>
                <h2 class="text-cyan-600 text-center pb-2 uppercase font-semibold text-2xl ">{city}</h2>
                <button className=" w-[150px] rounded-md font-medium my-3 mx-auto py-1 bg-amber-200" onClick={toggleFacts}>Fun Fact</button>
                {isFunFact ? (
                    <img className="rounded-lg pl-1 pr-1 pb-1 h-60" src={image} alt={city} />
                    ) : (
                        <p className=" text-center">{funfact}</p>
                    )}
                 <button className="pb-2">More Info</button>
            </div>

        </div>
        </div>
    )
}