import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";
import InstagramLight from "../../../assets/icons/light/instagram.svg";
import InstagramDark from "../../../assets/icons/dark/instagram.svg";
import SoundcloudLight from "../../../assets/icons/light/soundcloud.svg";
import SoundcloudDark from "../../../assets/icons/dark/soundcloud.svg";

const MobileMuseCard = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const { muse } = props;
  const [openDialog, setOpenDialog] = useState(false);
};
