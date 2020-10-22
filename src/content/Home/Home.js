import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import Landing from "../Landing/Landing";
import About from "../About/About";
import EducationSkills from "../EducationSkills/EducationSkills";
import Muses from "../Muses/Muses";
import Contact from "../Contact/Contact";

const Home = (props) => {
  return (
    <Grid container direction="column">
      <Grid item id="landing">
        <Landing mode={props.mode} />
      </Grid>
      <Grid item id="about">
        <About mode={props.mode} />
      </Grid>
      <Grid item id="education">
        <EducationSkills mode={props.mode} />
      </Grid>
      <Grid item id="muses">
        <Muses mode={props.mode} />
      </Grid>
      <Grid item id="contact">
        <Contact mode={props.mode} />
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
