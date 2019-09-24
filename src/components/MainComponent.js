import React, { Fragment } from 'react';
import { Container, Typography, Grid, Slider, Card, CardContent, CardMedia, Button, createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Rating } from '@material-ui/lab';
import Header from './HeaderComponent';
import Results from './ResultsComponent';
import Footer from './FooterComponent';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.8rem",
    },
    h3: {
      fontSize: "1.2rem",
    },
    subtitle: {
      fontSize: "0.9rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "1rem"
    },
    caption: {
      fontSize: "0.9rem"
    },
  },
});

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Results />
      <Footer />
    </ThemeProvider>
  );
}

export default Main;
