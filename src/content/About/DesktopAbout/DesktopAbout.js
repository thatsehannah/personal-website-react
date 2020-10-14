import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { useStyles } from "./styles";

const DesktopAbout = (props) => {
  const classes = useStyles(props);

  return (
    <Card raised className={classes.card}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
export default DesktopAbout;
