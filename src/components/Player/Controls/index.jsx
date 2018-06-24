// @flow
import * as React from 'react';
import Sound from 'react-sound';
import { MdFastForward, MdPlayArrow, MdPause, MdFastRewind } from 'react-icons/lib/md';
import PlayerControlsStyle from './style';

type Props ={
  playingStatus: string,
  currentSongId: number,
  minimized: boolean,
  onPlayClick: (id: number) => void,
  onForwardClick: () => void,
  onRewindClick: () => void,
}

const PlayerControls = (props: Props) => {
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

export default PlayerControls;
