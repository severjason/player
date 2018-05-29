// @flow
import type { Action } from "flow/types";
import {
  TOGGLE_CONFIRMATION,
} from "appRedux/actions/types";

type State = {
  +showConfirmation: boolean;
}

const INITIAL_STATE = {
  showConfirmation: false,
};

export default function confirmationReducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case TOGGLE_CONFIRMATION: {
      return {
        showConfirmation: !state.showConfirmation,
      }
    }
    default: {
      return state;
    }
  }
}
