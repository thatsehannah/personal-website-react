import React from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    right: "1.5em",
  },
  icon: {
    color: "#ffffff",
    marginRight: '0.5em',
    marginLeft: '0.5em'
  },
}));

const SocialMedia = (props) => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.socialContainer}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        component={"a"}
        href="https:///wwww.facebook.com/ehannahiii"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.icon}>
          <FacebookIcon color={props.color} style={{ fontSize: props.size }} />
        </IconButton>
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.instagram.com/thatsehannah/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton  className={classes.icon}>
          <InstagramIcon color={props.color} style={{ fontSize: props.size }} />
        </IconButton>
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.linkedin.com/in/elliotchannahiii/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.icon}>
          <LinkedInIcon color={props.color} style={{ fontSize: props.size }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
