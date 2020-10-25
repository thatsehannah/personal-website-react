import { makeStyles } from "@material-ui/core/styles";
import landingBackgroundLight from "../../assets/backgrounds/landingBg.png";

export const useStyles = makeStyles((theme) => ({
  landingSection: {
    height: "80em",
    backgroundImage: `url(${landingBackgroundLight})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("lg")]: {
      height: "60em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40em",
    },
  },
  intro: {
    [theme.breakpoints.down("lg")]: {
      marginTop: "-10em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  
  name: {
    color: "#fff",
    [theme.breakpoints.down("lg")]: {
      fontSize: "4.2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.9em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7em",
    },
  },
  bulletPt: {
    color: theme.palette.primary.main,
    
  },
  statement: {
    color: "#fff",
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
      height: "12em",
      width: "12em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10em",
      width: "10em",
    },
  },
}));
