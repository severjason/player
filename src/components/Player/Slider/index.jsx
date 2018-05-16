import React from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';

const SliderStyle = styled.div`
    width: 100%;

  .slider{
    input {
      width: 100%;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const PlayerSlider = (props) => {
  return (
      <SliderStyle>
        <Sound
          url={props.song.src}
          playStatus={props.playingStatus}
          position={props.songPosition}
          onFinishedPlaying={()=>props.onEndSong()}
          onPlaying={props.onPlaying}
        />
        <div className="slider">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={props.getPercentPlayed()}
            onChange={props.onSlide}
          />
        </div>
      </SliderStyle>
  )
};

export default PlayerSlider;
