import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blooddonation from "./components/Blooddonation";
import Charity from "./components/Charity";
import Clothes from "./components/Clothes";
import Donatefood from "./components/Donatefood";
import HealthCare from "./components/HealthCare";

import Homeless from "./components/Homeless";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Hunger from "./components/Hunger";
import Jobassistance from "./components/Jobassistance";
import Medicine from "./components/Medicine";
import Organ from "./components/Organ";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/donateblood" element={<Blooddonation />} />
        <Route path="/donatemoney" element={<Charity />} />
        <Route path="/donateclothes" element={<Clothes />} />
        <Route path="/donateorgan" element={<Organ />} />
        <Route path="/hunger" element={<Hunger />} />
        <Route path="/homeless" element={<Homeless />} />
        <Route path="healthcare/" element={<HealthCare />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/job" element={<Jobassistance />} />
        <Route path="/donatefood" element={<Donatefood />} />

        <Route path="/about" element={<About />} />
        <Route path="/medicine" element={<Medicine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
