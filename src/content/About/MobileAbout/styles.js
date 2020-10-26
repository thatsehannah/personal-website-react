import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "2em",
    backgroundColor: "rgba(0,0,0,0.50)",
    marginTop: "-15em",
    padding: "1em",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
}));
