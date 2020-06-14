import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ResponsiveContainer } from "recharts";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PieChart from "../Charts/PieChart";
import TodoBarChart from "../Charts/TodoBarChart";

import { useRecoilValue } from "recoil";
import {
  todoListStatsState,
  filteredTodoListState,
} from "../Components/todoListState";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      height: "calc(100vh - 112px)",
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function Analytics() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const data = [
    {
      name: "Open Items",
      value: totalUncompletedNum,
    },
    {
      name: "Completed Items",
      value: totalCompletedNum,
    },
  ];

  const data1 = [
    {
      name: "Open Items",
      value: totalUncompletedNum,
    },
    {
      name: "Completed Items",
      value: totalCompletedNum,
    },
    {
      name: "Total Items",
      value: totalNum,
    },
  ];

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart data={data} />
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
              <ResponsiveContainer width="100%" height={200}>
                <TodoBarChart data={data1} totalNum={totalNum} />
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
