import { makeStyles } from "@material-ui/core/styles";
import landingBackgroundLight from "../../assets/backgrounds/landingBgLight.jpg";
import landingBackgroundDark from "../../assets/backgrounds/landingBgDark.jpg";

export const useStyles = makeStyles((theme) => ({
  landingSection: {
    height: "80em",
    backgroundColor: theme.palette.background.default,
    backgroundImage:
      theme.palette.type === "light"
        ? `url(${landingBackgroundLight})`
        : `url(${landingBackgroundDark})`,
    backgroundAttachment: "fixed",
    willChange: "transform",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("lg")]: {
      height: "60em",
    },
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "scroll",
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
      marginTop: "-4em",
    },
  },

  name: {
    color: "#fff",
    [theme.breakpoints.down("lg")]: {
      fontSize: "4.2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5em",
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
    [theme.breakpoints.down("xs")]: {
      height: "12em",
      width: "12em",
    },
  },
  image: {
    objectPosition: "100% 0",
  },
}));
