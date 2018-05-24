import {
  SET_SONG,
  SET_SONG_POSITION,
  soundStatus,
  TOGGLE_PLAYING,
  RESET_PLAYING_STATUS
} from "appRedux/actions/types";

const INITIAL_STATE = {
  song: null,
  status: soundStatus.STOPPED,
  position: 0,
};

export default function currentSongReducer(state = INITIAL_STATE, action) {
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
