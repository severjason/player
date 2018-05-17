import React from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import Slider from 'react-rangeslider';
import { mainTheme } from '../../../styles/themes';
import * as helpers from '../../../helpers';

const SliderStyle = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    
    .slider {
      margin: 1rem 0 .5rem 0;
      .rangeslider {
        display: block;
        position: relative;
        margin: 0;
        box-shadow: inset 0 1px 3px rgba(0,0,0,.4);
        
       &:hover {
        cursor: pointer;
       }
      }
      .rangeslider-horizontal {
        height: 2px;
        border-radius: 1px;
        background: ${props=>props.theme.secondaryTextColor};
        
        .rangeslider__handle {
          display: inline-block;
          position: absolute;
          width: 2px;
          height: 16px;
          border-radius: 1px;
          top: 50%;
          transform: translate3d(-50%,-50%,0);
          background: ${props=>props.theme.mainTextColor};
          border: 1px solid #ccc;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,.4), 0 -1px 3px rgba(0,0,0,.4);
          
          &:after {
            display: none;
          }
          .rangeslider__handle-tooltip {
            display: none;
          }
        }
        
        & .rangeslider__fill {
          height: 100%;
          background-color: ${props=>props.theme.secondaryColor};
          border-radius: 1px;
          top: 0;
        }
      }
    }
    .labels {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      font-size: .65rem;
      color: ${props=>props.theme.secondaryTextColor};
    }
`;
const PlayerSlider = (props) => {
  return (
      <SliderStyle theme={mainTheme}>
        <Sound
          url={props.song.src}
          playStatus={props.playingStatus}
          position={props.songPosition}
          onFinishedPlaying={()=>props.onEndSong()}
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

export default PlayerSlider;
