import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import ehannah from "../../assets/images/avatar.jpeg";
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
            <Avatar src={ehannah} className={classes.avatar} />
          </Grid>
          <Grid item className={classes.name_statement}>
            <Typography variant="h1" align="center" className={classes.name}>
              Elliot C. Hannah III
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              className={classes.statement}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat ac tincidunt vitae semper quis lectus nulla at. Non arcu
              risus quis varius quam. Mattis pellentesque id nibh tortor id
              aliquet lectus.
            </Typography>
          </Grid>
          <Grid item>
            <SocialMedia size={[61, 35]} color={'#fff'}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
