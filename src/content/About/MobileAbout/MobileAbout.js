import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./styles";

const MobileAbout = (props) => {
  const classes = useStyles(props);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <Paper className={classes.paper}>{props.children}</Paper>
    </Grid>
  );
};

export default MobileAbout;
