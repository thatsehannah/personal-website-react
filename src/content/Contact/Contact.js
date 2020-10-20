import React from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

import { useStyles } from "./styles";

const Contact = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.contactSection}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h6" gutterBottom>
              Want to say hey? Send me a message via email or this form if you'd
              like to get in contact with me. I'd love to hear from you!{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  fullWidth={matchesSM}
                  className={classes.textField}
                  label="Name*"
                  InputLabelProps={{
                    classes: {
                      root: classes.inputLabel,
                      focused: "focused",
                      shrink: "shrink",
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.fieldset,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  variant="outlined"
                  id="name-field"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth={matchesSM}
                  className={classes.textField}
                  label="Email*"
                  InputLabelProps={{
                    classes: {
                      root: classes.inputLabel,
                      focused: "focused",
                      shrink: "shrink",
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.fieldset,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  variant="outlined"
                  id="email-field"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth={matchesSM}
                  className={classes.textField}
                  label="Phone"
                  InputLabelProps={{
                    classes: {
                      root: classes.inputLabel,
                      focused: "focused",
                      shrink: "shrink",
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.fieldset,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  variant="outlined"
                  id="phone-field"
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth={matchesSM}
                  className={classes.messageField}
                  label="Message*"
                  InputLabelProps={{
                    classes: {
                      root: classes.inputLabel,
                      focused: "focused",
                      shrink: "shrink",
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.fieldset,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  multiline
                  rows={16}
                  variant="outlined"
                  id="message-field"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
