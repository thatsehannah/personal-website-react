import React from "react";

import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../utilities/createSocialsIconItem";

const SocialMedia = (props) => {
  const classes = useStyles(props);

  return (
    <Grid item container className={classes.socialContainer} justify="center">
      {createSocialsIconItem(
        props.icons.githubIcon,
        "Github Icon",
        "https:///www.github.com/thatsehannah",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        props.icons.facebookIcon,
        "Facebook Icon",
        "https:///wwww.facebook.com/ehannahiii",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        props.icons.instagramIcon,
        "Instagram Icon",
        "https://www.instagram.com/thatsehannah/",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        props.icons.linkedinIcon,
        "Linked In Icon",
        "https://www.linkedin.com/in/elliotchannahiii/",
        classes.icon,
        classes.button
      )}
      {createSocialsIconItem(
        props.icons.cashAppIcon,
        "Cash App Icon",
        "https://cash.app/$thatsehannah/",
        classes.icon,
        classes.button
      )}
    </Grid>
  );
};

export default SocialMedia;
