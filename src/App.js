import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.2rem",
    },
    subtitle: {
      fontSize: "1.2rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1.1rem"
    },
    caption: {
      fontSize: "0.9rem"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
