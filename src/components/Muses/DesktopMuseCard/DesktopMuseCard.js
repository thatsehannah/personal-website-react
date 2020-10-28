import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";

const MuseCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { muse } = props;

  return (
    <Card className={classes.museCard}>
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
              className={classes.museText}
            >
              {muse.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align="center"
              variant="body2"
              className={classes.museText}
            >
              {muse.description}
            </Typography>
          </Grid>
          {muse.socialMedia ? (
            <Grid item>
              {createSocialsIconItem(
                muse.socialMedia.icon,
                muse.socialMedia.link,
                classes.icon,
                classes.button
              )}
            </Grid>
          ) : null}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MuseCard;
