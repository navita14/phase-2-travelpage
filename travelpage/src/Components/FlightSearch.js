import React, { useState, useEffect } from 'react';

function FlightSearch({ flights }) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Function to perform the flight search
    const performSearch = () => {
      if (origin && destination) {
        const results = flights.filter((flight) => {
          return (
            flight.origin.toLowerCase() === origin.toLowerCase() &&
            flight.destination.toLowerCase() === destination.toLowerCase()
          );
        });
        setSearchResults(results);
      }
    };

    performSearch();
  }, [origin, destination, flights]);

  return (
    <div class="text-justify border-4 rounded-lg p-10">
      <h2 class="text-xl text-center p-4 font-semibold"> Flight Price Search </h2>
      <div  class="text-center">
        <label>Origin:</label>
        <input
          class="border-2 rounded items-center border-rose-500 m-1"
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div  class="text-center pr-9" >
        <label>Destination:</label>
        <input
          class="border-2 rounded border-rose-500 m-1"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div class=" text-center p-2 pb-60">
        <h3>Search Results:</h3>
        {searchResults.length > 0 ? (
          <ul class=" font-semibold p-4 space-y-2">
            {searchResults.map((result) => (
              <li key={result.id}>
                {result.airline} - ${result.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default FlightSearch;