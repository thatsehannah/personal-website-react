import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.base,
    height: "20em",
    width: "100%",
    position: "relative",
    marginTop: "1.5em",
  },
  socialContainer: {
    right: "1.5em",
  },
  icon: {
    color: "#ffffff",
  },
  text: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));