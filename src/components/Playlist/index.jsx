// @flow
import * as React from 'react';
import PlaylistStyle from './style';
import type { Song } from 'flow/types';
import PlaylistSong from './Song';

type Props = {
  playlist: Array<Song>,
  currentSongId: number,
  minimized: boolean,
  onPlayClick: (id: number) => void,
  setSong: (songId: number) => void,
  removeSong: (songId: number) => void,
}

const Playlist = ({playlist, currentSongId, onPlayClick, setSong, minimized, removeSong}: Props) => {

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

export default Playlist;
