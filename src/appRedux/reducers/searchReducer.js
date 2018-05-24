import {
  CLEAR_ERRORS,
  SEARCH_SONGS_REQUEST,
  SONGS_REQUEST_FAILED,
  SONGS_REQUEST_SUCCESS, UPDATE_SEARCH_INPUT,
} from "../actions/types";

const INITIAL_STATE = {
  inputValue: '',
  results: [],
  isLoading: false,
  error: {
    message: null
  }
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_SONGS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SONGS_REQUEST_SUCCESS: {
      return {
        ...state,
        results: action.payload.response.data,
        isLoading: false,
        error: {
          message: null
        },
      }
    }
    case SONGS_REQUEST_FAILED: {
      return {
        ...state,
        error: {
          message: action.payload.error,
        },
        isLoading: false,
      }
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: {
          message: null
        },
      }
    }
    case UPDATE_SEARCH_INPUT: {
      return {
        ...state,
        inputValue: action.payload.inputValue,
      }
    }
    default: {
      return state;
    }
  }
}
