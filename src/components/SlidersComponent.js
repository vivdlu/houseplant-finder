import React from 'react';
import { Typography, Grid, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: "10px 0",
  },
  slider: {
    color: "white"
  },
});

function Sliders() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={5}>
      <Grid item xs={12} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          &#x1F4A6; Water
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
      <Grid item xs={12} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          &#x2600;&#xFE0F; Light
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
      <Grid item xs={12} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          &#x1F321;&#xFE0F; Temperature
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
      <Grid item xs={12} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          &#x1F30C; Space
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
      <Grid item xs={12} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          &#x1F4AA; Difficulty
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
      <Grid item xs={12} sm={4}>
        <Typography className="main-body" variant="body2" gutterBottom>
          &#x1F4AA; Difficulty
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
