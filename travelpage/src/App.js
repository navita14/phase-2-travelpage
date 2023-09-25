import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './component/Header';

function App() {
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
    </div>
  );
}

export default App;
