import { songStyle } from 'styles/templates';

const SearchedSongStyle = songStyle.extend`
  .title {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    width: 80%;
  }
  
  .index {
    width: 10%;
  }
  .add-icon {
    width: 10%;
    margin: 0 auto;
    font-size: 1.5rem;
    text-align: center;
  }
  .done {
    color: ${props => props.theme.secondaryColor};
  }
`;

export default SearchedSongStyle;
