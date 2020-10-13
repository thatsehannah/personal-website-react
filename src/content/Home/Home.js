import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import ehannah from "../../assets/images/avatar.jpeg";
import { whiteIcons } from "../../components/SocialMedia/icons";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          id="landing"
          container
          justify="center"
          alignItems="center"
          className={[classes.section, classes.landingSection].join(" ")}
        >
          <Grid item>
            <Grid
              container
              alignItems="center"
              justify={matchesSM ? undefined : "center"}
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
                  ELLIOT C. HANNAH III
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
      <Grid item>
        <Grid
          id="about"
          container
          justify="center"
          alignItems="center"
          className={classes.section}
        >
          More about Me
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          id="education"
          container
          justify="center"
          alignItems="center"
          className={classes.section}
        >
          Education & Skills
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          id="muses"
          container
          justify="center"
          alignItems="center"
          className={classes.section}
        >
          Muses
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          id="contact"
          container
          justify="center"
          alignItems="center"
          className={classes.section}
        >
          Contact Me
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
