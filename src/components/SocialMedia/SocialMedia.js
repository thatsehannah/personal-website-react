import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

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
          <img
            src={props.icons.githubIcon}
            alt="Github Icon"
            className={classes.icon}
          />
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
          <img
            src={props.icons.facebookIcon}
            alt="Facebook Icon"
            className={classes.icon}
          />
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
          <img
            src={props.icons.instagramIcon}
            alt="Instagram Icon"
            className={classes.icon}
          />
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
          <img
            src={props.icons.linkedinIcon}
            alt="Linked In Icon"
            className={classes.icon}
          />
        </IconButton>
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://cash.app/$thatsehannah/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.button}>
          <img
            src={props.icons.cashAppIcon}
            alt="Cash app Icon"
            className={classes.icon}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};



export default SocialMedia;
