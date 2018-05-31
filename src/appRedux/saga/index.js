// @flow

import {
  SEARCH_SONGS_REQUEST,
  SONGS_REQUEST_FAILED,
  SONGS_REQUEST_SUCCESS,
  USER_LOGGED_IN, USER_LOGGED_OUT,
  USER_LOGIN_REQUEST_FROM_DEEZER,
  USER_LOGGED_OUT_FROM_DEEZER
} from "../actions/types";
import { call, put, takeLatest, all } from 'redux-saga/effects';
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

function* deezerLogin(action): Saga<void> {
  try {
    const response = yield call(api.login, action.payload.token);
    yield (response.name)
      ? put({
        type: USER_LOGGED_IN,
        payload: {
          username: response.name,
          token: action.payload.token,
        },
      })
      : put({
        type: USER_LOGGED_OUT,
        payload: {},
      });
  } catch (error) {
    yield put({
      type: USER_LOGGED_OUT,
      payload: {},
    })
  }
}

function* deezerLogout(): Saga<void> {
  try {
    yield call(api.logout);
    yield put({
      type: USER_LOGGED_OUT,
      payload: {},
    })

  } catch (error) {
    yield put({
      type: USER_LOGGED_OUT,
      payload: {},
    })
  }
}



function* watchAll(): Saga<void> {
  yield all([
    yield takeLatest(SEARCH_SONGS_REQUEST, fetchSongs),
    yield takeLatest(USER_LOGIN_REQUEST_FROM_DEEZER, deezerLogin),
    yield takeLatest(USER_LOGGED_OUT_FROM_DEEZER, deezerLogout),
  ]);
}

export default watchAll;