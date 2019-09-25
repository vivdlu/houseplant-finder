import React from 'react';
import { Typography, Grid, Slider } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/styles';
import Emoji from './EmojiComponent';

const StyledSlider = withStyles({
  root: {
    color: "white",
  },
  valueLabel: {
    top: "30px",
    transformOrigin: "top center",
    "& *": {
      background: "transparent",
      fontWeight: "500",
      fontSize: "1rem",
    },
  },
})(Slider);

const useStyles = makeStyles({
  slider: {

  },
});

function SingleSlider() {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4}>
      <Typography className="main-body" variant="body2" gutterBottom>
        <Emoji symbol="🚰" label="potable-water"/> Water
      </Typography>
      <StyledSlider
        className={classes.slider}
        defaultValue={0}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        />
    </Grid>
  );
}

export default SingleSlider;
