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
  type: string,
  payload: any,
}
/*
type BaseAction = {|
  type: string,
|}

type SongIdAction = {|
  type: string,
  payload: {
    songId: number,
  }
|}

type SongAction = {|
  type: string,
  payload: {
    song: Song,
  }
|}

export type PlaylistActions =
  | BaseAction
  | SongIdAction
  | SongAction;

export type ActionPayload = {|
  song?: Song,
  status?: SoundStatus,
  position?: number,
  songId?: number,
  request?: string,
  data?: any,
  inputValue?: string,
  error?: any,
|}
*/
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
  userLogin: (name: string) => Action;
  userLogout: () => Action;
  toggleConfirmation: () => Action;
  userLoginFromDeezer: (token: string) => Action;
}

export type ReduxFormsInput = {
  input: any;
  placeholder?: string;
  label: string;
  className: string;
  errorClass: string;
  labelClass: string;
  type: string;
  meta: {
    touched: boolean;
    error: any;
    warning?: any;
  }
}
