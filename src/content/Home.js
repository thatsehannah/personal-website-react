import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import SocialMedia from "../components/SocialMedia";

import landingBackgroundImg from "../assets/Miami_Sunset.jpg";
import Me from "../assets/Me.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '-1.2rem',
    padding: 0
  },
  landingBackground: {
    backgroundImage: `url(${landingBackgroundImg})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    paddingTop: "5em",
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  superscript: {
    fontSize: '0.5em'
  }
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.landingBackground}
      >
        <Grid item>
          <Avatar src={Me} className={classes.avatar} />
        </Grid>
        <Grid item>
          <Typography variant="h2" align="center">
            Elliot C. Hannah
            <sup className={classes.superscript}>III</sup>
          </Typography>
          <Typography variant="subtitle1" align="center">
            - FULL STACK DEVELOPER -
          </Typography>
        </Grid>
        <SocialMedia size='90' />
      </Grid>
      <Grid container>
        <Grid item>
          <Typography variant="body1">What's good?</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
