import React from 'react';
import { Container, Typography, Grid, Slider, Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: "50px 0",
  },
  resultsTitle: {
    padding: "0 0 25px",
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
      <Grid className="results" container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image="https://www.houseplant411.com/wp-content/uploads/798px-Peperomia_caperata_1-OB9-130x97.jpg"
              title="Peperomia Plant"
              alt="Peperomia Plant"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Peperomia Plant
              </Typography>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Water:</Typography> <Rating name="size-small" size="small" name="half-rating" value={2.5} precision={0.5} readOnly />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Light:</Typography> <Rating name="size-small" size="small" name="half-rating" value={1.5} precision={0.5} readOnly />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image="https://www.houseplant411.com/wp-content/uploads/798px-Peperomia_caperata_1-OB9-130x97.jpg"
              title="Peperomia Plant"
              alt="Peperomia Plant"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Peperomia Plant
              </Typography>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Water:</Typography> <Rating name="size-small" size="small" name="half-rating" value={2.5} precision={0.5} readOnly />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Light:</Typography> <Rating name="size-small" size="small" name="half-rating" value={1.5} precision={0.5} readOnly />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image="https://www.houseplant411.com/wp-content/uploads/798px-Peperomia_caperata_1-OB9-130x97.jpg"
              title="Peperomia Plant"
              alt="Peperomia Plant"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Peperomia Plant
              </Typography>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Water:</Typography> <Rating name="size-small" size="small" name="half-rating" value={2.5} precision={0.5} readOnly />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Light:</Typography> <Rating name="size-small" size="small" name="half-rating" value={1.5} precision={0.5} readOnly />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              image="https://www.houseplant411.com/wp-content/uploads/798px-Peperomia_caperata_1-OB9-130x97.jpg"
              title="Majesty Palm"
              alt="Majesty Palm"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3">
                Majesty Palm
              </Typography>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Water:</Typography> <Rating name="size-small" size="small" name="half-rating" value={0.5} precision={0.5} readOnly />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="textSecondary">
                Light:</Typography> <Rating name="size-small" size="small" name="half-rating" value={4.5} precision={0.5} readOnly />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Results;
