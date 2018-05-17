import React from 'react';
import PropTypes from 'prop-types';
import SongStyle from './style'

const SongInfo = ({song}) => {
  return (
      <SongStyle>
        <div className="song-info-element">
          <img src={song.album_cover} alt={song.title}/>
        </div>
        <div className="song-info-element song-title">
          {song.title.toUpperCase()}
        </div>
        <div className="song-info-element">
          <strong>{song.artist}</strong> - {song.album_title}
        </div>
      </SongStyle>
  )
};

SongInfo.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number,
    src: PropTypes.string,
    artist: PropTypes.string,
    album_cover: PropTypes.string,
  })
};

export default SongInfo;
