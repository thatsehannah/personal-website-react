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
      height: "auto",
    },
  },
  intro: {
    height: "auto",
    maxWidth: "90em",
  },
  divider: {
    color: "#fff",
    marginBottom: "2em",
  },
}));
