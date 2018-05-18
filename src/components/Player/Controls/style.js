import { flexWidth100 } from 'styles'

const PlayerControlsStyle = flexWidth100.extend` 
  .controls-element {
    padding: 1rem;
    font-size: 2rem;
    line-height: 4rem;
    :hover {
      color: ${props => props.theme.secondaryColor};
      cursor: pointer;
    }
  }
  .play {
    font-size: 4rem;
  }
`;

export default PlayerControlsStyle;
