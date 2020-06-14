import React, { useState } from "react";
import { useSetRecoilState, atom } from "recoil";
import { todoListState } from "./todoListState";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DirectionsIcon from "@material-ui/icons/Directions";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function RecoilTodoItemCreator() {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Paper className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            value={inputValue}
            onChange={onChange}
            placeholder="Add a Todo!"
            inputProps={{ "aria-label": "add a todo" }}
          />

          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            onClick={addItem}
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <AddCircleIcon />
          </IconButton>
        </Paper>
      </div>
    </form>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
