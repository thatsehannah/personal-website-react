import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import MuseCard from "./MuseCard/MuseCard";
import wife from "../../assets/images/wife.jpeg";
import dtla from "../../assets/images/dtla.jpg";
import fam from "../../assets/images/fam.jpeg";
import kobemjbron from "../../assets/images/kobemjbron.jpg";
import music from "../../assets/images/music.jpeg";
import nip from "../../assets/images/nip.jpeg";

const Muses = (props) => {
  const classes = useStyles(props);

  const muses = [
    {
      title: "My Wife, Wilma",
      pic: { url: wife, title: "My wife Wilma" },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Family",
      pic: { url: fam, title: "My parents" },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "I ♥️ LA",
      pic: { url: dtla, title: "DTLA" },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Nipsey Hussle",
      pic: { url: nip, title: "Nipsey Hussle" },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Music",
      pic: { url: music, title: "Me holding a keyboard" },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Basketball",
      pic: { url: kobemjbron, title: "Kobe, Mike, Bron" },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Grid container direction="column" className={classes.musesSection}>
      <Grid item>
        <Typography align="center" variant="h3" gutterBottom>
          My Muses
        </Typography>
        <Typography align="center" variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Grid>
      <Grid item>
        <Grid container justify="center" alignItems="center" spacing={8}>
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
