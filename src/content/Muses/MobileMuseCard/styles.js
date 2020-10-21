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
  divider: {
    backgroundColor: (props) =>
      props.mode.modeName === "light" ? "inherit" : "#fff",
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
  icon: {
    height: "2em",
    width: "2em",
  },
}));
