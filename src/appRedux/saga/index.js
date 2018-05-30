// @flow

import {
  SEARCH_SONGS_REQUEST,
  SONGS_REQUEST_FAILED,
  SONGS_REQUEST_SUCCESS,
} from "../actions/types";
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from 'service/deezerAPI';

import type { Saga } from 'redux-saga';

function* fetchSongs(action): Saga<void> {
  try {
    const response = yield call(api.findSong, action.payload.request);

    yield (response.data)
      ? put({
        type: SONGS_REQUEST_SUCCESS,
        payload: {
          data: response.data,
        },
      })
      : put({
        type: SONGS_REQUEST_FAILED,
        payload: {
          error: response,
        },
      });
  } catch (error) {
    yield put({
      type: SONGS_REQUEST_FAILED,
      payload: {
        error
      },
    })
  }
}

function* searchSongs(): Saga<void> {
  yield takeLatest(SEARCH_SONGS_REQUEST, fetchSongs);
}

export default searchSongs;
