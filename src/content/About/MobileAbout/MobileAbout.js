import React from "react";

import Grid from "@material-ui/core/Grid";



const MobileAbout = (props) => {
  

  return (
    <Grid container direction="column" alignItems="center" style={{marginTop: '2em', padding: '1em'}}>
      {props.children}
    </Grid>
  );
};

export default MobileAbout;
