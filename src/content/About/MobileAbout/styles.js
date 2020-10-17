import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "2em",
    backgroundColor: 'rgba(0,0,0,0.50)',
    [theme.breakpoints.down('sm')]: {
        padding: '1em'
    }
  },
}));
