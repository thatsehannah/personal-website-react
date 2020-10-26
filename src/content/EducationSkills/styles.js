import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  educationSkillsSection: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    padding: "5em",

    [theme.breakpoints.down("sm")]: {
      padding: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  paper: {
    width: "75%",
    padding: "1.7em",
    backgroundColor: (props) =>
      props.mode.modeName === "light" ? "#fff" : theme.palette.secondary.dark,
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
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
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "inherit"),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
    [theme.breakpoints.down("xs")]: {
      border: "none",
      paddingBottom: 0,
    },
  },
  header: {
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "inherit"),
  },
  subtext: {
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "#696969"),
  },
  description: {
    fontSize: "1em",
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "#696969"),
  },
}));
