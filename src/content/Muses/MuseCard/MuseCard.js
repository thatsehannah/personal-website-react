import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";
import { SiSoundcloud } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const MuseCard = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const { muse } = props;

  let iconItem = null;

  if (muse.title === "My Wife, Wilma") {
    iconItem = createSocialsIconItem(
      SiInstagram,
      "https://www.instagram.com/lavishbombs/",
      classes.icon,
      classes.button
    );
  }

  if (muse.title === "Music") {
    iconItem = createSocialsIconItem(
      SiSoundcloud,
      "https://soundcloud.com/thatsehannah/tracks",
      classes.icon,
      classes.button
    );
  }

  return (
    <Card
      variant={props.mode.modeName === "light" ? "outlined" : undefined}
      className={classes.museCard}
    >
      <CardMedia
        className={classes.museImage}
        component="img"
        classes={{
          root: classes.museImageResize,
        }}
        image={muse.pic.url}
        title={muse.pic.title}
      />
      <CardContent
        style={{ backgroundColor: theme.palette.common.base }}
        classes={{ root: classes.cardContent }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.museDescriptionContainer}
        >
          <Grid item>
            <Typography
              align="center"
              variant="h6"
              style={{
                color: props.mode.modeName === "dark" ? "#fff" : "inherit",
              }}
            >
              {muse.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="body2"
              className={classes.body}
              style={{
                color: props.mode.modeName === "dark" ? "#fff" : "inherit",
              }}
            >
              {muse.description}
            </Typography>
          </Grid>
          <Grid item>{iconItem ? iconItem : null}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MuseCard;
