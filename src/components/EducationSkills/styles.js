import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  educationSkillsSection: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    padding: "2em",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  paper: {
    width: "75%",
    marginTop: "2em",
    marginBottom: "2em",
    padding: "2em",
    backgroundColor:
      theme.palette.type === "light" ? "#fff" : theme.palette.secondary.dark,
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  section: {
    marginTop: "2em",
  },
  item: {
    marginBottom: "1em",
  },
  title: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    paddingBottom: "0.2em",
    color: theme.palette.type === "dark" ? "#fff" : "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
    [theme.breakpoints.down("xs")]: {
      border: "none",
      paddingBottom: 0,
    },
  },
  header: {
    color: theme.palette.type === "dark" ? "#fff" : "#000",
  },
  subtext: {
    color: theme.palette.type === "dark" ? "#fff" : "#696969",
  },
  description: {
    fontSize: "1em",
    color: theme.palette.type === "dark" ? "#fff" : "#696969",
  },
}));
