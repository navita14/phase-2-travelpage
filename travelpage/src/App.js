import './App.css';
import React,{ useState, useEffect} from "react"
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import DestinationList from "./Components/DestinationList"

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
        <Route exact path="/">
            <h1>TravelPage</h1>
          </Route>
          <Route exact path="/flights">
            <h1>Flights</h1>
          </Route>
          <Route exact path="/destinations">
            <h1>Destinations</h1>
          </Route>
      </Switch>
      <div className="homepage-pics">
        {destinations.map((des) => {
          return (
            <DestinationList
              key={des.id} 
              city={des.city}
              image={des['main-image']} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

