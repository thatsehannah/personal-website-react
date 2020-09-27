import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {
  AppBar,
  Toolbar,
  Backdrop,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  makeStyles,
} from "@material-ui/core";

import * as actionTypes from "../redux/actions";
import LightModeIcon from "@material-ui/icons/Brightness4";
import DarkModeIcon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";

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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,

  },
  appBar: {
    backgroundColor: theme.palette.common.base,
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.common.base,
    },
  },
  menuIcon: {
    fontSize: "2em",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
  toggleModeIcon: {
    fontSize: "1.2em",
    color: theme.palette.secondary.main,
  },
  menu: {
    zIndex: 1305,
    background: "rgba(0,0,0,0.9)",
  },
  listItem: {
    color: "#ffffff",
    fontSize: "50rem",
  },
}));

let isLightMode = true;

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles(props);

  const toggleModeWrapper = () => {
    isLightMode = !isLightMode;
    props.toggleModeHandler(isLightMode);
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
                  onClick={() => setOpenMenu(!openMenu)}
                  disableRipple
                >
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
              </Grid>
              <Grid item>{/*----Logo will go here-----*/}</Grid>
              <Grid item>
                <IconButton
                  onClick={toggleModeWrapper}
                  disableRipple
                  className={classes.button}
                >
                  {isLightMode ? (
                    <LightModeIcon className={classes.toggleModeIcon} />
                  ) : (
                    <DarkModeIcon className={classes.toggleModeIcon} />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* <Backdrop
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
                <ListItem button component={Link} to="/">
                  <ListItemText className={classes.listItem}>Home</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/about">
                  <ListItemText className={classes.listItem}>
                    About Me
                  </ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/muses">
                  <ListItemText className={classes.listItem}>
                    Muses
                  </ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemText className={classes.listItem}>
                    Contact Me
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Backdrop> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModeHandler: (isLightMode) =>
      dispatch({
        type: actionTypes.TOGGLE_MODE,
        payload: { isLight: isLightMode },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
