import {
  CLEAR_ERRORS,
  SEARCH_IS_LOADING,
  SONGS_REQUEST_FAILED,
  SONGS_REQUEST_SUCCESS, UPDATE_SEARCH_INPUT,
} from "../actions/types";

const INITIAL_STATE = {
  inputValue: '',
  results: [],
  isLoading: false,
  error: {
    isError: false,
    data: {}
  }
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_IS_LOADING: {
      return {
        ...state,
        isLoading: action.boolean,
      }
    }
    case SONGS_REQUEST_SUCCESS: {
      return {
        ...state,
        results: action.response.data,
        isLoading: false,
        error: INITIAL_STATE.error,
      }
    }
    case SONGS_REQUEST_FAILED: {
      return {
        ...state,
        error: {
          isError: true,
          data: action.error,
        },
        isLoading: false,
      }
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: INITIAL_STATE.error,
      }
    }
    case UPDATE_SEARCH_INPUT: {
      return {
        ...state,
        inputValue: action.inputValue,
      }
    }
    default: {
      return state;
    }
  }
}
