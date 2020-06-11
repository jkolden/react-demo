import React from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import PieChart from "../Charts/PieChart";

import { useRecoilValue } from "recoil";
import {
  todoListStatsState,
  filteredTodoListState,
} from "../Components/todoListState";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    float: "right",
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
  fixedHeight: {
    height: 200,
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

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <h1>Completion Status</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <PieChart data={data} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
