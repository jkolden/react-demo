import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList({ todos, handleDelete, toggleComplete }) {
  const classes = useStyles();
  return (
    <List>
      {todos
        .sort(function (a, b) {
          return a.id - b.id;
        })
        .map((todo) => (
          <ListItem key={todo.id} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                onChange={() => toggleComplete(todo.id)}
                edge="start"
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText id={todo.id} primary={todo.id} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => handleDelete(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
}
