import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SingleResult from './SingleResultComponent';

const useStyles = makeStyles({
  root: {
    padding: "2rem 0",
  },
  resultsTitle: {
    textAlign: "center"
  },
});

function Results() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Typography className={classes.resultsTitle} gutterBottom variant="h2" component="h2">
        Results:
      </Typography>
      <Grid className={classes.results} container spacing={2}>
        <SingleResult key={1} />
        <SingleResult key={2} />
        <SingleResult key={3} />
        <SingleResult key={4} />
      </Grid>
    </Container>
  );
}

export default Results;
