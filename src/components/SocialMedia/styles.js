import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  socialContainer: {
    right: "1.5em",
  },
  button: {
    marginRight: "0.5em",
    marginLeft: "0.5em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  icon: {
    height: 81,
    width: 81,
    color: (props) => props.color,
    [theme.breakpoints.down('sm')]: {
      height: 45,
      width: 45
    }
  },
}));
