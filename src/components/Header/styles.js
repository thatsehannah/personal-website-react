import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0.5em",
    [theme.breakpoints.down("lg")]: {
      marginBottom: '0em'
    },
    
  },
  appBar: {
    backgroundColor: props => props.mode.modeName === 'light' ? "#f5f5ff" : theme.palette.common.base,
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.common.base,
    },
  },
  menuIcon: {
    fontSize: "2em",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
  toggleModeIcon: {
    fontSize: "1.5em",
    color: theme.palette.primary.main,
  },
  menu: {
    zIndex: 1305,
    background: "rgba(0,0,0,0.9)",
  },
  listItem: {
    color: "#fff",
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
