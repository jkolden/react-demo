import React, { useState, useEffect } from "react";
import "./App.css";
import { withRouter, Route, BrowserRouter, Switch } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { useMediaQuery, CssBaseline } from "@material-ui/core";

import BottomNav from "./Navigation/BottomNav";
import AppBarComponent from "./Navigation/AppBarComponent";
import DrawerComponent from "./Navigation/DrawerComponent";
import MobileTopNav from "./Navigation/MobileTopNav";
import AltTopNav from "./Navigation/AltTopNav";

import RecoilPage from "./Pages/RecoilPage";
import Analytics from "./Pages/Analytics";
import GridPage from "./Pages/Grid";
import Grid from "@material-ui/core/Grid";

import { createBrowserHistory } from "history";
import { RecoilRoot } from "recoil";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [tab, setTab] = useState(0);
  const history = createBrowserHistory();

  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        light: "#757ce8",
        main: "#3476cb",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  useEffect(() => {
    let themePreference = localStorage.getItem("theme");
    if (themePreference) {
      //material ui theme
      setThemeMode(themePreference);
    }
  }, []);

  const handleLightMode = () => {
    document.querySelector("body").style.backgroundColor = "#fff";
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  const handleDarkMode = () => {
    document.querySelector("body").style.backgroundColor = "#111";
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <div className={classes.root}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <BrowserRouter history={history}>
            {/*<MobileTopNav
              themeMode={themeMode}
              lightMode={handleLightMode}
              darkMode={handleDarkMode}
            />*/}

            <AltTopNav
              themeMode={themeMode}
              lightMode={handleLightMode}
              darkMode={handleDarkMode}
            />
            <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
            <DrawerComponent
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
              open={open}
            />
            <Route path="/" exact render={() => <RecoilPage />} />
            <Route path="/analytics" render={() => <Analytics />} />
            <Route
              path="/grid"
              render={() => (
                <GridPage
                  themeMode={themeMode}
                  lightMode={handleLightMode}
                  darkMode={handleDarkMode}
                />
              )}
            />

            <BottomNav value={tab} onChange={setTab} />
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
      <CssBaseline />
    </div>
  );
}

export default withRouter(App);
