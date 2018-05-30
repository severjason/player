import { styledInput } from 'styles/templates';

const LoginInputStyle = styledInput.extend`

  .input {
    &.input-error {
      border-bottom-color: ${props => props.theme.errorColor};
    }
    
  }
    
  .input-label {
    display: block;
    padding-top: 1rem;
  }
  
  .input-error {
    display: flex;
    align-items: center;
    font-size: .8rem;
    line-height: 1rem;
    color: ${props => props.theme.errorColor};
    
    svg {
      padding-right: .1rem;
    }
  }
  
`;

export default LoginInputStyle;