import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* Icons */
import Settings from "@material-ui/icons/Settings";
import PieChartIcon from "@material-ui/icons/PieChart";
import Home from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";

import { useRecoilValue } from "recoil";
import {
  todoListStatsState,
  filteredTodoListState,
} from "../Components/todoListState";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function BottomNav({ val, onChange }) {
  const classes = useStyles();
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);
  return (
    <BottomNavigation
      className={classes.root}
      value={val}
      onChange={(e, tab) => onChange(tab)}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={
          <Badge badgeContent={totalUncompletedNum} color="secondary">
            <Home />
          </Badge>
        }
      />

      <BottomNavigationAction
        component={Link}
        to="/analytics"
        label="Analytics"
        icon={<PieChartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/grid"
        label="Settings"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
