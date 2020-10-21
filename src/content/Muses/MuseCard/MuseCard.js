import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import InstagramLight from "../../../assets/icons/light/instagram.svg";
import InstagramDark from "../../../assets/icons/dark/instagram.svg";
import SoundcloudLight from "../../../assets/icons/light/soundcloud.svg";
import SoundcloudDark from "../../../assets/icons/dark/soundcloud.svg";

const MuseCard = (props) => {
  const classes = useStyles(props);
  const muse = props.muse;
  const theme = useTheme();

  let iconItem = null;

  const createIconItem = (imgSrc, altText, link) => (
    <Grid
      item
      component={"a"}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconButton disableRipple disableTouchRipple>
        <img src={imgSrc} alt={altText} className={classes.icon} />
      </IconButton>
    </Grid>
  );

  if (props.mode.modeName === "light") {
    switch (muse.title) {
      case "My Wife, Wilma":
        iconItem = createIconItem(
          InstagramLight,
          "Wilma's Instagram",
          "https://www.instagram.com/lavishbombs/"
        );
        break;
      case "Music":
        iconItem = createIconItem(
          SoundcloudLight,
          "My Soundcloud",
          "https://soundcloud.com/thatsehannah/tracks"
        );
        break;
      default:
    }
  } else {
    switch (muse.title) {
      case "My Wife, Wilma":
        iconItem = createIconItem(
          InstagramDark,
          "Wilma's Instagram",
          "https://www.instagram.com/lavishbombs/"
        );
        break;
      case "Music":
        iconItem = createIconItem(
          SoundcloudDark,
          "My Soundcloud",
          "https://soundcloud.com/thatsehannah/tracks"
        );
        break;
      default:
    }
  }

  return (
    <Card variant="outlined" className={classes.museCard}>
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
          {iconItem ? iconItem : null}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MuseCard;
