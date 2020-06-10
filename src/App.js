import React, { useState, useEffect } from "react";
//import Dashboard from "./Dashboard";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./Layouts";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Route path="/" render={() => <Dashboard />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
