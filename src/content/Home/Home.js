import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";

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
