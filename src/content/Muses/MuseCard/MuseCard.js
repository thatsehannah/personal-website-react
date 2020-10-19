import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { useTheme } from "@material-ui/core/styles";

import classes from "./MuseCard.module.css";

const MuseCard = (props) => {
  const muse = props.muse;
  const theme = useTheme();

  let actionArea = null;

  if (muse.title === "Music") {
    actionArea = (
      <CardActions>
        <Button size="large" color="primary">
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
        className={classes.museDescription}
        style={{ backgroundColor: theme.palette.common.base }}
      >
        <Typography
          align="center"
          variant="h6"
          style={{
            color: props.mode.modeName === "dark" ? "#fff" : "inherit",
          }}
        >
          {muse.title}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          style={{
            color: props.mode.modeName === "dark" ? "#fff" : "inherit",
          }}
        >
          {muse.description}
        </Typography>
        {actionArea}
      </CardContent>
    </Card>
  );
};

export default MuseCard;
