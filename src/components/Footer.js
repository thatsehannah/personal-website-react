import React from "react";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import SocialMedia from "./SocialMedia";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.base,
    height: "20em",
    width: "100%",
    position: "relative",
    marginTop: "1.5em",
  },
  socialContainer: {
    right: "1.5em",
  },
  icon: {
    color: "#ffffff",
  },
  text: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));

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
