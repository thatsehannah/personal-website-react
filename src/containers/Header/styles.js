import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "-0.5em",
  },
  appBar: {
    height: "3.5em",
    backgroundColor: theme.palette.common.nav.appBar,
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  appBarIcon: {
    fontSize: "1.5em",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
  menu: {
    zIndex: 1305,
    background: "rgba(0,0,0,0.9)",
  },
  listItem: {
    color: "#fff",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
}));