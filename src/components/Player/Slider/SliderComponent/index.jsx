import React from 'react';
import Slider from 'react-rangeslider';
import PropTypes from "prop-types";
import * as helpers from "helpers";
import SliderComponentStyle from './style';

const SliderComponent = ({songDuration, songPosition, onSlide, ...rest}) => {

  const sliderMinValue = 0;
  const sliderMaxValue = 1;
  const sliderStep = 0.01;

  const getPercentPlayed = (duration, position) => (!duration || !position) ? 0 : position / (duration * 1000);

  return (
    <SliderComponentStyle>
      <div className="slider">
        <Slider
          min={sliderMinValue}
          max={sliderMaxValue}
          step={sliderStep}
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

SliderComponent.propTypes = {
  songPosition: PropTypes.number,
  songDuration: PropTypes.number,
  onSlide: PropTypes.func,
};

export default SliderComponent;
