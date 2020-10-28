import React from "react";

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
        <Landing />
      </Grid>
      <Grid item id="about">
        <About />
      </Grid>
      <Grid item id="education">
        <EducationSkills />
      </Grid>
      <Grid item id="muses">
        <Muses />
      </Grid>
      <Grid item id="contact">
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Home;
