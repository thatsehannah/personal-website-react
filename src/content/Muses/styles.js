import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  musesSection: {
      padding: '3em',
      width: '100%',
      backgroundColor: props => props.mode.modeName === 'light' ? '#fff' : theme.palette.secondary.dark,
      [theme.breakpoints.down('sm')]:{
        padding: '0.5em'
      }
  },
  lastChild: {
    "&:last-child": {
      marginTop: '2em'
  },
  }
}));
