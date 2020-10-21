import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import SkillBar from "react-skillbars";

const EducationSkills = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const skills = [
    { type: "C#", level: 90 },
    { type: "JavaScript", level: 80 },
    { type: "ReactJS", level: 93 },
    { type: "CSS", level: 93 },
    { type: "SQL", level: 75 },
    { type: "Java", level: 70 },
    { type: "PHP", level: 10 },
    { type: "Swift", level: 30 },
  ];

  const skillbarColors = {
    bar: theme.palette.primary.main,
    title: {
      text: "#fff",
      background: "#c9c9c9",
    },
  };

  return (
    <Grid
      container
      className={classes.educationSkillsSection}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid item>
        <Grid container justify="center">
          <Paper elevation={8} className={classes.paper}>
            <Grid container direction="column">
              <Grid item>
                <Grid
                  container
                  className={classes.section}
                  direction={matchesSM ? "column" : "row"}
                >
                  <Grid item sm={matchesSM ? undefined : 4}>
                    <Typography variant="h5">
                      <span className={classes.title}>Education</span>
                    </Typography>
                  </Grid>
                  <Grid item sm>
                    <Grid
                      item
                      container
                      direction="column"
                      style={{
                        maxWidth: matchesSM ? undefined : "90%",
                        marginTop: matchesSM ? "1em" : undefined,
                      }}
                    >
                      <Grid item>
                        <Grid
                          item
                          className={classes.item}
                          container
                          direction="column"
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              gutterBottom
                              className={classes.header}
                            >
                              Kennesaw State University
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              className={classes.subtext}
                            >
                              Master's of Information Technology{" "}
                              <span
                                style={{ color: theme.palette.primary.main }}
                              >
                                |
                              </span>{" "}
                              May 2019
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              gutterBottom
                              className={classes.description}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis imperdiet massa
                              tincidunt nunc. Molestie at elementum eu facilisis
                              sed odio morbi quis. Nisi scelerisque eu ultrices
                              vitae auctor eu augue. Eget nunc scelerisque
                              viverra mauris in aliquam sem fringilla ut. Ut eu
                              sem integer vitae justo eget. Quam quisque id diam
                              vel quam elementum pulvinar etiam non. Aliquam
                              purus sit amet luctus venenatis lectus magna
                              fringilla. In pellentesque massa placerat duis
                              ultricies lacus. Felis imperdiet proin fermentum
                              leo vel. Vulputate dignissim suspendisse in est
                              ante in. Purus gravida quis blandit turpis cursus.
                              Elementum facilisis leo vel fringilla. Urna cursus
                              eget nunc scelerisque viverra mauris.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          item
                          className={classes.item}
                          container
                          direction="column"
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              gutterBottom
                              className={classes.header}
                            >
                              Georgia State University
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              className={classes.subtext}
                            >
                              Bachelor's of Computer Science{" "}
                              <span
                                style={{ color: theme.palette.primary.main }}
                              >
                                |
                              </span>{" "}
                              May 2017
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              gutterBottom
                              className={classes.description}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis imperdiet massa
                              tincidunt nunc. Molestie at elementum eu facilisis
                              sed odio morbi quis. Nisi scelerisque eu ultrices
                              vitae auctor eu augue. Eget nunc scelerisque
                              viverra mauris in aliquam sem fringilla ut. Ut eu
                              sem integer vitae justo eget. Quam quisque id diam
                              vel quam elementum pulvinar etiam non. Aliquam
                              purus sit amet luctus venenatis lectus magna
                              fringilla. In pellentesque massa placerat duis
                              ultricies lacus. Felis imperdiet proin fermentum
                              leo vel. Vulputate dignissim suspendisse in est
                              ante in. Purus gravida quis blandit turpis cursus.
                              Elementum facilisis leo vel fringilla. Urna cursus
                              eget nunc scelerisque viverra mauris.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction={matchesSM ? "column" : "row"}>
                  <Grid item sm={matchesSM ? undefined : 4}>
                    <Typography variant="h5">
                      <span className={classes.title}>Work Experience</span>
                    </Typography>
                  </Grid>
                  <Grid item sm>
                    <Grid
                      item
                      container
                      direction="column"
                      style={{
                        maxWidth: matchesSM ? undefined : "90%",
                        marginTop: matchesSM ? "1em" : undefined,
                      }}
                    >
                      <Grid item>
                        <Grid
                          item
                          className={classes.item}
                          container
                          direction="column"
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              gutterBottom
                              className={classes.header}
                            >
                              Rapattoni Corporation
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              className={classes.subtext}
                            >
                              Programmer{" "}
                              <span
                                style={{ color: theme.palette.primary.main }}
                              >
                                |
                              </span>{" "}
                              March 2019 - July 2020
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              gutterBottom
                              className={classes.description}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis imperdiet massa
                              tincidunt nunc. Molestie at elementum eu facilisis
                              sed odio morbi quis. Nisi scelerisque eu ultrices
                              vitae auctor eu augue. Eget nunc scelerisque
                              viverra mauris in aliquam sem fringilla ut. Ut eu
                              sem integer vitae justo eget. Quam quisque id diam
                              vel quam elementum pulvinar etiam non. Aliquam
                              purus sit amet luctus venenatis lectus magna
                              fringilla. In pellentesque massa placerat duis
                              ultricies lacus. Felis imperdiet proin fermentum
                              leo vel. Vulputate dignissim suspendisse in est
                              ante in. Purus gravida quis blandit turpis cursus.
                              Elementum facilisis leo vel fringilla. Urna cursus
                              eget nunc scelerisque viverra mauris.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid
                          item
                          className={classes.item}
                          container
                          direction="column"
                        >
                          <Grid item>
                            <Typography
                              variant="h6"
                              gutterBottom
                              className={classes.header}
                            >
                              Infosys
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              className={classes.subtext}
                            >
                              Associate{" "}
                              <span
                                style={{ color: theme.palette.primary.main }}
                              >
                                |
                              </span>{" "}
                              April 2018 - March 2019
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              gutterBottom
                              className={classes.description}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis imperdiet massa
                              tincidunt nunc. Molestie at elementum eu facilisis
                              sed odio morbi quis. Nisi scelerisque eu ultrices
                              vitae auctor eu augue. Eget nunc scelerisque
                              viverra mauris in aliquam sem fringilla ut. Ut eu
                              sem integer vitae justo eget. Quam quisque id diam
                              vel quam elementum pulvinar etiam non. Aliquam
                              purus sit amet luctus venenatis lectus magna
                              fringilla. In pellentesque massa placerat duis
                              ultricies lacus. Felis imperdiet proin fermentum
                              leo vel. Vulputate dignissim suspendisse in est
                              ante in. Purus gravida quis blandit turpis cursus.
                              Elementum facilisis leo vel fringilla. Urna cursus
                              eget nunc scelerisque viverra mauris.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  className={classes.section}
                  direction={matchesSM ? "column" : "row"}
                >
                  <Grid item sm={matchesSM ? undefined : 4}>
                    <Typography variant="h5">
                      <span className={classes.title}>Skills</span>
                    </Typography>
                  </Grid>
                  <Grid item sm>
                    <Grid
                      item
                      container
                      direction="column"
                      style={{
                        maxWidth: matchesSM ? undefined : "90%",
                        marginTop: matchesSM ? "1em" : undefined,
                      }}
                    >
                      <Grid item>
                        <SkillBar skills={skills} colors={skillbarColors} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EducationSkills;
