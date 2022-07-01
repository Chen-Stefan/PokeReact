import logo from "./logo.svg";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element= {<Dashboard />} />
            <Route exact path="/pokemon/:pokemonIndex" element= {<Pokemon />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
