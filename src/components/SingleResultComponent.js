import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SingleResultRating from "./SingleResultRatingComponent";

const useStyles = makeStyles({
  singleResultTitle: {
    padding: "0.5rem 0 0",
    textAlign: "center"
  }
});

function SingleResult() {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.card}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image="https://www.houseplantsexpert.com/image-files/aloevera.jpg"
                  title="Aloe Vera"
                  alt="Aloe Vera"
                />
              </Grid>{" "}
              <Grid className={classes.singleResultTitle} item xs={12}>
                <Typography gutterBottom variant="h3" component="h3">
                  Aloe Vera{" "}
                </Typography>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </ExpansionPanelSummary>{" "}
          <ExpansionPanelDetails>
            <Grid className={classes.singleResultDetails} container spacing={0}>
              <SingleResultRating key={1} /> <SingleResultRating key={2} />{" "}
              <SingleResultRating key={3} /> <SingleResultRating key={4} />{" "}
              <SingleResultRating key={5} /> <SingleResultRating key={6} />{" "}
            </Grid>{" "}
          </ExpansionPanelDetails>{" "}
        </ExpansionPanel>{" "}
      </Card>{" "}
    </Grid>
  );
}

export default SingleResult;
