import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
  const classes = useStyles(props);

  let isLightMode = props.mode.modeName === 'light';

  const toggleModeWrapper = () => {
    isLightMode = !isLightMode;
    props.toggler(isLightMode);
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
                <ListItem
                  button
                  onClick={() => {
                    setOpenMenu(false);
                    scroll.scrollToTop();
                  }}
                  component={Link}
                  spy={true}
                  smooth={true}
                  duration={1200}
                  delay={500}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Home
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => setOpenMenu(false)}
                  component={Link}
                  to="about"
                  value='about'
                  spy={true}
                  smooth={true}
                  duration={1200}
                  delay={300}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    About Me
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => setOpenMenu(false)}
                  component={Link}
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={1200}
                  delay={300}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Education & Skills
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => setOpenMenu(false)}
                  component={Link}
                  to="muses"
                  spy={true}
                  smooth={true}
                  duration={1200}
                  delay={300}
                >
                  <ListItemText disableTypography className={classes.listItem}>
                    Muses
                  </ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() => setOpenMenu(false)}
                  component={Link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1200}
                  delay={300}
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
