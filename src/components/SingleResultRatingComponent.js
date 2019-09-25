import React, { Fragment } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';

const StyledRating = withStyles({
  iconFilled: {
    color: 'darkgreen',
  },
  iconHover: {
    color: 'darkgreen',
  },
})(Rating);

function SingleResultRating() {
  return (
    <Fragment>
      <Grid item xs={12} sm={6}>
        <Typography variant="caption" color="textSecondary">
        Water:</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <StyledRating name="size-small" size="small" name="half-rating" value={4.5} precision={0.5} readOnly />
      </Grid>
    </Fragment>
  );
}

export default SingleResultRating;
