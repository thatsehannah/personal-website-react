import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { useStyles } from "./styles";

const DesktopAbout = (props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Card raised className={classes.card}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </Grid>
  );
};
export default DesktopAbout;
