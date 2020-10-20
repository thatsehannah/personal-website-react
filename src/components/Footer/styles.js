import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#f5f5ff",
    height: "20em",
    width: "100%",
    position: "relative",
  },
  socialContainer: {
    right: "1.5em",
  },
  icon: {
    color: "#ffffff",
  },
  text: {
    fontSize: 20,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));
