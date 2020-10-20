import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contactSection: {
    backgroundColor: theme.palette.secondary.light,
    padding: "1em",
  },
  textField: {
    marginBottom: "2em",
  },
  inputLabel: {
    color: "#fff",
    "&.focused": {
      color: (props) =>
        props.mode.modeName === "light" ? "#505050" : "#fff",
    },
    "&.shrink": {
      color: (props) =>
        props.mode.modeName === "light" ? "#505050" : "#fff",
    },
  },
  fieldset: {
    color: "#fff",
    "&:hover $notchedOutline": {
      borderColor: `${theme.palette.primary.light}`,
    },
  },
  notchedOutline: {
    border: `2.5px solid ${theme.palette.primary.main}`,
  },
  messageField: {
    marginTop: "4em",
  },
}));
