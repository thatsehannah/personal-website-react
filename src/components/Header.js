import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em",
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
    fontSize: 50,
    marginLeft: "auto",
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <IconButton
            className={classes.button}
            onClick={() => setOpenMenu(!openMenu)}
            disableRipple
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          {/*----Logo will go here-----*/}
          {/*----Toggle Mode button will go here-----*/}
          <IconButton
            onClick={toggleModeWrapper}
            disableRipple
            className={classes.button}
          >
            {isLightMode ? (
              <LightModeIcon className={classes.menuIcon} />
            ) : (
              <DarkModeIcon className={classes.menuIcon} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

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
      </Backdrop>
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
