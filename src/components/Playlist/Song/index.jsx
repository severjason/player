import React from 'react';
import PropTypes from "prop-types";
import SongStyle from './style';
import * as helpers from "helpers";
import { MdDelete} from 'react-icons/lib/md';

const _propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  album: PropTypes.shape({
    title: PropTypes.string,
    cover_big:PropTypes.string,
  }),
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
          {props.artist.name} - <strong>{props.title}</strong>
        </div>
        <div className="item small">
          {helpers.getTimes(props.duration)}
        </div>
      </div>
      <div className="delete-icon"
        onClick={() => props.removeSong(props.id)}
      >
        <MdDelete/>
      </div>
    </SongStyle>
  )
};

PlaylistSong.propTypes = _propTypes;

export default PlaylistSong;
