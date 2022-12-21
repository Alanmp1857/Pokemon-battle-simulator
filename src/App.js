import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Teambuilder from "./Teambuilder";
import Navbar from "./Navbar";
import Home from "./Home";
import Data from "./Data";
import Battle from "./Battle";
import Ladder from "./Ladder";
import DamageCalculator from "./DamageCalculator";

function App() {
  return (
    <div className="App h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/teambuilder" exact element={<Teambuilder />} />
          <Route path="/battle" exact element={<Battle />} />
          <Route path="/ladder" exact element={<Ladder />} />
          <Route path="/damageCalculator" exact element={<DamageCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
