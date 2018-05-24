import { flexWidth100 } from 'styles';

const PlayerStyle = flexWidth100.extend`
  position: relative;
  
  &.minimized {
  	height: auto;
  }
`;

export default PlayerStyle;
