import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  museCard: {
    height: "24em",
    width: "24em",
    marginRight: "2em",
    marginBottom: "2em",
    "&:hover $museImage": {
      height: "10em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      margin: theme.spacing(1, 1),
      "&:hover $museImage": {
        height: "8em",
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "15em",
      width: "15em",
      "&:hover $museImage": {
        height: "6em",
      },
    },
  },
  cardContent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  museImageResize: {
    objectFit: "cover",
    objectPosition: "50% 5%",
  },
  museImage: {
    height: "24em",
    transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
  museDescriptionContainer: {
    padding: "0.5em 1em",
    height: "14em",
    transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
    [theme.breakpoints.down("sm")]: {
      height: "12em",
      padding: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "9em",
      padding: "0.5em 0",
    },
  },
  button: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  body: {
    marginBottom: "-0.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85em",
    },
  },
  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("sm")]: {
      height: "1.5em",
      width: "1.5em",
    },
  },
}));
