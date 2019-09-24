import React from 'react';
import { AppBar, Container, Typography, Grid, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Sliders from './SlidersComponent';

const useStyles = makeStyles({
  root: {
    backgroundColor: "darkgreen",
    padding: "45px 0 25px"
  },
  headerText: {
    textAlign: "center",
    padding: "0 0 25px"
  }
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Container maxWidth="lg">
        <Grid className={classes.headerText} container>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" gutterBottom>
              Find a Houseplant
            </Typography>
            <Typography variant="subtitle" gutterBottom>
              We'll help you find a houseplant that you can actually keep alive.
            </Typography>
          </Grid>
        </Grid>
        <Sliders />
      </Container>
    </AppBar>
  );
}

export default Header;
