import { makeStyles } from "@material-ui/core/styles";
import aboutBackgroundLight from "../../assets/backgrounds/aboutBgLight.jpg";
import aboutBackgroundDark from "../../assets/backgrounds/aboutBgDark.jpg";

export const useStyles = makeStyles((theme) => ({
  aboutSection: {
    height: "70em",
    backgroundImage: (props) =>
      `url(${
        props.mode.modeName === "light"
          ? aboutBackgroundLight
          : aboutBackgroundDark
      })`,
    backgroundAttachment: "fixed",
    willChange: 'transform',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "scroll",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  textColumn: {
    width: "45em",
    [theme.breakpoints.down("md")]: {
      width: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
  },
  button: {
    marginTop: "2em",
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
    [theme.breakpoints.down("sm")]: {
      color: (props) => (props.mode.modeName === "light" ? "#fff" : null),
    },
  },
  title: {
    color: (props) => (props.mode.modeName === "light" ? "#000" : "#fff"),
    [theme.breakpoints.down("sm")]: {
      color: (props) => (props.mode.modeName === "light" ? "#fff" : null),
      fontSize: "1.8em",
    },
  },
  aboutMeText: {
    marginBottom: "1.5em",
    color: (props) => (props.mode.modeName === "light" ? "#000" : "#fff"),
    [theme.breakpoints.down("sm")]: {
      color: (props) => (props.mode.modeName === "light" ? "#fff" : null),
    },
  },
  email: {
    textDecoration: "none",
    fontWeight: 700,
    color: (props) => (props.mode.modeName === "light" ? "#000" : "#fff"),
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      color: (props) => (props.mode.modeName === "light" ? "#fff" : null),
    },
  },
}));
