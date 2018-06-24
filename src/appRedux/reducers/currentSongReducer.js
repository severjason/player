// @flow

import {
  SET_SONG,
  SET_SONG_POSITION,
  soundStatus,
  TOGGLE_PLAYING,
  RESET_PLAYING_STATUS
} from "appRedux/actions/types";
import type { Action, Song, SoundStatus } from "flow/types";

const INITIAL_STATE = {
  song: null,
  status: soundStatus.STOPPED,
  position: 0,
};

type State = {
  +song: Song | null,
  +status: SoundStatus,
  +position: number,
}

export default function currentSongReducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case SET_SONG: {
      return {
        ...state,
        song: action.payload.song,
      }
    }
    case SET_SONG_POSITION: {
      return {
        ...state,
        position: action.payload.position,
      }
    }
    case TOGGLE_PLAYING: {
      return (action.payload.status === soundStatus.PLAYING)
        ? {...state, status: soundStatus.PAUSED}
        : {...state, status: soundStatus.PLAYING}
    }
    case RESET_PLAYING_STATUS: {
      return (action.payload.status === soundStatus.PLAYING)
        ? {...state, status: soundStatus.PLAYING}
        : {...state, status: soundStatus.STOPPED}
    }
    default: {
      return state;
    }
  }
}
