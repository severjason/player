import {
  SEARCH_SONGS_REQUEST,
  SONGS_REQUEST_FAILED,
  SONGS_REQUEST_SUCCESS,
} from "../actions/types";
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from 'service/deezerAPI';

function* fetchSongs(action) {
  try {
    const response = yield call(api.findSong, action.request);

    yield (response.data)
      ? put({
      type: SONGS_REQUEST_SUCCESS,
      response,
    })
      : put({
        type: SONGS_REQUEST_FAILED,
        error: response,
      });
  } catch (e) {
    yield put({
      type: SONGS_REQUEST_FAILED,
      error: e,
    })
  }
}

function* searchSongs() {
  yield takeLatest(SEARCH_SONGS_REQUEST, fetchSongs);
}

export default searchSongs;
