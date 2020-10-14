import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    width: '70%',
    height: '60%',
  },
  about: {
    maxWidth: '35em'
  },
  avatar: {
      height: '8em',
      width: '8em'
  },
  divider: {
      marginRight: '3em',
      marginLeft: '3em'
  }
}));
