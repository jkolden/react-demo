import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { TextField, Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import TodoBadge from "../Components/TodoBadge";
import TodosList from "../Components/TodoList";
import TodoList from "../Components/TodoList";
import PieChart from "../Charts/PieChart";

const drawerWidth = 240;

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
    height: 290,
  },
}));

export default function Todos() {
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
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleChange = (name) => (e) => {
    setEntry({
      ...entry,
      [name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(todos);
    let arr = todos;
    entry.id = uuidv4();
    arr.push(entry);

    setTodos(arr);
    setEntry({ id: "", name: "", time: "", complete: false });
  };

  function handleDelete(id) {
    let arr = todos.filter((todo) => todo.id != id);
    setTodos(arr);
  }

  function toggleComplete(id) {
    let arr = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );

    setTodos(arr);
  }
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}

          {/* Total Salary Badge */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>
              <PieChart todos={todos} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper className={fixedHeightPaper}>
              <TodoBadge count={todos.length} title="Total Todos" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper className={fixedHeightPaper}>
              <TodoBadge
                count={todos.filter((todo) => todo.complete === true).length}
                title="Complete Todos"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <form className={classes.root}>
                <TextField
                  fullWidth
                  onChange={handleChange("name")}
                  name="name"
                  id="name"
                  variant="outlined"
                  className={classes.input}
                  label="To Do"
                  value={entry.name}
                />
                <TextField
                  className={classes.input}
                  onChange={handleChange("time")}
                  variant="outlined"
                  id="time"
                  label="Est. Time to Complete"
                  type="number"
                  inputProps={{
                    inputMode: "decimal",
                    min: 0.0,
                    max: 15,
                    step: 0.25,
                  }}
                  value={entry.time}
                />
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <TodoList
                todos={todos}
                handleDelete={handleDelete}
                toggleComplete={toggleComplete}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
