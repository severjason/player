import React from 'react';
import { MdQueueMusic, MdSearch } from 'react-icons/lib/md'
import { Link } from 'react-router-dom';
import MenuStyle from './style';

const PlayerMenu = () => {
  return (
    <MenuStyle justifyContent="space-between">
      <Link to={`/player`}><MdQueueMusic/></Link>
      <Link to={`/search`}><MdSearch/></Link>
    </MenuStyle>
  )
};

export default PlayerMenu;
