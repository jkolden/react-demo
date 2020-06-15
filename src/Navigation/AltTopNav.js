import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import SideNav from "./SideNav";
import IconButton from "@material-ui/core/IconButton";
import Title from "../Layouts/Title";

import {
  Menu,
  KeyboardBackspace,
  Brightness4,
  Brightness7,
  ChevronLeft,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "64px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  wrapIcon: {
    verticalAlign: "middle",
    marginLeft: theme.spacing(2),
  },
  icon: {
    float: "right",
  },
}));

export default function AltTopNav({ themeMode, lightMode, darkMode }) {
  const [open, setOpen] = useState("");

  const classes = useStyles();
  const navClasses = classNames(`nav-${open}`, `${classes.root}`);

  const handleClick = () => {
    if (open === "closed") {
      setOpen("open");
    } else {
      setOpen("closed");
    }
  };

  return (
    <div className={navClasses}>
      <div className="nav-toggle" onClick={handleClick}>
        <div className="icon">
          <SideNav />
        </div>
      </div>
      {themeMode === "light" ? (
        <IconButton color="primary" onClick={darkMode} className={classes.icon}>
          <Brightness4 />
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          onClick={lightMode}
          className={classes.icon}
        >
          <Brightness7 />
        </IconButton>
      )}
    </div>
  );
}
