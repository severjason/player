import {
  SEARCH_SONGS_REQUEST,
  SONGS_REQUEST_FAILED,
  SONGS_REQUEST_SUCCESS,
} from "../actions/types";
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from 'service/deezerAPI';

function* fetchSongs(action) {
  try {
    const response = yield call(api.findSong, action.payload);

    yield (response.data)
      ? put({
        type: SONGS_REQUEST_SUCCESS,
        payload: response,
      })
      : put({
        type: SONGS_REQUEST_FAILED,
        payload: response,
      });
  } catch (e) {
    yield put({
      type: SONGS_REQUEST_FAILED,
      payload: e,
    })
  }
}

function* searchSongs() {
  yield takeLatest(SEARCH_SONGS_REQUEST, fetchSongs);
}

export default searchSongs;
