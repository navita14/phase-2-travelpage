import './App.css';
import React,{ useState, useEffect} from "react"
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Destinations from './Components/Destinations';
import Map from "./Components/Map"
import MoreInfo from './Components/MoreInfo';
import London from './Destination/London';
import LosAngeles from './Destination/LosAngeles';
import Florence from './Destination/Florence';
import Bogota from './Destination/Bogota';
import Tokyo from './Destination/Tokyo';
import FlightSearch from './Components/FlightSearch'; 
import flightsData from './flights.json';

function App() {
  const [destinations,setDestinations] = useState([])

  useEffect (() => {
    fetch("http://localhost:8000/destinations")
    .then(res => res.json())
    .then(data => setDestinations(data))
  },[])

  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/Map">
            <h1>Map</h1>
            <Map />
          </Route>
          <Route exact path="/Flights">
            <h1>Flights</h1>
            <FlightSearch flights={flightsData.flights} />
          </Route>
          <Route exact path="/Destinations">
            <h1>Destinations</h1>
            <Destinations destinations={destinations} />
          </Route>
          {destinations.map(destination => {
            return (
              <Route
              exact path={`/Destination/${destination.city}`}>
                <MoreInfo name={destination.city}/>
              </Route>
            )
          })}
          <Route exact path="/Destination/newLondon">
            <London />
          </Route>
          <Route exact path="/Destination/newAngeles">
            <LosAngeles />
          </Route>
          <Route exact path="/Destination/newFlorence">
            <Florence />
          </Route>
          <Route exact path="/Destination/newTokyo">
            <Tokyo />
          </Route>
          <Route exact path="/Destination/newBogota">
            <Bogota />
          </Route>
      </Switch>
    </div>
  );
}

export default App;

