import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  musesSection: {
    padding: "3em",
    width: "100%",
    backgroundColor:
      theme.palette.type === "light" ? "#ded7cc" : theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      padding: "0.5em",
    },
  },
  title: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4em",
    },
  },
  text: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
  lastChild: {
    "&:last-child": {
      marginTop: "2em",
    },
  },
}));
