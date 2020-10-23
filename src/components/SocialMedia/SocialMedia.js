import React from "react";
import { SiGithub } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiCashapp } from "react-icons/si";

import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../utilities/createSocialsIconItem";

const SocialMedia = (props) => {
  const classes = useStyles(props);

  return (
    <Grid item container className={classes.socialContainer} justify="center">
      {createSocialsIconItem(
        SiGithub,
        "https:///www.github.com/thatsehannah",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiFacebook,
        "https:///wwww.facebook.com/ehannahiii",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiInstagram,
        "https://www.instagram.com/thatsehannah/",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiLinkedin,
        "https://www.linkedin.com/in/elliotchannahiii/",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        SiCashapp,
        "https://cash.app/$thatsehannah/",
        classes.icon,
        classes.button
      )}
    </Grid>
  );
};

export default SocialMedia;
