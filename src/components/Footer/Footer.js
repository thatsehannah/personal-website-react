import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        style={{ height: "100%" }}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item container direction="column" style={{ marginBottom: "3em" }}>
          <Typography
            align="center"
            variant="body1"
            className={classes.text}
            gutterBottom
          >
            "Everything negative - pressure, challenges - is all an opportunity
            for me to rise"
          </Typography>
          <Typography align="center" variant="body1" className={classes.text}>
            -Kobe Bryant
          </Typography>
        </Grid>
        <SocialMedia color={theme.palette.common.standout} />
      </Grid>
    </footer>
  );
};

export default Footer;
