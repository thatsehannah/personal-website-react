import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "3em",
    height: "35em",
    backgroundColor: props => props.mode.modeName === 'dark' ? theme.palette.common.base : '#fff'
  },
}));
