import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../../../styles/themes';

const SongStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  .song-info-element {
    width: 100%;
    padding: .5rem .5rem 0 .5rem;
    color: ${props => props.theme.secondaryTextColor};
    font-size: .7rem;
    text-align: center;
    
    img {
      display: block;
      max-height: 18rem;
      margin: 0 auto;
      border-radius: 3px;
      box-shadow: 0 0 20px 3px rgba(0,0,0,0.66);
    }
  }
  .song-title {
      padding-top: 1rem;
      color: ${props => props.theme.mainTextColor};
      font-weight: bold;
      font-size: 1.1rem;
    }
`;

const SongInfo = ({song}) => {
  return (
      <SongStyle theme={mainTheme}>
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

export default SongInfo;
