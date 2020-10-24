import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";
import { SiSoundcloud } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const MobileMuseCard = (props) => {
  const classes = useStyles(props);
  const { muse } = props;
  const [openDialog, setOpenDialog] = useState(false);

  let iconItem = null;

  if (muse.title === "My Wife, Wilma") {
    iconItem = createSocialsIconItem(
      SiInstagram,
      "https://www.instagram.com/lavishbombs/",
      classes.icon,
      classes.iconButton
    );
  }

  if (muse.title === "Music") {
    iconItem = createSocialsIconItem(
      SiSoundcloud,
      "https://soundcloud.com/thatsehannah/tracks",
      classes.icon,
      classes.iconButton
    );
  }

  return (
    <>
      <Card
        variant={props.mode.modeName === "light" ? "outlined" : undefined}
        onClick={() => setOpenDialog(true)}
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
        onClose={() => setOpenDialog(false)}
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
            onClick={() => setOpenDialog(false)}
            className={classes.button}
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </DialogTitle>
        <Divider className={classes.dividers} />
        <DialogContent>
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
            <Grid item>{iconItem ? iconItem : null}</Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MobileMuseCard;
