import React from 'react';
import PropTypes from "prop-types";
import SearchedSong from '../Song';

const _propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  checkIfSongInPlaylist: PropTypes.func.isRequired,
  toggleSong: PropTypes.func.isRequired,
};

const SearchResults = ({results, checkIfSongInPlaylist, toggleSong}) =>
  results.map((song, index) => {
    return (
      <SearchedSong
        key={index}
        index={index}
        checkIfSongInPlaylist={checkIfSongInPlaylist}
        toggleSong={toggleSong}
        {...song}
      />
    )
  });

SearchResults.propTypes = _propTypes;

export default SearchResults;
