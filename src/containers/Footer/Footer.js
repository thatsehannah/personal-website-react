import React from "react";
import smoothScroll from "smoothscroll-polyfill";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const scrollToTop = () => {
    smoothScroll.polyfill();
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <footer className={classes.footer}>
      <Grid
        container
        style={{ height: "100%", padding: "0 1em" }}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.scrollUpItem}>
          <IconButton
            disableRipple
            disableTouchRipple
            onClick={scrollToTop}
            className={classes.iconButton}
          >
            <Grid item className={classes.circle}>
              <ArrowDropUpIcon className={classes.scrollUpIcon} />
            </Grid>
          </IconButton>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" className={classes.text} gutterBottom>
                "The moment you give up is the moment you let someone else win."
              </Typography>
              <Typography
                align="center"
                className={classes.text}
                style={{ textTransform: "uppercase" }}
              >
                Kobe Bryant
              </Typography>
            </Grid>
            <Grid item style={{ margin: "1.5em 0" }}>
              <SocialMedia
                size={[30, 23, 23]}
                color={theme.palette.primary.main}
              />
            </Grid>
            <Grid item>
              <Typography
                align="center"
                gutterBottom
                className={classes.copyright}
              >
                Developed by E. Hannah - Full Stack Developer
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
