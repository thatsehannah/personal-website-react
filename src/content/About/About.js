import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';

import { useStyles } from "./styles";
import Me from "../../assets/images/Me.jpeg";

const About = (props) => {
  const classes = useStyles(props);
  return (
    <Paper className={classes.paper} variant="elevation">
      <Grid container justify='center' alignItems='flex-end'>
        <Grid item>
          <Grid container alignItems='center'>
            <Grid item>
              <Avatar className={classes.avatar} variant="rounded" src={Me} />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" className={classes.divider} />
            </Grid>
            <Grid item>
              <Grid container direction="column" className={classes.about}>
                <Grid item>
                  <Typography variant="h4" gutterBottom>
                    About Me
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" justify="center">
                    <Button color="primary" variant="contained">
                      <GetAppIcon />
                      <span style={{marginLeft: '0.5em'}}>Download My Resume</span>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
