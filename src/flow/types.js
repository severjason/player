// @flow
import Sound from "react-sound";

export type Song = {|
  id: number,
  title: string,
  duration: number,
  preview: string,
  artist: {
    name: string,
  },
  album: {
    title: string,
    cover_big: string,
  },
|}

export type SoundStatus = Sound.status.STOPPED | Sound.status.PLAYING | Sound.status.PAUSED;

export type Action = {
  +type: string,
  +payload: any,
}

export type Actions = {
  setSong: (song: Song | null) => Action;
  setSongPosition: (position: number) => Action;
  togglePlaylist: () => Action;
  startPlaying: (status: SoundStatus) => Action;
  resetStatus: (status: SoundStatus) => Action;
  deleteSong: (songId: number) => Action;
  addSong: (song: Song) => Action;
  searchSongsRequest: (request: string) => Action;
  clearErrors: () => Action;
  updateInput: (inputValue: string) => Action;
}
