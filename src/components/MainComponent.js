import React, { Fragment } from 'react';
import { Container, Typography, Grid, Slider, Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import Header from './HeaderComponent';
import Results from './ResultsComponent';

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <Results />
    </Fragment>
  );
}

export default Main;
