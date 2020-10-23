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
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  body: {
    marginBottom: "-0.5em",
  },
  icon: {
    height: "1.7em",
    width: "1.7em",
    color: theme.palette.primary.main,
  },
}));
