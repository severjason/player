import React from 'react';
import PropTypes from "prop-types";
import { MdQueueMusic, MdSearch } from 'react-icons/lib/md'
import { Link } from 'react-router-dom';
import MenuStyle from './style';

const _propTypes = {
  playlistOpened: PropTypes.bool.isRequired,
  togglePlaylist: PropTypes.func.isRequired,
};

const PlayerMenu = (props) => {
  return (
    <MenuStyle justifyContent="space-between">
      <div
        className={`menu-item ${props.playlistOpened ? 'active' : ''}`}
        onClick={props.togglePlaylist}
      >
        <MdQueueMusic/>
      </div>
      <Link to={`/search`}><MdSearch/></Link>
    </MenuStyle>
  )
};

PlayerMenu.propTypes = _propTypes;

export default PlayerMenu;
