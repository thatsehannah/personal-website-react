import React, { useState } from "react";
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
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  menuIcon: {
    color: "#ffffff",
  },
  menu: {
    zIndex: 1305
  }
}));

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {openMenu ? null : (
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <IconButton
              className={classes.menuIcon}
              onClick={() => setOpenMenu(!openMenu)}
              disableRipple
            >
              <MenuIcon />
            </IconButton>
            <IconButton>
              <SportsBasketballIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <div className={classes.toolbarMargin} />

      <Backdrop open={openMenu} className={classes.menu} onClick={() => setOpenMenu(false)}>
        <Grid container direction="row" style={{ height: "100%" }}>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <SportsBasketballIcon />
            </Grid>
            <Grid item>
              <List disablePadding>
                <ListItem button>
                  <ListItemText style={{ color: "white", fontSize: "50rem" }}>
                    Home
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText style={{ color: "white", fontSize: "5rem" }}>
                    About Me
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText style={{ color: "white", fontSize: "5rem" }}>
                    Muses
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText style={{ color: "white", fontSize: "5rem" }}>
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
