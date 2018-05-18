import React from 'react';
import Sound from 'react-sound';
import { MdFastForward, MdPlayArrow, MdPause, MdFastRewind } from 'react-icons/lib/md'
import PropTypes from "prop-types";
import PlayerControlsStyle from './style';

const _propTypes = {
  playingStatus: PropTypes.string,
  currentSongId: PropTypes.string,
  minimized: PropTypes.bool,
  onPlayClick: PropTypes.func,
  onForwardClick: PropTypes.func,
  onRewindClick: PropTypes.func,
};

const PlayerControls = (props) => {
  return (
      <PlayerControlsStyle className={props.minimized ? 'minimized' : ''}>
        <div
          className='controls-element'
          onClick={props.onRewindClick}
        >
          <MdFastRewind/>
        </div>
        <div
          className='controls-element play'
          onClick={() => props.onPlayClick(props.currentSongId)}
        >
          {(props.playingStatus === Sound.status.PLAYING) ? <MdPause/> : <MdPlayArrow/>}
        </div>
        <div
          className='controls-element'
          onClick={props.onForwardClick}
        >
          <MdFastForward/>
        </div>
      </PlayerControlsStyle>
  )
};

PlayerControls.propTypes = _propTypes;

export default PlayerControls;
