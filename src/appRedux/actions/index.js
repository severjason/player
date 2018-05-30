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