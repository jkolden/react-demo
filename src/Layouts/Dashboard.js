import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "../listitems";
import CreateDialogue from "../CreateDialogue";
import { Route } from "react-router-dom";
import Todos from "../Pages/Todos";
import DrawerComponent from "../Navigation/DrawerComponent";
import AppBarComponent from "../Navigation/AppBarComponent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Walk the dog",
      time: 2,
      complete: false,
    },
    {
      id: 2,
      name: "Get dinner",
      time: 1,
      complete: false,
    },
    {
      id: 3,
      name: "Watch the news",
      time: 1,
      complete: false,
    },
  ]);

  const [entry, setEntry] = useState({
    id: "",
    name: "",
    time: "",
    complete: false,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
      <DrawerComponent
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <Route path="/dashboard" render={() => <Todos todos={todos} />} />
    </div>
  );
}
