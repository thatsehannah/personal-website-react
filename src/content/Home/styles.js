import { makeStyles } from "@material-ui/core/styles";
import landingBackgroundLight from "../../assets/backgrounds/DT_Skyline1.jpg";
import landingBackgroundDark from "../../assets/backgrounds/LA_Skyline.jpeg";

export const useStyles = makeStyles((theme) => ({
  section: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.common.background,
  },
  landingSection: {
    backgroundImage: (props) =>
      `url(${
        props.mode.modeName === "light"
          ? landingBackgroundLight
          : landingBackgroundDark
      })`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "scroll",
    },
  },
  intro: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-5em",
    },
  },
  name_statement: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  name: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8em",
      fontWeight: "800",
    },
  },
  statement: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
  divider: {
    color: "#fff",
    marginBottom: "2em",
  },
  avatar: {
    height: "15em",
    width: "15em",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      height: "9em",
      width: "9em",
    },
  },
}));
