// @flow
import * as React from 'react';
import { MdQueueMusic, MdSearch } from 'react-icons/lib/md'
import { Link } from 'react-router-dom';
import MenuStyle from './style';

type Props = {
  playlistOpened: boolean,
  togglePlaylist: () => void,
};

const PlayerMenu = (props: Props) => {
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

export default PlayerMenu;
