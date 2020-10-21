import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  socialContainer: {
    right: "1.5em",
  },
  button: {
    marginRight: "0.5em",
    marginLeft: "0.5em",
    "&:hover": {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  icon: {
    height: (props) => props.size[0],
    width: (props) => props.size[0],
    [theme.breakpoints.down("sm")]: {
      height: (props) => props.size[1],
      width: (props) => props.size[1],
    },
  },
}));
