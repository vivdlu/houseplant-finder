import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SingleSlider from "./SingleSliderComponent";
import { SLIDERS } from "../shared/SLIDERS";

const useStyles = makeStyles({
  root: {
    padding: "20px 0px 10px"
  }
});

function Sliders() {
  const classes = useStyles();
  const renderSliders = SLIDERS.map(slider => {
    return (
      <Fragment>
        <SingleSlider
          key={slider.key}
          name={slider.name}
          emoji={slider.emoji}
          label={slider.label}
        />{" "}
      </Fragment>
    );
  });

  return (
    <Grid className={classes.root} container spacing={5}>
      {" "}
      {renderSliders}{" "}
    </Grid>
  );
}

export default Sliders;
