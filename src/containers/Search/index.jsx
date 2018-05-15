import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled('div')`
  
`;

const Search = () => {
  return (
    <Wrapper>
      Search
      <br/>
      <Link to={`/`} >Close</Link>
    </Wrapper>
  )
};

export default Search;
