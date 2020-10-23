import React from "react";
import { SiGithub } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiCashapp } from "react-icons/si";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../utilities/createSocialsIconItem";

const SocialMedia = (props) => {
  const classes = useStyles(props);

  return (
    <Grid item container className={classes.socialContainer} justify="center">
      {createSocialsIconItem(
        SiGithub,
        "Github Icon",
        "https:///www.github.com/thatsehannah",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiFacebook,
        "Facebook Icon",
        "https:///wwww.facebook.com/ehannahiii",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiInstagram,
        "Instagram Icon",
        "https://www.instagram.com/thatsehannah/",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiLinkedin,
        "Linked In Icon",
        "https://www.linkedin.com/in/elliotchannahiii/",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiCashapp,
        "Cash App Icon",
        "https://cash.app/$thatsehannah/",
        classes.icon,
        classes.button
      )}
    </Grid>
  );
};

export default SocialMedia;
