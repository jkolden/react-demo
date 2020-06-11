import React, { useState, useEffect } from "react";
//import Dashboard from "./Dashboard";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import { Dashboard } from "./Layouts";
import BottomNav from "./Navigation/BottomNav";

import { createBrowserHistory } from "history";
import RalewayWoff2 from "./Assets/Fonts/raleway-regular-webfont.woff2";

const raleway = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const [tab, setTab] = useState(0);

  const history = createBrowserHistory();

  const isActive = useMediaQuery("(min-width: 814px)");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter history={history}>
          <Route path="/" render={() => <Dashboard />} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
