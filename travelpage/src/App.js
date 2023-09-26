import './App.css';
import React,{ useState, useEffect} from "react"
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Destinations from './Components/Destinations';
import Map from "./Components/Map"
import MoreInfo from './Components/MoreInfo';

function App() {
  const [destinations,setDestinations] = useState([])

  useEffect (() => {
    fetch("http://localhost:4000/destinations")
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
        </Route>
        <Route exact path="/Destinations">
          <h1>Destinations</h1>
          <Destinations destinations={destinations} />
        </Route>
        {destinations.map(destination => {
          <Route exact path={`/Destinations/${destination.city}`}>
            <MoreInfo city={destination.city} />
          </Route>
        })}
      </Switch>
    </div>
  );
}

export default App;

