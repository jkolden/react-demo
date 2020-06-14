/* eslint-disable no-script-url */

import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Layouts/Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TodoBadge({ count, title }) {
  const classes = useStyles();
  let date = Date(Date.now());

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h3">
        {count}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        June 12, 2020
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View Details
        </Link>
      </div>
    </React.Fragment>
  );
}
