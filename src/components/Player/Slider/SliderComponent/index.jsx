// @flow
import * as React from 'react';
import Slider from 'react-rangeslider';
import { getTimes } from 'helpers';
import SliderComponentStyle from './style';

type Props = {
  min: number,
  max: number,
  step: number,
  songPosition: number,
  songDuration: number,
  onSlide: (value: number) => void,
}

const SliderComponent = ({songDuration, songPosition, onSlide, ...rest}: Props) => {

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
          {getTimes(getPercentPlayed(songDuration, songPosition) * songDuration)}
        </div>
        <div className="item">
          {getTimes(songDuration)}
        </div>
      </div>
    </SliderComponentStyle>
  );
};

SliderComponent.defaultProps = {
  min: 0,
  max: 1,
  step: 0.01
};

export default SliderComponent;
