import React from 'react';
import Sound from 'react-sound';
import PropTypes from "prop-types";
import SliderStyle from './style';
import SliderComponent from './SliderComponent';
import SongInfo from '../SongInfo';

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
  minimized: PropTypes.bool,
  onEndSong: PropTypes.func,
  onPlaying: PropTypes.func,
  onSlide: PropTypes.func,
};

const PlayerSlider = (props) => {
  return (
      <SliderStyle className={props.minimized ? 'minimized' : ''}>
        <Sound
          url={props.song.src}
          playStatus={props.playingStatus}
          position={props.songPosition}
          onFinishedPlaying={props.onEndSong}
          onPlaying={props.onPlaying}
        />
        <SongInfo song={props.song} />
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
