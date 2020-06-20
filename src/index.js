import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './themes/globalStyle';
import Theme from './themes/theme';

const root = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
