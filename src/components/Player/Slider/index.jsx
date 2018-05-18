import React from 'react';
import Sound from 'react-sound';
import PropTypes from "prop-types";
import SliderStyle from './style';
import SliderComponent from './SliderComponent';

const _propTypes = {
  song: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    src: PropTypes.string,
    artist: PropTypes.string,
    album_cover: PropTypes.string,
  }),
  playingStatus: PropTypes.string,
  songPosition: PropTypes.number,
  onEndSong: PropTypes.func,
  onPlaying: PropTypes.func,
  onSlide: PropTypes.func,
};

const PlayerSlider = (props) => {
  return (
      <SliderStyle>
        <Sound
          url={props.song.src}
          playStatus={props.playingStatus}
          position={props.songPosition}
          onFinishedPlaying={props.onEndSong}
          onPlaying={props.onPlaying}
        />
        <SliderComponent
          songPosition={props.songPosition}
          songDuration={props.song.duration}
          onSlide={props.onSlide}
          {...props}
        />
      </SliderStyle>
  )
};

PlayerSlider.propTypes = _propTypes;

export default PlayerSlider;
