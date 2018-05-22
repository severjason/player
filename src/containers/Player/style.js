import { flexWidth100 } from 'styles';

const PlayerStyle = flexWidth100.extend`
  position: relative;
  height: 100%;
  
  &.minimized {
  	height: auto;
  }
`;

export default PlayerStyle;
