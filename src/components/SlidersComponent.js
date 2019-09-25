import React from 'react';
import { Typography, Grid, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Emoji from './EmojiComponent';

const useStyles = makeStyles({
  root: {
    padding: "20px 0px 10px",
  },
  slider: {
    color: "white"
  },
});

function Sliders() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={5}>
      <Grid item xs={6} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          <Emoji symbol="🚰" label="potable-water"/> Water
        </Typography>
        <Slider
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
      <Grid item xs={6} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          <Emoji symbol="☀️" label="sun"/> Light
        </Typography>
        <Slider
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
      <Grid item xs={6} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          <Emoji symbol="🌡️" label="thermometer"/> Temperature
        </Typography>
        <Slider
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
      <Grid item xs={6} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          <Emoji symbol="💦" label="sweat-droplets"/> Humidity
        </Typography>
        <Slider
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
      <Grid item xs={6} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          <Emoji symbol="🌌" label="milky-way"/> Space
        </Typography>
        <Slider
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
      <Grid item xs={6} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          <Emoji symbol="💪" label="flexed-biceps"/> Difficulty
        </Typography>
        <Slider
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
    </Grid>
  );
}

export default Sliders;
