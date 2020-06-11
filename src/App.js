import React, { useState, useEffect } from "react";
//import Dashboard from "./Dashboard";
import "./App.css";
import { withRouter, Route, BrowserRouter, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { Dashboard } from "./Layouts";
import BottomNav from "./Navigation/BottomNav";

import { createBrowserHistory } from "history";
import { RecoilRoot } from "recoil";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const history = createBrowserHistory();

  const isActive = useMediaQuery("(min-width: 814px)");

  return (
    <div className="App">
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <BrowserRouter history={history}>
            <Route path="/" render={() => <Dashboard />} />
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
    </div>
  );
}

export default withRouter(App);
