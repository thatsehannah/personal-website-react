import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

import { useStyles } from "./styles";
import MobileAbout from "./MobileAbout/MobileAbout";
import DesktopAbout from "./DesktopAbout/DesktopAbout";
import aboutAvatar from "../../assets/images/avatar.jpeg";

const About = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const aboutMeContent = (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{
        padding: matchesMD ? 0 : "0 2em",
        margin: matchesMD ? 0 : "2em 0",
      }}
    >
      <Hidden smDown>
        <Grid item>
          <Avatar
            className={classes.avatar}
            variant="rounded"
            src={aboutAvatar}
          />
        </Grid>
      </Hidden>
      <Grid item>
        <Grid container direction="column" className={classes.textColumn}>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h5" gutterBottom className={classes.title}>
                  About Me
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.aboutMeText}
                >
                  Born and raised in Augusta, GA, I was the only child to
                  Cristal and Elliot Hannah Jr. I've always had an affinity for
                  computers since I was about 11 years old. I enjoyed playing
                  computer games, learning new information, setting up new
                  software for my parents, customizing my MySpace page, and I
                  could type really fast. Seeing how fascinated I was with
                  computers definitely made me want to pursue a career working
                  with them, so here I am today!
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.aboutMeText}
                >
                  I attended Georgia State University for my Bachelor's and
                  after graduating, I went straight into my Master's program at
                  Kennesaw State Unviersity. During my first semester, I decided
                  to attend a coding bootcamp in Reston, VA for 3 months to
                  enhance my coding skills. This led me to relocate to
                  Bentonville, AR where I first got a taste of being a full
                  stack developer. After a brief stint in Bentonville, I was
                  relocated to Los Angeles for a different project, and I've
                  been here ever since (and I love it here, by the way!).
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.aboutMeText}
                >
                  In my spare time, you can catch me doing a variety of
                  activities, such as making beats, playing NBA2K with my
                  friends, attending Dodgers or Lakers games (prior to
                  COVID-19), or exploring the city with my fiancée and pup Coco.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "1.5em" }}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h5" gutterBottom className={classes.title}>
                  Contact Info
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.text}
                >
                  Elliot C. Hannah III
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.text}
                >
                  Los Angeles, California 90028
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  component={"a"}
                  href="mailto:elliotchannah@outlook.com"
                  target="_blank"
                  className={classes.email}
                >
                  elliotchannah@outlook.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify={matchesSM ? "center" : undefined}>
              <Button
                variant="contained"
                className={classes.button}
                component={"a"}
                rel="noopener noreferrer"
                target="_blank"
                href="https://pdfhost.io/v/Ybgc1~k8P_ElliotCHannahResume.pdf"
              >
                <GetAppIcon />
                <span style={{ marginLeft: "0.5em" }}>Download My Résumé</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  let aboutMe = null;

  if (matchesSM) {
    aboutMe = <MobileAbout>{aboutMeContent}</MobileAbout>;
  } else {
    aboutMe = <DesktopAbout mode={props.mode}>{aboutMeContent}</DesktopAbout>;
  }

  return (
    <Grid container justify="center" className={classes.aboutSection}>
      <Grid item>{aboutMe}</Grid>
    </Grid>
  );
};

export default About;
