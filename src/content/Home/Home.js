import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import ehannah from "../../assets/images/avatar.jpeg";
import { whiteIcons } from "../../components/SocialMedia/icons";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import About from "../About/About";
import EducationSkills from "../EducationSkills/EducationSkills";
import Muses from "../Muses/Muses";
import Contact from "../Contact/Contact";

const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item id="landing">
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.landingSection}
        >
          <Grid item>
            <Grid
              container
              alignItems="center"
              justify={matchesSM ? "center" : undefined}
              direction="column"
              className={classes.intro}
            >
              <Grid item>
                <Avatar src={ehannah} className={classes.avatar} />
              </Grid>
              <Grid item className={classes.name_statement}>
                <Typography
                  variant="h1"
                  align="center"
                  className={classes.name}
                >
                  Elliot C. Hannah III
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  gutterBottom
                  className={classes.statement}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Volutpat ac tincidunt vitae semper quis lectus nulla at. Non
                  arcu risus quis varius quam. Mattis pellentesque id nibh
                  tortor id aliquet lectus.
                </Typography>
              </Grid>
              <Grid item>
                <SocialMedia size={[45, 35]} icons={whiteIcons} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
