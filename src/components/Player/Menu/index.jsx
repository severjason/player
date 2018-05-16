import React from 'react';
import styled from 'styled-components';
import { MdQueueMusic, MdSearch } from 'react-icons/lib/md'
// import { mainTheme } from '../../../styles/themes';
import { Link } from 'react-router-dom';

const MenuStyle = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding: .5rem;
  
  a {
    font-size: 1.5rem;
    display: block;
  }
`;

const PlayerMenu = () => {
  return (
    <MenuStyle>
      <Link to={`/player`}><MdQueueMusic/></Link>
      <Link to={`/search`}><MdSearch/></Link>
    </MenuStyle>
  )
};

export default PlayerMenu;
