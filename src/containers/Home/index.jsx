import React, { Component } from 'react';
import styled from 'styled-components';
import { mainTheme } from '../../styles/themes';

const HomeWrapper = styled('div')`
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.secondaryColor};
  
  .container {
    width: 22rem;
    height: 35rem;
    margin: 0 auto;
    padding: 5px;
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.mainTextColor};    
    border-radius: 3px;
    box-shadow: 0 0 20px 3px rgba(34,47,62,0.66);
  }
  
  @media all and (max-width: 22rem) {
    .container {
      width: 100%;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeWrapper theme={mainTheme}>
        <div className='container'>
          Home screen
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
