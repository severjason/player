// @flow
import * as React from 'react';
import { MdQueueMusic, MdSearch, MdInput } from 'react-icons/lib/md'
import { Link } from 'react-router-dom';
import MenuStyle from './style';
import { Confirmation } from 'components';

type Props = {
  playlistOpened: boolean,
  userLoggedIn: boolean,
  username: string,
  showConfirmation: boolean,
  toggleConfirmation: () => boolean,
  togglePlaylist: () => void,
  logout: () => void,
};

const PlayerMenu = (props: Props) => {
  return (
    <MenuStyle justifyContent="space-between">
      <Confirmation
        showConfirmation={props.showConfirmation}
        toggleConfirmation={props.toggleConfirmation}
        confirmed={props.logout}
      />
      <div className="menu-item-group">
        <div
          className={`menu-item ${props.playlistOpened ? 'active' : ''}`}
          onClick={props.togglePlaylist}
        >
          <MdQueueMusic/>
        </div>
        {props.userLoggedIn
          ? <div className="menu-item"
                 onClick={props.toggleConfirmation}
          ><MdInput/></div>
          : null}
      </div>
      <div className="menu-item-group">
        <Link to={`/search`}><MdSearch/></Link>
      </div>
    </MenuStyle>
  )
};

export default PlayerMenu;
