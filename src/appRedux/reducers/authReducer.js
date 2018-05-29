// @flow
import type { Action } from "flow/types";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from "appRedux/actions/types";

type State = {
  +userLoggedIn: boolean;
  +username: string;
}

const INITIAL_STATE = {
  userLoggedIn: false,
  username: '',
};

export default function authReducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case USER_LOGGED_IN: {
      return {
        userLoggedIn: true,
        username: action.payload.username,
      }
    }
    case USER_LOGGED_OUT: {
      return {
        userLoggedIn: false,
        username: '',
      }
    }
    default: {
      return state;
    }
  }
}
