import React from 'react';
import PropTypes from "prop-types";
import SongStyle from './style';
import * as helpers from "helpers";

const _propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  src: PropTypes.string,
  artist: PropTypes.string,
  album_cover: PropTypes.string,
  album_title: PropTypes.string,
  currentSongId: PropTypes.string,
  onPlayClick: PropTypes.func,
  setSong: PropTypes.func,
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
