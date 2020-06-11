import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Components/todoListState";
import TodoBadge from "./TodoBadge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
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

export default function RecoilTodoListStats() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={fixedHeightPaper}>
            <TodoBadge title="Total" count={totalNum} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={fixedHeightPaper}>
            <TodoBadge title="Completed" count={totalCompletedNum} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={fixedHeightPaper}>
            <TodoBadge title="Uncompleted" count={totalUncompletedNum} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={fixedHeightPaper}>
            <TodoBadge
              title="Percent Completed"
              count={formattedPercentCompleted}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
