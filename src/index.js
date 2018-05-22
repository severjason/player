import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';
import { mainTheme, GlobalStyle } from 'styles';
import Routes from 'routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle>
          <Routes/>
        </GlobalStyle>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
