import { styledInput } from 'styles/templates';
import styled from 'styled-components';

export const LoginInput = styledInput.extend`
  
`;

export const LoginStyle = styled.div`
  padding: .5rem;
  
  .login-item {
    float: right;
    position: relative;
    width: 100%;
  }
  
  .login-title {
    text-align: center;
    font-size: 1.2rem;
    line-height: 2rem;
  }
  
  .login-form {
    max-width: ${props => props.theme.maxSongImgWidth};
    margin: 0 auto;
  }
  
  .close-link {
    width: 10%;
    float: right;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: right;
  }
  
  .login-button {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 3rem;
    display: block;
    margin: 1rem auto;
    cursor: pointer;
    font-weight: bold;
    color: ${props => props.theme.mainTextColor}
    background: none;
    outline: none;
    border: none;
    &:hover {
      color: ${props => props.theme.secondaryColor}
    }
    &:active {
      transform: scale(.9);
    }
  }
  
  .input {
    padding-top: .5rem;
  }
`;

