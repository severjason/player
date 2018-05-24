// @flow
import * as React from 'react';
import SearchedSong from '../Song';
import { Song } from 'flow/interfaces';

type Props = {
  results: Array<Song>,
  checkIfSongInPlaylist: (songId: number) => boolean,
  toggleSong: () => void,
}

const SearchResults = ({results, checkIfSongInPlaylist, toggleSong}: Props) =>
  results.map((song, index) => {
    return (
      <SearchedSong
        key={song.id}
        index={index}
        checkIfSongInPlaylist={checkIfSongInPlaylist}
        toggleSong={toggleSong}
        {...song}
      />
    )
  });

export default SearchResults;
