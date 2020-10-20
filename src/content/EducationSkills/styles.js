import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  educationSkillsSection: {
    backgroundColor: theme.palette.secondary.light,
    width: "100%",
    padding: "5em",
    
    [theme.breakpoints.down("sm")]: {
      padding: "0.5em",
    },
  },
  paper: {
    width: "75%",
    padding: "1.7em",
    backgroundColor: theme.palette.common.base,
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1em'
    }
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
