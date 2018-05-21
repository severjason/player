import React from 'react';
import Slider from 'react-rangeslider';
import PropTypes from "prop-types";
import * as helpers from "helpers";
import SliderComponentStyle from './style';

const _defaultProps = {
  min: 0,
  max: 1,
  step: 0.01
};

const _propTypes = {
  songPosition: PropTypes.number.isRequired,
  songDuration: PropTypes.number.isRequired,
  onSlide: PropTypes.func.isRequired,
};

const SliderComponent = ({songDuration, songPosition, onSlide, ...rest}) => {

  const getPercentPlayed = (duration, position) => (!duration || !position) ? 0 : position / (duration * 1000);

  return (
    <SliderComponentStyle>
      <div className="slider">
        <Slider
          value={getPercentPlayed(songDuration, songPosition)}
          onChange={onSlide}
          snapDragDisabled={true}
          {...rest}
        />
      </div>
      <div className="labels">
        <div className="item">
          {helpers.getTimes(getPercentPlayed(songDuration, songPosition) * songDuration)}
        </div>
        <div className="item">
          {helpers.getTimes(songDuration)}
        </div>
      </div>
    </SliderComponentStyle>
  );
};

SliderComponent.defaultProps = _defaultProps;
SliderComponent.propTypes = _propTypes;

export default SliderComponent;
