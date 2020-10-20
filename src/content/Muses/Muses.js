import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import { muses } from "./musesData";
import MuseCard from "./MuseCard/MuseCard";

const Muses = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container direction="column" className={classes.musesSection}>
      <Grid item sm>
        <Typography align="center" variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
      <Grid item sm>
        <Grid container justify="center" alignItems="center">
          {muses.map((muse) => (
            <Grid item key={muse.title}>
              <MuseCard mode={props.mode} muse={muse} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Muses;
