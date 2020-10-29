import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  musesSection: {
    padding: "2em",
    width: "100%",
    backgroundColor:
      theme.palette.type === "light" ? "#ded7cc" : theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  container: {
    marginTop: "2em",
    marginBottom: "2em",
    border: "1px solid #4f4218",
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
}));
