import React from 'react';
import Sound from 'react-sound';
import Slider from 'react-rangeslider';
import * as helpers from 'helpers';
import PropTypes from "prop-types";
import SliderStyle from './style';

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
        <div className="slider">
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={props.getPercentPlayed()}
            onChange={props.onSlide}
            snapDragDisabled={true}
          />
        </div>
        <div className="labels">
          <div className="item">
            {helpers.getTimes(props.getPercentPlayed() * props.song.duration)}
          </div>
          <div className="item">
            {helpers.getTimes(props.song.duration)}
          </div>
        </div>
      </SliderStyle>
  )
};

PlayerSlider.propTypes = {
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
  getPercentPlayed: PropTypes.func,
  onSlide: PropTypes.func,
};

export default PlayerSlider;
