import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1em",
  },
  paper: {
    height: "auto",
    backgroundColor: theme.palette.common.base,
  },
  school: {
      marginBottom: '3em'
  },
  title: {
      borderBottom: `3px solid ${theme.palette.primary.light}`,
      paddingBottom: '0.2em',
      [theme.breakpoints.down('sm')]: {
          border: 'none'
      }
  }
}));
