import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import SocialMedia from "./SocialMedia";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.black,
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
}));

const Footer = (props) => {
  const classes = useStyles();

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
            style={{ color: "white", fontSize: 20 }}
            gutterBottom
          >
            "Everything negative - pressure, challenges - is all an opportunity
            for me to rise"
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "white", fontSize: 20 }}
          >
            -Kobe Bryant
          </Typography>
        </Grid>
        <SocialMedia color="secondary" size="48" />
      </Grid>
    </footer>
  );
};

export default Footer;
