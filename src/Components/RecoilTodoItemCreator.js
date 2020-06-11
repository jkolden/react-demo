import React, { useState } from "react";
import { useSetRecoilState, atom } from "recoil";
import { todoListState } from "./todoListState";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
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
      <TextField
        fullWidth
        value={inputValue}
        onChange={onChange}
        label="Add a Todo"
      />

      <Button variant="contained" color="primary" onClick={addItem}>
        Add
      </Button>
    </form>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
