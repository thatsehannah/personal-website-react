import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  makeStyles,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import SocialMedia from "../components/SocialMedia";

import landingBackgroundLight from "../assets/DT_Skyline1.jpg";
import landingBackgroundDark from "../assets/LA_Skyline.jpeg";
import Me from "../assets/Me.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {},
  profile: {
    width: "80%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
    },
  },
  sectionContainer: {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "scroll",
      height: "auto",
    },
  },
  avatar: {
    width: "20em",
    height: "20em",
  },
  superscript: {
    fontSize: "0.5em",
  },
  name: {
    fontSize: "8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  title: {
    fontSize: "4rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const iconSize = matchesXS
    ? "1.5em"
    : matchesSM
    ? "2.5em"
    : matchesMD
    ? "3em"
    : "4em";

  const background =
    props.mode.modeName === "light"
      ? landingBackgroundLight
      : landingBackgroundDark;

  return (
    <Grid container className={classes.mainContainer} direction="column"></Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(Home);
