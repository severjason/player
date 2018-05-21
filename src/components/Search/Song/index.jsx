import React from 'react';
import PropTypes from "prop-types";
import SearchedSongStyle from './style';
import * as helpers from "helpers";
import { MdAdd, MdDone } from 'react-icons/lib/md';

const _propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number,
  preview: PropTypes.string,
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  album: PropTypes.shape({
    title: PropTypes.string,
    cover_big:PropTypes.string,
  }),
  checkIfSongInPlaylist: PropTypes.func.isRequired,
  toggleSong: PropTypes.func.isRequired,
};

const SearchedSong = (props) => {
  return (
    <SearchedSongStyle>
      <div className="song-container"
           onClick={() => props.toggleSong(props.index)}
      >
        <div className="item small index">
          {props.index + 1}
        </div>
        <div className="item title">
          <div className="title-element">
            {props.title} - {props.artist.name}
          </div>
          <div className="title-element small">
            {helpers.getTimes(props.duration)}
          </div>
        </div>
        <div className="item add-icon">
          {props.checkIfSongInPlaylist(props.id) ? <MdDone className="done"/> : <MdAdd/>}
        </div>
      </div>
    </SearchedSongStyle>
  )
};

SearchedSong.propTypes = _propTypes;

export default SearchedSong;
