import React from 'react';
import PropTypes from "prop-types";
import SongStyle from './style';
import * as helpers from "helpers";

const _propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album_cover: PropTypes.string.isRequired,
  album_title: PropTypes.string.isRequired,
  currentSongId: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  setSong: PropTypes.func.isRequired,
};

const PlaylistSong = (props) => {
  return (
    <SongStyle >
      <div
        className='song-container'
        onClick={() => {
          props.setSong(props.id);
          props.onPlayClick(props.id);
        }}
      >
        <div className="item small">
          {props.index}
        </div>
        <div
          className={`item ${(props.currentSongId === props.id) ? 'active' : ''}`}
        >
          {props.artist} - <strong>{props.title}</strong>
        </div>
        <div className="item small">
          {helpers.getTimes(props.duration)}
        </div>
      </div>
    </SongStyle>
  )
};

PlaylistSong.propTypes = _propTypes;

export default PlaylistSong;
