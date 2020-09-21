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
    width: "auto",
    height: "auto",
    padding: "0.5em",
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
    marginTop: "1em",
    marginBottom: "0.5em",
    [theme.breakpoints.down("md")]: {
      width: "15em",
      height: "15em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "12em",
      height: "12em",
    },
    [theme.breakpoints.down("xs")]: {
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
    <Grid container className={classes.mainContainer} direction="column">
      <Grid
        item
        container
        className={classes.sectionContainer}
        style={{
          backgroundImage: `url(${background})`,
        }}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.profile}
        >
          <Grid item sm>
            <Avatar src={Me} className={classes.avatar} />
          </Grid>
          <Grid item sm>
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
          <Grid item sm style={{ marginBottom: "4em" }}>
            <SocialMedia color="#ffffff" size={iconSize} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.sectionContainer}>
        <Grid container>
          <Grid item>
            <Typography variant="body1">What's good?</Typography>
          </Grid>
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
