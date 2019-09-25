import React from 'react';
import {
  createMuiTheme
} from '@material-ui/core';
import {
  ThemeProvider
} from '@material-ui/styles';
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
      padding: "0 0 1rem",
    },
    h3: {
      fontSize: "1.3rem",
      padding: "0.5rem 0"
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
      fontSize: "0.7rem"
    },
  },
});

function Main() {
  return ( <
    ThemeProvider theme = {
      theme
    } >
    <
    Header / >
    <
    Results / >
    <
    Footer / >
    <
    /ThemeProvider>
  );
}

export default Main;