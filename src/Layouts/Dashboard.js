import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Route } from "react-router-dom";
import Todos from "../Pages/Todos";
import RecoilPage from "../Pages/RecoilPage";
import Analytics from "../Pages/Analytics";
import DrawerComponent from "../Navigation/DrawerComponent";
import AppBarComponent from "../Navigation/AppBarComponent";
import BottomNav from "../Navigation/BottomNav";
import { v4 as uuidv4 } from "uuid";

import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isActive = useMediaQuery("(min-width: 814px)");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerOpen={handleDrawerOpen}
        open={isActive && open}
      />
      {isActive && (
        <DrawerComponent
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
      )}

      <Route path="/recoil" render={() => <RecoilPage />} />
      <Route path="/analytics" render={() => <Analytics />} />
    </div>
  );
}
