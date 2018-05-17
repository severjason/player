import React from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import { mainTheme } from '../../../styles/themes';
import { MdFastForward, MdPlayArrow, MdPause, MdFastRewind } from 'react-icons/lib/md'

const PlayerControlsStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
  .controls-element {
    padding: 1rem;
    font-size: 2rem;
    line-height: 4rem;
    :hover {
      color: ${props => props.theme.secondaryColor};
      cursor: pointer;
    }
  }
  .play {
    font-size: 4rem;
  }
`;

const PlayerControls = (props) => {
  return (
      <PlayerControlsStyle theme={mainTheme}>
        <div
          className='controls-element'
          onClick={()=>props.onRewindClick()}
        >
          <MdFastRewind/>
        </div>
        <div
          className='controls-element play'
          onClick={()=>props.onPlayClick()}
        >
          {(props.playingStatus === Sound.status.PLAYING) ? <MdPause/> : <MdPlayArrow/>}
        </div>
        <div
          className='controls-element'
          onClick={()=>props.onForwardClick()}
        >
          <MdFastForward/>
        </div>
      </PlayerControlsStyle>
  )
};

export default PlayerControls;
