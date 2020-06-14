import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import SideNav from "./SideNav";

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
}));

export default function AltTopNav(props) {
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
    </div>
  );
}
