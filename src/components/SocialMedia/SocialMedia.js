import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import { createIconItem } from "../../utilities/createIconItem";

const SocialMedia = (props) => {
  const classes = useStyles(props);

  return (
    <Grid item container className={classes.socialContainer} justify="center">
      {createIconItem(
        props.icons.githubIcon,
        "Github Icon",
        "https:///www.github.com/thatsehannah",
        classes.icon,
        classes.button
      )}
      {createIconItem(
        props.icons.facebookIcon,
        "Facebook Icon",
        "https:///wwww.facebook.com/ehannahiii",
        classes.icon,
        classes.button
      )}
      {createIconItem(
        props.icons.instagramIcon,
        "Instagram Icon",
        "https://www.instagram.com/thatsehannah/",
        classes.icon,
        classes.button
      )}
      {createIconItem(
        props.icons.linkedinIcon,
        "Linked In Icon",
        "https://www.linkedin.com/in/elliotchannahiii/",
        classes.icon,
        classes.button
      )}
      {createIconItem(
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
