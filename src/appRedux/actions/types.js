// @flow
import Sound from 'react-sound';
import type { SoundStatus } from "flow/types";

export const ADD_SONG: string = 'ADD_SONG';
export const DELETE_SONG: string  = 'DELETE_SONG';
export const TOGGLE_PLAYLIST: string  = 'TOGGLE_PLAYLIST';

export const soundStatus: {PLAYING: SoundStatus, STOPPED: SoundStatus, PAUSED: SoundStatus} = {
  PLAYING: Sound.status.PLAYING,
  STOPPED: Sound.status.STOPPED,
  PAUSED: Sound.status.PAUSED,
};

export const SET_SONG: string  = 'SET_SONG';
export const SET_SONG_POSITION: string  = 'SET_SONG_POSITION';
export const RESET_PLAYING_STATUS: string  = 'RESET_PLAYING_STATUS';
export const TOGGLE_PLAYING: string  = 'TOGGLE_PLAYING';

export const SEARCH_SONGS_REQUEST: string  = 'SEARCH_SONGS_REQUEST';
export const SONGS_REQUEST_SUCCESS: string  = 'SONGS_REQUEST_SUCCESS';
export const SONGS_REQUEST_FAILED: string  = 'SONGS_REQUEST_FAILED';
export const CLEAR_ERRORS: string  = 'CLEAR_ERRORS';
export const UPDATE_SEARCH_INPUT: string  = 'UPDATE_SEARCH_INPUT';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_LOGIN_REQUEST_FROM_DEEZER = 'USER_LOGIN_REQUEST_FROM_DEEZER';

export const TOGGLE_CONFIRMATION = 'TOGGLE_CONFIRMATION';