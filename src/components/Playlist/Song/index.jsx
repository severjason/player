// @flow
import * as React from 'react';
import SongStyle from './style';
import * as helpers from 'helpers';
import type { Song } from 'flow/types';
import { MdDelete} from 'react-icons/lib/md';

type Props = {
  ...Song,
  index: number,
  currentSongId: number,
  onPlayClick: (id: number) => void,
  setSong: (songId: number) => void,
  removeSong: (songId: number) => void,
}

const PlaylistSong = (props: Props) => {
  return (
    <SongStyle >
      <div
        className='song-container'
        onClick={() => {
          props.setSong(props.id);
          props.onPlayClick(props.id);
        }}
      >
        <div className="item small">
          {props.index}
        </div>
        <div
          className={`item ${(props.currentSongId === props.id) ? 'active' : ''}`}
        >
          {props.artist.name} - <strong>{props.title}</strong>
        </div>
        <div className="item small">
          {helpers.getTimes(props.duration)}
        </div>
      </div>
      <div className="delete-icon"
        onClick={() => props.removeSong(props.id)}
      >
        <MdDelete/>
      </div>
    </SongStyle>
  )
};

export default PlaylistSong;
