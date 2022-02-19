import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./pages/Forms";
import Schedule from "./pages/Schedule";
import HeaderNav from "./Components/Header/HeaderNav";
import Home from "./pages/Home";
import MNVRecomenda from "./pages/MNVRecomenda";

const App = () => {
  return (
    <section style={{display: 'flex', justifyContent: 'space-between'}}>
      <Router>
        <HeaderNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/forms" element={<Forms />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/mnvrecomenda" element={<MNVRecomenda />} />
        </Routes>
        <div style={{width: '5%'}}></div>
      </Router>
    </section>
  );
};

export default App;
