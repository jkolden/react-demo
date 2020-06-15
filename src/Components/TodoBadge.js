/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Layouts/Title";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  center: {
    alignSelf: "center",
  },
  depositContext: {
    flex: 1,
  },
});

export default function TodoBadge({ count, title }) {
  const classes = useStyles();
  let date = Date(Date.now());

  return (
    <div className={classes.root}>
      <Title>{title}</Title>
      <Typography component="p" variant="h3" className={classes.center}>
        {`${count}${title == "Percent Completed" ? "%" : ""}`}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        June 12, 2020
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View Details
        </Link>
      </div>
    </div>
  );
}
