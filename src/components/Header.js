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
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  menuIcon: {
    color: theme.palette.common.pink,
  },
  logoIcon: {
    color: "#ffffff",
    fontSize: "8rem",
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

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();

  return (
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

export default Header;
