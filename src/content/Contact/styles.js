import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contactSection: {
    backgroundColor: theme.palette.secondary.light,
    padding: "1em",
  },
  textField: {
    marginBottom: "2em",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  inputLabel: {
    color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
    "&.focused": {
      color: (props) => (props.mode.modeName === "light" ? "#505050" : "#fff"),
    },
    "&.shrink $root": {
      color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
  fieldset: {
    color: "#fff",
    "&:hover $notchedOutline": {
      borderColor: `${theme.palette.primary.light}`,
    },
  },
  notchedOutline: {
    border: `2.5px solid ${theme.palette.primary.main}`,
  },
  statement: {
    fontSize: "2em",
    color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  email: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1.5em",
    color: (props) => (props.mode.modeName === "light" ? "inherit" : "#fff"),
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  mailIcon: {
    fontSize: "2.1em",
    color: theme.palette.primary.main,
    marginRight: "0.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.85em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
}));
