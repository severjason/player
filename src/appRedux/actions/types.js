import Sound from 'react-sound';

export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';
export const TOGGLE_PLAYLIST = 'TOGGLE_PLAYLIST';

export const soundStatus = {
  PLAYING : Sound.status.PLAYING,
  STOPPED: Sound.status.STOPPED,
  PAUSED: Sound.status.PAUSED,
};
export const SET_SONG = 'SET_SONG';
export const SET_SONG_POSITION = 'SET_SONG_POSITION';
export const RESET_PLAYING_STATUS = 'RESET_PLAYING_STATUS';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const SEARCH_SONGS_REQUEST = 'SEARCH_SONGS_REQUEST';
export const SONGS_REQUEST_SUCCESS = 'SONGS_REQUEST_SUCCESS';
export const SONGS_REQUEST_FAILED = 'SONGS_REQUEST_FAILED';
export const SEARCH_IS_LOADING = 'SEARCH_IS_LOADING';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';