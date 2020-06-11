import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Route } from "react-router-dom";
import Todos from "../Pages/Todos";
import DrawerComponent from "../Navigation/DrawerComponent";
import AppBarComponent from "../Navigation/AppBarComponent";
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

  const handleChange = (name) => (e) => {
    setEntry({
      ...entry,
      [name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    let arr = todos;
    entry.id = uuidv4();
    arr.push(entry);

    setTodos(arr);
    setEntry({
      id: "",
      name: "",
      time: "",
      complete: false,
    });
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

  const isActive = useMediaQuery("(min-width: 814px)");

  console.log(isActive);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerOpen={handleDrawerOpen}
        open={isActive && open}
        incomplete={todos.filter((todo) => todo.complete == false).length}
      />
      {isActive && (
        <DrawerComponent
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
      )}

      <Route
        path="/dashboard"
        render={() => (
          <Todos
            todos={todos}
            setTodos={setTodos}
            handleSubmit={handleSubmit}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            entry={entry}
            setEntry={setEntry}
            handleChange={handleChange}
          />
        )}
      />
    </div>
  );
}
