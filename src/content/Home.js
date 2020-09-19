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
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: 'scroll'
    },
  },
  sectionContainer: {
    height: "100vh",
    width: "100vw",
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(35),
      height: theme.spacing(35),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(24),
      height: theme.spacing(24)
    }
  },
  superscript: {
    fontSize: "0.5em",
  },
  name: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: ''
    }
  }
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  //const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


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
        <Grid item style={{marginTop: '1.5em'}}>
          <Typography
            variant="h2"
            style={{ fontSize: matchesXS ? '2rem' : '5.5rem' }}
            align="center"
          >
            Elliot C. Hannah
            <sup className={classes.superscript}>III</sup>
          </Typography>
          <Typography variant="subtitle1" style={{ fontSize: matchesXS ? '1rem' : '2.5rem' }} align="center">
            - FULL STACK DEVELOPER -
          </Typography>
        </Grid>
        <SocialMedia size="90" />
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
