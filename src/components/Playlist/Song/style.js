import { songStyle } from 'styles/templates';

const SongStyle = songStyle.extend`
  display: flex;
  align-items: center;
  
  .song-container {
    width: 90%;
  }
  
  .delete-icon {
    width: 10%;
    padding: .5rem 0;
    text-align: center;
    
    :hover {
      cursor: pointer;
      color: ${props => props.theme.secondaryColor} 
    }
  }
`;

export default SongStyle;
