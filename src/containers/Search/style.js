import { flexWidth100 } from 'styles';
import { styledInput } from 'styles/templates';

const SearchStyle = flexWidth100.extend`
  width: auto;
  padding: .5rem;
  
  .search-element {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 2px;
  }
  
  .close-link {
    width: 10%;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: right;
  }
  .no-results {
    padding-top: .5rem;
    text-align: center;
  }
`;

const SearchInput = styledInput.extend`
  width: 90%;
`;



export {
  SearchStyle,
  SearchInput,
};
