import React from "react";
import { AppBar, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Sliders from "./SlidersComponent";

const useStyles = makeStyles({
  root: {
    backgroundColor: "darkgreen",
    padding: "30px 20px 35px",
    textAlign: "center"
  },
  headerSubtitle: {
    padding: "6px 0 10px"
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
              Find Your Next Houseplant{" "}
            </Typography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid className={classes.headerSubtitle} container>
          <Grid item xs={12}>
            <Typography variant="subtitle" gutterBottom>
              Set your requirements with the sliders below and find a houseplant
              that you can actually keep alive.{" "}
            </Typography>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Sliders />
      </Container>{" "}
    </AppBar>
  );
}

export default Header;
