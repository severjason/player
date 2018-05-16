import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
import { mainTheme } from './styles/themes';
import { Home } from './containers';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = styled.div`
  a {
    color: ${props => props.theme.mainTextColor};
    text-decoration: none;
    
    &:hover, &.active {
      color: ${props => props.theme.secondaryColor};
    }
  }
  img {
    max-width: 100%;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle theme={mainTheme}>
      <Home/>
    </GlobalStyle>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
