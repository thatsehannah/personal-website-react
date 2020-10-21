import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "3em",
    backgroundColor: (props) =>
      props.mode.modeName === "light" ? "#fff" : theme.palette.secondary.dark,
  },
}));
