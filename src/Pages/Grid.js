import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import {
  Menu,
  KeyboardBackspace,
  Brightness4,
  Brightness7,
  ChevronLeft,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    float: "right",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      height: "calc(100vh - 112px)",
      overflow: "auto",
      textAlign: "center",
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  },
}));

export default function GridPage({ themeMode, lightMode, darkMode }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {themeMode === "light" ? (
              <IconButton color="inherit" onClick={darkMode}>
                <Brightness4 />
              </IconButton>
            ) : (
              <IconButton color="inherit" onClick={lightMode}>
                <Brightness7 />
              </IconButton>
            )}
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}
