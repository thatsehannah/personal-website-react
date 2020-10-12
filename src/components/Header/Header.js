import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

import { useStyles } from "./styles";
import logo from "../../assets/images/sampleLogo.svg";
import * as actionTypes from "../../redux/actions";

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
              <Grid item>
                <img
                  src={logo}
                  style={{ width: "4em", height: "4em" }}
                  alt="EH logo"
                />
              </Grid>
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
