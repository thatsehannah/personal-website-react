import React, { useState } from "react";
import smoothScroll from "smoothscroll-polyfill";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Backdrop from "@material-ui/core/Backdrop";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import LightModeIcon from "@material-ui/icons/Brightness4";
import DarkModeIcon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import {useTheme} from '@material-ui/core/styles'

import { useStyles } from "./styles";

const ElevationScroll = (props) => {
  
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const classes = useStyles();

  const toggleModeHandler = () => {
    props.toggler(theme.palette.type);
  };

  const scrollIntoView = (id) => {
    smoothScroll.polyfill();
    const yOffset = -56;
    const element = document.querySelector(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300);
  };

  const scrollToTop = () => {
    smoothScroll.polyfill();
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item>
                <IconButton
                  className={classes.button}
                  onClick={() => setOpenMenu(true)}
                  disableRipple
                  disableTouchRipple
                >
                  <MenuIcon className={classes.appBarIcon} />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  onClick={toggleModeHandler}
                  disableRipple
                  disableTouchRipple
                  className={classes.button}
                >
                  {props.theme === "light" ? (
                    <LightModeIcon className={classes.appBarIcon} />
                  ) : (
                    <DarkModeIcon className={classes.appBarIcon} />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Backdrop
        open={openMenu}
        className={classes.menu}
        onClick={() => setOpenMenu(false)}
      >
        <Grid container direction="row" style={{ height: "100%" }}>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <List disablePadding>
                <ListItem
                  button
                  onClick={() => {
                    setOpenMenu(false);
                    scrollToTop();
                  }}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Home
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpenMenu(false);
                    scrollIntoView("#about");
                  }}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    About Me
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpenMenu(false);
                    scrollIntoView("#education");
                  }}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Education & Skills
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpenMenu(false);
                    scrollIntoView("#muses");
                  }}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Muses
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setOpenMenu(false);
                    scrollIntoView("#contact");
                  }}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Contact Me
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Backdrop>
    </>
  );
};

export default Header;
