import React from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { useStyles } from "./styles";

const Contact = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container justify="center" className={classes.contactSection}>
      <Grid
        item
        xl={5}
        lg={5}
        style={{ marginTop: matchesSM ? "1.5em" : "2.5em" }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ width: matchesSM ? "100%" : "auto" }}
        >
          <Grid item style={{ width: "90%" }}>
            <Typography
              align="center"
              variant="h6"
              gutterBottom
              className={classes.statement}
            >
              Want to say hey? Send me a message via email or this form if you'd
              like to get in contact with me. I'd love to hear from you!{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Grid item container style={{ marginTop: "1.3em" }}>
              <Grid item>
                <MailOutlineIcon className={classes.mailIcon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  component={"a"}
                  href="mailto:elliotchannah@outlook.com"
                  target="_blank"
                  className={classes.email}
                >
                  elliotchannah@outlook.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ width: "90%" }}>
            <Grid
              container
              style={{ width: "100%", marginTop: "2em" }}
              direction="column"
              alignItems="center"
            >
              <Grid container item justify="center">
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
              <Grid container item justify="center">
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
              <Grid container item justify="center">
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
              <Grid
                container
                item
                style={{ marginTop: "2.6em" }}
                justify="center"
              >
                <TextField
                  fullWidth={matchesSM}
                  className={classes.textField}
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
                  rows={12}
                  variant="outlined"
                  id="message-field"
                />
              </Grid>
              <Grid
                item
                container
                justify="center"
                style={{ marginBottom: "2em" }}
              >
                <Button variant="contained" className={classes.button}>
                  <span style={{ marginRight: "0.5em" }}>Send Message</span>
                  <SendIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xl={7} lg={7}>
          <Grid container className={classes.contactBg} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Contact;
