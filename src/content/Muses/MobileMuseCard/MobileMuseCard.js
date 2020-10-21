import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";
import InstagramLight from "../../../assets/icons/light/instagram.svg";
import InstagramDark from "../../../assets/icons/dark/instagram.svg";
import SoundcloudLight from "../../../assets/icons/light/soundcloud.svg";
import SoundcloudDark from "../../../assets/icons/dark/soundcloud.svg";

const MobileMuseCard = (props) => {
  const classes = useStyles(props);
  // const theme = useTheme();
  const { muse } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  let iconItem = null;

  if (muse.title === "My Wife, Wilma") {
    if (props.mode.modeName === "light") {
      iconItem = createSocialsIconItem(
        InstagramLight,
        "Wilma's Instagram",
        "https://www.instagram.com/lavishbombs/",
        classes.icon
      );
    } else {
      iconItem = createSocialsIconItem(
        InstagramDark,
        "Wilma's Instagram",
        "https://www.instagram.com/lavishbombs/",
        classes.icon
      );
    }
  }

  if (muse.title === "Music") {
    if (props.mode.modeName === "light") {
      iconItem = createSocialsIconItem(
        SoundcloudLight,
        "My Soundcloud",
        "https://soundcloud.com/thatsehannah/tracks",
        classes.icon
      );
    } else {
      iconItem = createSocialsIconItem(
        SoundcloudDark,
        "My Soundcloud",
        "https://soundcloud.com/thatsehannah/tracks",
        classes.icon
      );
    }
  }

  return (
    <>
      <Card
        variant="outlined"
        onClick={handleOpenDialog}
        className={classes.museCard}
      >
        <CardMedia
          className={classes.museImage}
          component={"img"}
          classes={{
            root: classes.museImageResize,
          }}
          image={muse.pic.url}
          title={muse.pic.title}
        />
      </Card>
      <Dialog
        open={openDialog}
        disableBackdropClick
        onClose={handleCloseDialog}
        PaperProps={{ classes: { root: classes.paper } }}
      >
        <DialogTitle disableTypography>
          <Typography
            variant="h6"
            style={{
              color: props.mode.modeName === "dark" ? "#fff" : "inherit",
            }}
          >
            {muse.title}
          </Typography>
          <IconButton
            disableRipple
            disableTouchRipple
            onClick={handleCloseDialog}
            className={classes.button}
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers classes={{ dividers: classes.dividers }}>
          <Grid container direction="column" alignItems="center">
            <Grid item style={{ width: "90%" }}>
              <Typography
                variant="body2"
                align="center"
                gutterBottom
                style={{
                  color: props.mode.modeName === "dark" ? "#fff" : "inherit",
                }}
              >
                {muse.description}
              </Typography>
            </Grid>
            {iconItem ? iconItem : null}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MobileMuseCard;
