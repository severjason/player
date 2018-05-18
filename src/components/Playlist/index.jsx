import React from 'react';
import PlaylistStyle from './style';
import PropTypes from "prop-types";
import PlaylistSong from './Song';

const _propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      duration: PropTypes.number,
      src: PropTypes.string,
      artist: PropTypes.string,
      album_cover: PropTypes.string,
      album_title: PropTypes.string
    })
  ),
  currentSongId: PropTypes.string,
  minimized: PropTypes.bool,
  onPlayClick: PropTypes.func,
  setSong: PropTypes.func,
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
