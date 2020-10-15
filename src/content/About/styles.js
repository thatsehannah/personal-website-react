import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  about: {
    width: "40em",

    [theme.breakpoints.down("md")]: {
      width: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "21.5em",
    },
  },
  avatar: {
    height: "15em",
    width: "15em",
    marginRight: "4em",
    marginTop: "-2em",
    [theme.breakpoints.down("md")]: {
      height: "11em",
      width: "11em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "9em",
      width: "9em",
      marginRight: "2em",
    },
  },
  button: {
    color: (props) => (props.mode.modeName === "light" ? "#fff" : "#000"),
    backgroundColor: theme.palette.primary.main,
    height: "4em",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: "4em",
    },
  },
  text: {
    color: (props) => (props.mode.modeName === "light" ? "#000" : "#fff"),
    [theme.breakpoints.down("xs")]: {
      color: (props) => (props.mode.modeName === "light" ? "#fff" : null),
    },
  },
  email: {
    textDecoration: "none",
    color: (props) => (props.mode.modeName === "light" ? "#000" : "#fff"),
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("xs")]: {
      color: (props) => (props.mode.modeName === "light" ? "#fff" : null),
    },
  },
}));
