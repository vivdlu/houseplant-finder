import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 500,
      paddingTop: "25px"
    },
    body1: {
      fontSize: "1.3rem",
      paddingBottom: "25px"
    },
    body2: {
      fontSize: "1.3rem"
    }
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
