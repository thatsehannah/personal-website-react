import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import SocialMedia from "../components/SocialMedia";

//import landingBackgroundImg from "../assets/Hollywood.jpg";
import landingBackgroundImg from "../assets/LA_Skyline.jpeg";
import Me from "../assets/Me.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "-3rem",
    padding: 0,
  },
  landingBackground: {
    backgroundImage: `url(${landingBackgroundImg})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    paddingTop: "3em",
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "scroll",
      paddingTop: "6em",
    },
  },
  sectionContainer: {
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.down("md")]: {},
  },
  avatar: {
    width: theme.spacing(60),
    height: theme.spacing(60),
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(23),
      height: theme.spacing(23),
    },
  },
  superscript: {
    fontSize: "0.5em",
  },
  name: {
    fontSize: "8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.2rem",
    },
  },
  title: {
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.25rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid container className={classes.sectionContainer}>
        <Grid
          item
          container
          direction="column"
          justify={matchesMD ? undefined : "center"}
          alignItems="center"
          className={classes.landingBackground}
        >
          <Grid item>
            <Avatar src={Me} className={classes.avatar} />
          </Grid>
          <Grid item style={{ marginTop: "1.5em" }}>
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
          <SocialMedia size="90" />
        </Grid>
      </Grid>

      <Grid container className={classes.sectionContainer}>
        <Grid item>
          <Typography variant="body1">What's good?</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
