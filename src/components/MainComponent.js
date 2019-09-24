import React from 'react';
import { FormGroup, FormControlLabel, Checkbox, Container, Typography, Grid, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: "green",
  },
  thumb: {
    height: "16px",
    width: "16px",
    marginTop: "-8px",
    marginLeft: "-8px",
    "&:focus,&:hover,&$active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)"
    },
  },
});

function Main() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid id="intro-text" className="intro" container>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1" gutterBottom>
            Houseplant Picker
          </Typography>
          <Typography variant="body1" gutterBottom>
            We'll help you pick a houseplant that you can actually keep alive.
          </Typography>
        </Grid>
      </Grid>
      <Grid className="sliders" container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Typography className="main-body" variant="body2" gutterBottom>
            &#x1F4A6; Water
          </Typography>
          <Slider
            className={classes.root}
            defaultValue={0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={2}
            marks
            min={0}
            max={10}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className="main-body" variant="body2" gutterBottom>
            &#x2600;&#xFE0F; Light
          </Typography>
          <Slider
            className={classes.root}
            defaultValue={0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={2}
            marks
            min={0}
            max={10}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className="main-body" variant="body2" gutterBottom>
                &#x1F4AA; Difficulty
          </Typography>
          <Slider
            className={classes.root}
            defaultValue={0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={2}
            marks
            min={0}
            max={10}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className="main-body" variant="body2" gutterBottom>
            &#x1F332; Size
          </Typography>
          <Slider
            className={classes.root}
            defaultValue={0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={2}
            marks
            min={0}
            max={10}
            />
        </Grid>
      </Grid>
      <Grid className="checkboxes" container spacing={3}>
      <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            color="green"
          />
        }
        label="Primary"
        labelPlacement="end"
      />
      </FormGroup>
      </Grid>
    </Container>
  );
}

export default Main;
