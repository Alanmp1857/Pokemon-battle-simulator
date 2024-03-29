import "./App.css";
import React from "react";
import { useState } from "react";
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
import DamageCalculator from "./DamageCalculator";
import Signin from "./Signin";
import SignUp from "./SignUp";
import MyTeam from "./MyTeam";

function App() {
  // console.log(localStorage.getItem("name").username)
  // console.log(localStorage)
  const obj = JSON.parse(localStorage.getItem("userinfo"));
  // console.log("obj", obj);
  const [userinfo, setUserinfo] = useState(obj);
  return (
    <div className="App h-full">
      <Router>
        <Navbar userinfo={userinfo} setUserinfo={setUserinfo} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/teambuilder" exact element={<Teambuilder />} />
          <Route
            path="/battle"
            exact
            element={<Battle userinfo={userinfo} />}
          />
          <Route
            path="/damagecalculator"
            exact
            element={<DamageCalculator />}
          />
          <Route
            path="/signin"
            exact
            element={<Signin setUserinfo={setUserinfo} />}
          />
          <Route path="/signup" exact element={<SignUp />} />
          <Route
            path="/myteam"
            exact
            element={<MyTeam userinfo={userinfo} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
