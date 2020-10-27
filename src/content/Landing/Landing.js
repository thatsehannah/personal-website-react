import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import ehannah from "../../assets/images/wedding.jpeg";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Landing = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
            <Avatar src={ehannah} classes={{img: classes.image}} className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              align="center"
              gutterBottom
              className={classes.name}
            >
              Elliot C. Hannah III
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              className={classes.statement}
            >
              Full Stack Developer <span className={classes.bulletPt}>•</span>{" "}
              Beat Maker <span className={classes.bulletPt}>•</span> Sneakerhead
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: !matchesSM ? "1em" : undefined }}>
            <SocialMedia size={[61, 23]} color={"#fff"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
