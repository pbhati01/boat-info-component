import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import ShowCase from './components/ShowCase';
import theme from './utils/theme';

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <ShowCase />
  </ThemeProvider>
), document.getElementById('root'));
