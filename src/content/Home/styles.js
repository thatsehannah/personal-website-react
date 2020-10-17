import { makeStyles } from "@material-ui/core/styles";
import landingBackgroundLight from "../../assets/backgrounds/landingBg.png";


export const useStyles = makeStyles((theme) => ({
  section: {
    height: "80em",
    backgroundImage: `linear-gradient(to right, ${theme.palette.common.background}, ${theme.palette.common.altBackground})`,
  },
  altSection: {
    height: "80em",
    backgroundImage: `linear-gradient(to left, ${theme.palette.common.background}, ${theme.palette.common.altBackground})`,
  },
  landingSection: {
    height: "80em",
    backgroundImage: `url(${landingBackgroundLight})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("lg")]: {
      height: "60em",
    },
  },
  educationSkillsSection: {
    height: "auto",
    backgroundColor: theme.palette.common.background,
  },
  intro: {
    [theme.breakpoints.down("lg")]: {
      marginTop: "-8em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-9em",
    },
  },
  name_statement: {
    width: "75em",
    [theme.breakpoints.down("md")]: {
      width: "60em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "45em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22em",
    },
  },
  name: {
    color: '#fff',
    [theme.breakpoints.down("lg")]: {
      fontSize: "4.2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.4em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em",
    },
  },
  statement: {
    color: '#fff',
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  avatar: {
    height: "22em",
    width: "22em",
    marginBottom: "1em",
    [theme.breakpoints.down("lg")]: {
      height: "17em",
      width: "17em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "11em",
      width: "11em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "8em",
      width: "8em",
    },
  },
}));
