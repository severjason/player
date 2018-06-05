// @flow
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { deezerLogin, fetchSongs, deezerLogout } from "../saga";
import {
  userLoginFromDeezer,
  userLogin,
  userLogout,
  searchSongsRequest,
  userLogoutFromDeezer,
} from 'appRedux/actions';
import * as api from "service/deezerAPI";
import { SONGS_REQUEST_FAILED, SONGS_REQUEST_SUCCESS } from "../actions/types";

describe('Deezer login flow', () => {
  const username = 'severjason';
  const token = "frZA8qwNOyzLGUd2axplhPQ9NtCI1HWgDUusWhwTSYEhvmzf5Ni";
  const loginAction = userLoginFromDeezer(token);
  const generator = cloneableGenerator(deezerLogin)(loginAction);
  expect(generator.next().value).toEqual(call(api.login, token));

  test('login success', () => {
    const clone = generator.clone();
    expect(clone.next({name: username}).value).toEqual(put(userLogin(username, token)));
    expect(clone.next().done).toEqual(true);
  });

  test('login failed', () => {
    const clone = generator.clone();
    expect(clone.next({name: false}).value).toEqual(put(userLogout()));
    expect(clone.next().done).toEqual(true);
  });

});

describe('Fetch songs flow', () => {
  const string = 'song';
  const searchAction = searchSongsRequest(string);
  const generator = cloneableGenerator(fetchSongs)(searchAction);

  test('Test api request', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(call(api.findSong, string));
  });

  test('Fetch success', () => {
    const data = 'song';
    const clone = generator.clone();
    expect(clone.next().value).toEqual(call(api.findSong, string));
    expect(clone.next({data: data}).value).toEqual(put({
      type: SONGS_REQUEST_SUCCESS,
      payload: {
        data: data,
      },
    }));
    expect(clone.next().done).toEqual(true);
  });

  test('Fetch failure', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(call(api.findSong, string));
    expect(clone.next(false).value).toEqual(put({
      type: SONGS_REQUEST_FAILED,
      payload: {
        error: false,
      },
    }));
    expect(clone.next().done).toEqual(true);
  });
});

describe('Deezer logout flow', () => {
  const generator = cloneableGenerator(deezerLogout)(userLogoutFromDeezer);

  test('Logout request success', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(call(api.logout));
  });

  test('Logout  success', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(call(api.logout));
    expect(clone.next().value).toEqual(put(userLogout()));
    expect(clone.next().done).toEqual(true);
  });
});