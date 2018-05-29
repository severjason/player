import styled from 'styled-components';

const ConfirmationStyle = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  height: 150%;
  max-height: 35rem;
  margin: -.5rem;
  border-radius: 3px;
  background-color: ${props => props.theme.mainColor};
  z-index: 1000;
  &.visible {
    display: block;
  }
  .item {
    display: flex;
    justify-content: center;
    padding: .5rem;
    text-align: center;
    font-size: 1.2rem;
    
    .button {
      font-size: 3rem;
      line-height: 4rem;
      padding: 1rem;
      cursor: pointer;
      
      &:hover {
        color: ${props => props.theme.secondaryColor}
      }
      &:active {
        transform: scale(.9);
      }
    }
    
  }
`;

export default ConfirmationStyle;
