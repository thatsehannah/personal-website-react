import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  museCard: {
    height: "20em",
    width: "20em",
    margin: theme.spacing(1, 1),
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      height: "15em",
      width: "15em",
    },
  },
  paper: {
    backgroundColor: (props) =>
      props.mode.modeName === "light" ? "#fff" : theme.palette.secondary.dark,
  },
  dividers: {
    backgroundColor: (props) =>
      props.mode.modeName === "light" ? "#888888" : "#fff",
  },
  button: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
  },
  museImage: {
    height: "100%",
  },
  museImageResize: {
    objectFit: "cover",
    objectPosition: "50% 5%",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    height: "1.5em",
    width: "1.5em",
    color: theme.palette.primary.main,
  },
  description: {
    color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
    fontSize: "1.1em",
  },
  title: {
    color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
    
  },
  dialogContent: {
    padding: 0,
  },
}));
