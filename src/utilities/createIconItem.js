import React from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

export const createIconItem = (imgSrc, altText, link, className) => (
  <Grid
    item
    component={"a"}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <IconButton disableRipple disableTouchRipple>
      <img src={imgSrc} alt={altText} className={className} />
    </IconButton>
  </Grid>
);
