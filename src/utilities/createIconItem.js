import React from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

export const createIconItem = (
  imgSrc,
  altText,
  link,
  imgClass,
  buttonClass
) => (
  <Grid
    item
    component={"a"}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <IconButton disableRipple disableTouchRipple className={buttonClass}>
      <img src={imgSrc} alt={altText} className={imgClass} />
    </IconButton>
  </Grid>
);
