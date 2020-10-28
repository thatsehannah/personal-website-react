import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { muses } from "./musesData";
import DesktopMuseCard from "./DesktopMuseCard/DesktopMuseCard";
import MobileMuseCard from "./MobileMuseCard/MobileMuseCard";

const Muses = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.musesSection}>
      <Grid item style={{ marginTop: "1em" }}>
        <Typography
          align="center"
          variant="h2"
          gutterBottom
          className={classes.title}
        >
          MUSES
        </Typography>
      </Grid>
      <Grid item style={{ marginBottom: "1em" }}>
        <Typography
          align="center"
          variant="subtitle1"
          gutterBottom
          className={classes.text}
        >
          These are a few things that I find inspiration in on the daily:
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justify="center" alignItems="center">
          {muses.map((muse) => (
            <Grid item key={muse.title}>
              {matchesSM ? (
                <MobileMuseCard muse={muse} />
              ) : (
                <DesktopMuseCard muse={muse} />
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Muses;
