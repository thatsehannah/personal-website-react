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
  mainContainer: {
    marginTop: "-3rem",
  },
  landingBackground: {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "scroll",
    },
  },
  sectionContainer: {
    height: "100vh",
    width: "100vw",
  },
  avatar: {
    width: "18em",
    height: "18em",
    [theme.breakpoints.down("md")]: {
      width: "13em",
      height: "13em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "8em",
      height: "8em",
    },
  },
  superscript: {
    fontSize: "0.5em",
  },
  name: {
    fontSize: "8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
    },
    
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem",
    },
  },
  title: {
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const iconSize = matchesSM ? 34 : matchesMD ? 56 : 81;

  const background =
    props.mode.modeName === "light"
      ? landingBackgroundLight
      : landingBackgroundDark;

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid container className={classes.sectionContainer}>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.landingBackground}
          style={{ backgroundImage: `url(${background})` }}
        >
          <Grid item>
            <Avatar src={Me} className={classes.avatar} />
          </Grid>
          <Grid item style={{ marginTop: "1.5em" }}>
            <Typography variant="h2" className={classes.name} align="center">
              Elliot C. Hannah
              <sup className={classes.superscript}>III</sup>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.title}
              align="center"
            >
              - FULL STACK DEVELOPER -
            </Typography>
          </Grid>
          <SocialMedia color="#ffffff" size={iconSize} />
        </Grid>
      </Grid>

      <Grid container className={classes.sectionContainer}>
        <Grid item>
          <Typography variant="body1">What's good?</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(Home);
