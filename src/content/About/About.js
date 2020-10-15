import React from "react";
import { connect } from "react-redux";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

import { useStyles } from "./styles";
import MobileAbout from "./MobileAbout/MoibleAbout";
import DesktopAbout from "./DesktopAbout/DesktopAbout";
import Me from "../../assets/images/Me.jpeg";

const About = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const aboutMeContent = (
    <Grid
      container
      alignItems="center"
      style={{
        padding: matchesMD ? 0 : "0 2em",
        margin: matchesMD ? 0 : "2em 0",
      }}
    >
      <Hidden smDown>
        <Grid item>
          <Avatar className={classes.avatar} variant="rounded" src={Me} />
        </Grid>
      </Hidden>
      <Grid item>
        <Grid container direction="column" className={classes.about}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.text}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.text}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
            <br />
            <Typography
              variant="h4"
              gutterBottom
              className={classes.text}
            >
              Contact Info
            </Typography>
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
          <Grid
            item
            style={{
              textDecoration: "none",
            }}
            component={"a"}
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Grid
              container
              alignItems="center"
              justify="center"
              style={{ marginTop: "3em" }}
            >
              <Button variant="contained" className={classes.button}>
                <GetAppIcon />
                <span style={{ marginLeft: "0.5em" }}>Download My Résumé</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  if (matchesXS) {
    return <MobileAbout>{aboutMeContent}</MobileAbout>;
  } else {
    return <DesktopAbout mode={props.mode}>{aboutMeContent}</DesktopAbout>;
  }
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(About);
