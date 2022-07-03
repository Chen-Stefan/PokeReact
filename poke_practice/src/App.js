import logo from "./logo.svg";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import PokemonProfile from "./components/pokemon/PokemonProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component= {Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component= {PokemonProfile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
