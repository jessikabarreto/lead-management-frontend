import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./containers/Home";
import { Signin } from "./containers/Signin";
import { Register } from "./containers/Register";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
