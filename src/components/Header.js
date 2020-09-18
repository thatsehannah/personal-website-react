import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Backdrop,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";

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
    marginBottom: '3em'
  },
  menuIcon: {
    color: "#ffffff",
  },
  logoIcon: {
    color: "#ffffff",
    fontSize: "8rem",
  },
  menu: {
    zIndex: 1305,
    background: "rgba(0,0,0,0.8)",
  },
  listItem: {
    color: "#ffffff",
    fontSize: "50rem",
  },
}));

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {openMenu ? null : (
        <>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <IconButton
                className={classes.menuIcon}
                onClick={() => setOpenMenu(!openMenu)}
                disableRipple
              >
                <MenuIcon />
              </IconButton>
              {/*----Logo will go here-----*/}
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </>
      )}

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
              <SportsBasketballIcon className={classes.logoIcon} />
            </Grid>
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

export default Header;
