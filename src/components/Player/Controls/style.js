import { flexWidth100 } from 'styles';

const PlayerControlsStyle = flexWidth100.extend` 
  .controls-element {
    padding: 1rem;
    font-size: 2rem;
    line-height: 4rem;
    transition: font-size ${props => props.theme.baseTransition};
    :hover {
      color: ${props => props.theme.secondaryColor};
      cursor: pointer;
    }
  }
  .play {
    font-size: 4rem;
    transition: font-size ${props => props.theme.baseTransition};
  }
  
  &.minimized {
    position: fixed;
    max-width: 22rem;
    background-color: rgba(34, 47, 62, .7);
    border-bottom-left-radius: ${props => props.theme.baseBorderRadius};
    border-bottom-right-radius: ${props => props.theme.baseBorderRadius};
    transform: translateY(32.5rem);
    
    .controls-element {
      padding: .2rem;
      font-size: 1.5rem;
      line-height: 2rem;
      transition: font-size ${props => props.theme.baseTransition};
      :hover {
        color: ${props => props.theme.secondaryColor};
        cursor: pointer;
      }
    }
    .play {
      font-size: 2rem;
      transition: font-size ${props => props.theme.baseTransition};
    }
  }
`;

export default PlayerControlsStyle;
