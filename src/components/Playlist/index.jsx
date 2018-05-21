import React from 'react';
import PlaylistStyle from './style';
import PropTypes from "prop-types";
import PlaylistSong from './Song';

const _propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      album_cover: PropTypes.string.isRequired,
      album_title: PropTypes.string.isRequired,
    })
  ),
  currentSongId: PropTypes.number.isRequired,
  minimized: PropTypes.bool,
  onPlayClick: PropTypes.func.isRequired,
  setSong: PropTypes.func.isRequired,
};

const Playlist = ({playlist, currentSongId, onPlayClick, setSong, minimized}) => {

  const songs = playlist.map((song, index) => {
    return (
        <PlaylistSong
          key={index}
          index={index + 1}
          currentSongId={currentSongId}
          onPlayClick={onPlayClick}
          setSong={setSong}
          {...song}
        />
    )
  });

  return (
    <PlaylistStyle className={minimized ? 'minimized' : ''}>
      {songs}
      {songs}
      {songs}
    </PlaylistStyle>
  )
};

Playlist.propTypes = _propTypes;

export default Playlist;
