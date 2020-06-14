import React from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import RecoilTodoItem from "../Components/RecoilTodoItem";
import RecoilTodoItemCreator from "../Components/RecoilTodoItemCreator";
import RecoilTodoListFilters from "../Components/RecoilTodoListFilters";
import RecoilTodoListStats from "../Components/RecoilTodoListStats";
import {
  todoListState,
  filteredTodoListState,
} from "../Components/todoListState";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { makeStyles } from "@material-ui/core/styles";
import { CallReceived } from "@material-ui/icons";

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
  fixedHeight: {
    height: 290,
  },
}));

export default function RecoilPage() {
  const todoList = useRecoilValue(filteredTodoListState);

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <RecoilTodoListStats />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <RecoilTodoItemCreator />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <RecoilTodoListFilters />
              <List>
                {todoList.map((todoItem) => (
                  <RecoilTodoItem key={todoItem.id} item={todoItem} />
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
