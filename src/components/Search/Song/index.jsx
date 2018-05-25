// @flow
import * as React from 'react';
import SearchedSongStyle from './style';
import * as helpers from 'helpers';
import { MdAdd, MdDone } from 'react-icons/lib/md';
import type { Song } from 'flow/types';

type Props = {
  ...Song,
  index: number,
  checkIfSongInPlaylist: (songId: number) => boolean,
  toggleSong: (soundIndex: number) => void,
};

const SearchedSong = (props:Props) => {
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
            <strong>{props.title}</strong> - {props.artist.name}
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

export default SearchedSong;
