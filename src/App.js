import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import HeaderNav from "./Header/HeaderNav";

const App = () => {
  return (
    <section>
      <div className="space stars1">
        <div className="space stars2">
          <div className="space stars3">
            <Router>
              {/* <HeaderNav /> */}
              <Home />
            </Router>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
