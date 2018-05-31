// @flow
import {
  DELETE_SONG,
  SET_SONG,
  SET_SONG_POSITION,
  TOGGLE_PLAYLIST,
  TOGGLE_PLAYING,
  RESET_PLAYING_STATUS,
  SEARCH_SONGS_REQUEST,
  CLEAR_ERRORS, ADD_SONG,
  UPDATE_SEARCH_INPUT,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  TOGGLE_CONFIRMATION,
  USER_LOGIN_REQUEST_FROM_DEEZER,
  USER_LOGGED_OUT_FROM_DEEZER,
} from "./types";
import type { Action, Song, SoundStatus } from 'flow/types';

export const setSong = (song: Song) => ({
  type: SET_SONG,
  payload: {
    song,
  },
});

export const setSongPosition = (position: number): Action => ({
  type: SET_SONG_POSITION,
  payload: {
    position,
  },
});

export const togglePlaylist = (): Action => ({
  type: TOGGLE_PLAYLIST,
  payload: {},
});

export const startPlaying = (status: SoundStatus): Action => ({
  type: TOGGLE_PLAYING,
  payload: {
    status,
  },
});

export const resetStatus = (status: SoundStatus): Action => ({
  type: RESET_PLAYING_STATUS,
  payload: {
    status,
  },
});

export const deleteSong = (songId: number): Action => ({
  type: DELETE_SONG,
  payload: {
    songId,
  },
});

export const addSong = (song: Song): Action => ({
  type: ADD_SONG,
  payload: {
    song,
  },
});

export const searchSongsRequest = (request: string): Action => ({
  type: SEARCH_SONGS_REQUEST,
  payload: {
    request,
  },
});

export const clearErrors = (): Action => ({
  type: CLEAR_ERRORS,
  payload: {},
});

export const updateInput = (inputValue: string): Action => ({
  type: UPDATE_SEARCH_INPUT,
  payload: {
    inputValue,
  },
});

export const userLogin = (name: string, token?: string): Action => ({
  type: USER_LOGGED_IN,
  payload: {
    username: name,
    token: token ? token : '',
  }
});

export const userLogout = (): Action => ({
  type: USER_LOGGED_OUT,
  payload: {}
});

export const toggleConfirmation = (): Action => ({
  type: TOGGLE_CONFIRMATION,
  payload: {},
});

export const userLoginFromDeezer = (token: string): Action => ({
  type: USER_LOGIN_REQUEST_FROM_DEEZER,
  payload: {
    token,
  }
});

export const userLogoutFromDeezer = (): Action => ({
  type: USER_LOGGED_OUT_FROM_DEEZER,
  payload: {}
});