import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "0.5em",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    color: (props) => props.color,
    height: (props) => props.size[0],
    width: (props) => props.size[0],
    [theme.breakpoints.down("lg")]: {
      height: (props) => props.size[1],
      width: (props) => props.size[1],
    },
    [theme.breakpoints.down("sm")]: {
      height: (props) => props.size[2],
      width: (props) => props.size[2],
    },
  },
}));
