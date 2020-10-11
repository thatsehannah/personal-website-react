import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import { useStyles } from "./styles";

const SocialMedia = (props) => {
  const classes = useStyles(props);

  return (
    <Grid item container className={classes.socialContainer} justify="center">
      <Grid
        item
        component={"a"}
        href="https:///www.github.com/thatsehannah"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.button}>
          <GitHubIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid
        item
        component={"a"}
        href="https:///wwww.facebook.com/ehannahiii"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.button}>
          <FacebookIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.instagram.com/thatsehannah/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.button}>
          <InstagramIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.linkedin.com/in/elliotchannahiii/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.button}>
          <LinkedInIcon className={classes.icon} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
