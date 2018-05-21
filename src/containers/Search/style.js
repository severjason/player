import { flexWidth100 } from 'styles';

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
  .input {
    width: 90%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    border: 0;
    outline: 0;
    background: ${props => props.theme.mainColor};
    color: ${props => props.theme.mainTextColor};
    
    &::placeholder {
      color: ${props => props.theme.secondaryTextColor};
    }
    
    &:focus {
      border-bottom: 1px solid ${props => props.theme.secondaryColor};
    }
  }
`;

export default SearchStyle;
