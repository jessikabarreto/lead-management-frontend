import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./containers/Home";
import { Signin } from "./containers/Signin";
import { Register } from "./containers/Register";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import { Administration } from "./containers/Administration";
import { LeadCapture } from "./containers/LeadCapture";
import { LeadTracker } from "./containers/LeadTracker";
import { Dashboard } from "./containers/Dashboard";
import { Search } from "./containers/Search";
import { GetData, GetDateData } from "./components/Charts";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/administration"
          element={
            <PrivateRoute>
              <Administration />
            </PrivateRoute>
          }
        />
        <Route
          path="/leadcapture"
          element={
            <PrivateRoute>
              <LeadCapture />
            </PrivateRoute>
          }
        />
        <Route
          path="/leadtracker"
          element={
            <PrivateRoute>
              <LeadTracker />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route path="/signin/" element={<Signin />} />
        <Route path="/register/" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
