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
import me from "../assets/Me.jpeg";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100vw",
    height: "100vh",
    backgroundImage: (props) =>
      `url(${
        props.mode.modeName === "light"
          ? landingBackgroundLight
          : landingBackgroundDark
      })`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "scroll",
      height: "auto",
    },
  },
}));

const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.section}
        ></Grid>
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
