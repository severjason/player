import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { ThemeProvider } from 'styled-components';
import { mainTheme, GlobalStyle } from 'styles';
import Routes from 'routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle>
        <Routes/>
      </GlobalStyle>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
