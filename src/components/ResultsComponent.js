import React, { Fragment } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SingleResult from "./SingleResultComponent";
import { PLANTS } from "../shared/PLANTS";

const useStyles = makeStyles({
  root: {
    padding: "2rem 0"
  },
  resultsTitle: {
    textAlign: "center"
  }
});

function Results() {
  const classes = useStyles();
  const renderResults = PLANTS.map(plant => {
    return (
      <Fragment>
        <SingleResult key={plant.key} />{" "}
      </Fragment>
    );
  });

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography
        className={classes.resultsTitle}
        gutterBottom
        variant="h2"
        component="h2"
      >
        Results:
      </Typography>{" "}
      <Grid className={classes.results} container spacing={2}>
        {renderResults}{" "}
      </Grid>{" "}
    </Container>
  );
}

export default Results;
