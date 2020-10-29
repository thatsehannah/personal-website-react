import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "3em",
    marginTop: '2em',
    marginBottom: '2em',
    backgroundColor:
      theme.palette.type === "light" ? "#fff" : theme.palette.secondary.dark,
    padding: '2em'
  },
}));
