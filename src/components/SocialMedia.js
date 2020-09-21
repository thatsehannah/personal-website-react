import React from "react";
import { Grid, makeStyles, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  socialContainer: {
    right: "1.5em",
  },
  button: {
    marginRight: "0.5em",
    marginLeft: "0.5em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      marginLeft: "0.2em",
    },
  },
  icon: {
    fontSize: (props) => props.size,
    color: (props) => props.color,
  },
}));

const SocialMedia = (props) => {
  const classes = useStyles(props);

  return (
    <Grid item container className={classes.socialContainer} justify="center">
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
