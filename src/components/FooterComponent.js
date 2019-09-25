import React from 'react';
import {
  Container,
  Typography,
  Link
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  link: {
    color: "darkgreen"
  }
});

function Footer() {
  const classes = useStyles();
  return ( <
    Container className = {
      classes.root
    } >
    <
    Typography variant = "overline"
    display = "block"
    gutterBottom >
    Created by < Link href = "https://github.com/vivdlu"
    className = {
      classes.link
    } > Vivian Lu < /Link> <
    /Typography> <
    /Container>
  );
}

export default Footer;