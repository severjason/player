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
      preview: PropTypes.string.isRequired,
      artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      album: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover_big:PropTypes.string.isRequired,
      }),
    })
  ),
  currentSongId: PropTypes.number.isRequired,
  minimized: PropTypes.bool,
  onPlayClick: PropTypes.func.isRequired,
  setSong: PropTypes.func.isRequired,
  removeSong: PropTypes.func.isRequired,
};

const Playlist = ({playlist, currentSongId, onPlayClick, setSong, minimized, removeSong}) => {

  const songs = playlist.map((song, index) => {
    return (
        <PlaylistSong
          key={song.id}
          index={index + 1}
          currentSongId={currentSongId}
          onPlayClick={onPlayClick}
          setSong={setSong}
          removeSong={removeSong}
          {...song}
        />
    )
  });

  return (
    <PlaylistStyle className={minimized ? 'minimized' : ''}>
      {songs}
    </PlaylistStyle>
  )
};

Playlist.propTypes = _propTypes;

export default Playlist;
