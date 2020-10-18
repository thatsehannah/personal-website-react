import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  educationSkillsSection: {
    backgroundColor: theme.palette.common.background,
    width: "100%",
    padding: "3em",
    [theme.breakpoints.down("sm")]: {
      padding: "1.2em",
    },
  },
  paper: {
    width: "75%",
    padding: "1.3em",
    backgroundColor: theme.palette.common.base,
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  section: {
    marginTop: "2em",
  },
  item: {
    marginBottom: '1em'
  },
  title: {
    borderBottom: `3px solid ${theme.palette.primary.light}`,
    paddingBottom: "0.2em",
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "inherit"),
    [theme.breakpoints.down("sm")]: {
      border: "none",
      fontSize: "1em",
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
    color: (props) => (props.mode.modeName === "dark" ? "#fff" : "#696969"),
  },
}));
