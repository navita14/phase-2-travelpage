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
    <div>
      <h2>Flight Price Search</h2>
      <div>
        <label>Origin:</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <h3>Search Results:</h3>
        {searchResults.length > 0 ? (
          <ul>
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