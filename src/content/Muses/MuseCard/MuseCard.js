import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";

const MuseCard = (props) => {
  const classes = useStyles(props);
  const muse = props.muse;
  const theme = useTheme();

  let actionArea = null;

  if (muse.title === "Music") {
    actionArea = (
      <CardActions>
        <Button size="large" className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    );
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
          <Grid item >
            {actionArea}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MuseCard;