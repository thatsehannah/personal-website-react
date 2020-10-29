import { makeStyles } from "@material-ui/core/styles";
import aboutBackgroundLight from "../../assets/backgrounds/aboutBg.jpg";

export const useStyles = makeStyles((theme) => ({
  aboutSection: {
    backgroundImage: `url(${aboutBackgroundLight})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2em",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  textColumn: {
    width: "45em",
    [theme.breakpoints.down("md")]: {
      width: "35em",
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
    
  },
  button: {
    marginTop: "2em",
    color: theme.palette.type === "light" ? "#fff" : "#000",
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
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.type === "light" ? "#fff" : null,
    },
  },
  title: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.type === "light" ? "#fff" : null,
      fontSize: "1.8em",
    },
  },
  aboutMeText: {
    marginBottom: "1.5em",
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.type === "light" ? "#fff" : null,
    },
  },
  email: {
    textDecoration: "none",
    fontWeight: 700,
    color: theme.palette.type === "light" ? "#000" : "#fff",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.type === "light" ? "#fff" : null,
    },
  },
}));
