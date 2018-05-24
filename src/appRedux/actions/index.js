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

export const setSong = (song) => ({
  type: SET_SONG,
  payload: song,
});

export const setSongPosition = (position) => ({
  type: SET_SONG_POSITION,
  payload: position,
});

export const togglePlaylist = () => ({
  type: TOGGLE_PLAYLIST,
});

export const startPlaying = (status) => ({
  type: TOGGLE_PLAYING,
  payload: status,
});

export const resetStatus = (status) => ({
  type: RESET_PLAYING_STATUS,
  payload: status,
});

export const deleteSong = (songId) => ({
  type: DELETE_SONG,
  payload: songId,
});

export const addSong = (song) => ({
  type: ADD_SONG,
  payload: song,
});

export const searchSongsRequest = (request) => ({
  type: SEARCH_SONGS_REQUEST,
  payload: request,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const updateInput = (inputValue) => ({
  type: UPDATE_SEARCH_INPUT,
  payload: inputValue,
});