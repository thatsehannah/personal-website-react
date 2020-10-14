import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90em",
    height: "50em",
    marginTop: "4em",
    borderRadius: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2em",
      marginRight: "2em",
      padding: "1em",
      height: "30em",
    },
  },

  about: {
    width: "40em",
    [theme.breakpoints.down("md")]: {
      width: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
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
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    height: "4em",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: "4em",
    },
  },
  email: {
    textDecoration: "none",
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "inherit"),
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));
