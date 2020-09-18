import React from "react";
import { Grid, makeStyles, IconButton, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

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
        <Grid
          item
          container
          className={classes.socialContainer}
          justify="center"
          alignItems="flex-end"
        >
          <Grid
            item
            component={"a"}
            href="https:///wwww.facebook.com/ehannahiii"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton className={classes.icon}>
              <FacebookIcon style={{ fontSize: 45 }} />
            </IconButton>
          </Grid>
          <Grid
            item
            component={"a"}
            href="https:///wwww.instagram.com/thatsehannah"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton className={classes.icon}>
              <InstagramIcon style={{ fontSize: 45 }} />
            </IconButton>
          </Grid>
          <Grid
            item
            component={"a"}
            href="https:///wwww.linkedin.com/in/elliotchannahiii"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton className={classes.icon}>
              <LinkedInIcon style={{ fontSize: 45 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
